import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return;

    const newNote = {
      title,
      desc,
      dueDate,
      createdAt: new Date().toLocaleString()
    };

    addNote(newNote);
    setTitle('');
    setDesc('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Note Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
