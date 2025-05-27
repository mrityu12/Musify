import asyncHandler from "express-async-handler";
import multer from "multer";
import path from "path";
import Track from "../models/trackModel.js";




const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads")); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single("audioFile");

// ✅ Upload Track
export const uploadTrack = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "Upload failed", error: err });
    }

    try {
      const { title, artist } = req.body;
      const audioUrl = `/uploads/${req.file.filename}`;
      const newTrack = new Track({ title, artist, audioUrl, user: req.user.id });

      await newTrack.save();
      res.status(201).json({ message: "Track uploaded successfully", track: newTrack });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error });
    }
  });
};

export const getTracks = asyncHandler(async (req, res) => {
  const tracks = await Track.find({user:req.user.id});
  res.json(tracks);
});

export const getAllTracks = asyncHandler(async (req, res) => {
  const tracks = await Track.find().populate("user", "name");
  res.json(tracks);
});


export const createTrack = asyncHandler(async (req, res) => {
  const { title, artist, audioUrl } = req.body;

  const track = new Track({ title, artist, audioUrl, user: req.user.id });
  const createdTrack = await track.save();

  res.status(201).json(createdTrack);
});

export const getTrackById = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);

  if (track) {
    res.json(track);
  } else {
    res.status(404).json({ message: "Track not found" });
  }
});


export const updateTrack = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);

  if (track) {
    track.title = req.body.title || track.title;
    track.artist = req.body.artist || track.artist;

    const updatedTrack = await track.save();
    res.json({ message: "Track updated successfully", track: updatedTrack });
  } else {
    res.status(404).json({ message: "Track not found" });
  }
});


export const deleteTrack = asyncHandler(async (req, res) => {
  const track = await Track.findById(req.params.id);

  if (track) {
    await track.deleteOne();
    res.json({ message: "Track deleted successfully" });
  } else {
    res.status(404).json({ message: "Track not found" });
  }
});
