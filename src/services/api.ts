import axios from "axios";
import { Note } from "../types/Note";
const getApiUrl = () => {
  const currentUrl = window.location.origin;
  if (currentUrl.includes("localhost") || currentUrl.includes("127.0.0.1")) {
    return "http://localhost:8080"; // Local API URL
  }
  return process.env.REACT_APP_API_URL;
};
const API_URL = getApiUrl();

export const getNotes = async (): Promise<Note[]> => {
  const response = await axios.get(`${API_URL}/notes`);
  return response.data;
};
export const getNote = async (id: string): Promise<Note> => {
  const response = await axios.get(`${API_URL}/notes/${id}`);
  return response.data;
};
export const createNote = async (note: Partial<Note>): Promise<Note> => {
  const response = await axios.post(`${API_URL}/notes`, note);
  return response.data;
};
export const updateNote = async (
  id: string,
  note: Partial<Note>
): Promise<Note> => {
  const response = await axios.put(`${API_URL}/notes/${id}`, note);
  return response.data;
};
export const deleteNote = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/notes/${id}`);
};
