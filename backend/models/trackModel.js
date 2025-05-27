import mongoose from "mongoose";


const trackSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String },
  genre: { type: String },
  duration: { type: Number }, 
  audioUrl: { type: String, required: true }, 
  coverImage: { type: String }, 
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

const Track = mongoose.model("Track", trackSchema);
export default Track;
