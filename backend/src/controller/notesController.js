import Note from "../model/Note.js";
export async function deleteNote(req, res) {
  try {
    const deletenote = await Note.findByIdAndDelete(req.params.id);
    if (!deletenote) return res.status(404).json({ message: "note not found" });
    res.status(200).send({ message: "have been deleted" });
  } catch (error) {
    res.status(500).json({ message: "internal server error" }, error);
  }
}
export async function updateNote(req, res) {
  const { title, content } = req.body;
  const updateNote = await Note.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true },
  );
  if (!updateNote) return res.status(404).json({ message: "Note not found" });
  res.status(200).json(updateNote);
}
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title: title, content: content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("createNote not working", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function fetechNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("fetechNotes not working", error);
    res.status(500).json({ message: "internal server error" });
  }
}
export async function fetechNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.error("fetechNoteById not working", error);
    res.status(500).json({ message: "internal server error" });
  }
}
