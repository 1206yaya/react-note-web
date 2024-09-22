import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import NoteEditor from "./components/NoteEditor";
const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Note App!</h1>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/new" element={<NoteEditor />} />
          <Route path="/edit/:id" element={<NoteEditor />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
