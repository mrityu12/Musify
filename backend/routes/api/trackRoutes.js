
import express from "express";
import {
  uploadTrack,
  getAllTracks,
  getTracks,
  createTrack,
  getTrackById,
  updateTrack,
} from "../../controllers/trackController.js";
import { protect } from "../../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.get("/all", getAllTracks);         
router.get("/", protect, getTracks);      
router.post("/", protect, createTrack);  
router.get("/:id", protect, getTrackById);
router.put("/:id", protect, updateTrack);
router.post("/upload", protect, uploadTrack);

export default router;
