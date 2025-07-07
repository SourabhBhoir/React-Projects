import React from 'react';

function NoteList({ notes, deleteNote }) {
  if (notes.length === 0) return <p>No notes found.</p>;

  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h3>{note.title}</h3>
          <p>{note.desc}</p>
          {note.dueDate && <p><strong>Due:</strong> {note.dueDate}</p>}
          <p className="timestamp">🕒 Created at: {note.createdAt}</p>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
