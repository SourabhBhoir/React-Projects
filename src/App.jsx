import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load notes on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(stored);
  }, []);

  // Save notes to localStorage on update
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  // Filter notes by search
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📘 Personal Notes Manager</h1>
      <NoteForm addNote={addNote} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
