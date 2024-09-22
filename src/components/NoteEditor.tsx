import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createNote, getNote, updateNote } from "../services/api";
import { Note } from "../types/Note";
const NoteEditor: React.FC = () => {
  const [note, setNote] = useState<Note>({
    id: "",
    title: "",
    body: "",
    createdAt: "",
    updatedAt: "",
  });
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      fetchNote(id);
    }
  }, [id]);
  const fetchNote = async (noteId: string) => {
    try {
      const fetchedNote = await getNote(noteId);
      setNote(fetchedNote);
    } catch (error) {
      console.error("Failed to fetch note:", error);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await updateNote(id, note);
      } else {
        await createNote(note);
      }
      navigate("/");
    } catch (error) {
      console.error("Failed to save note:", error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={note.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="body" className="block mb-2">
          Body:
        </label>
        <textarea
          id="body"
          name="body"
          value={note.body}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
          rows={5}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {id ? "Update Note" : "Create Note"}
      </button>
    </form>
  );
};
export default NoteEditor;
