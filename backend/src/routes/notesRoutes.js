import express from "express";
import {
  deleteNote,
  updateNote,
  createNote,
  fetechNotes,
  fetechNoteById,
} from "../controller/notesController.js";
const router = express.Router();
router.get("/", fetechNotes);
router.get("/:id", fetechNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
export default router;
