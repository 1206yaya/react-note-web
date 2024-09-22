import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getNotes, deleteNote } from "../services/api";
import { Note } from "../types/Note";
const NoteList: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };
  return (
    <div>
      <Link
        to="/new"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Create New Note
      </Link>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            className="border p-4 mb-2 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold">{note.title}</h2>
              <p>{note.body.substring(0, 100)}...</p>
            </div>
            <div>
              <Link
                to={`/edit/${note.id}`}
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(note.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NoteList;
