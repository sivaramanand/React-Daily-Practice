import React, { useState } from "react";
import "./style.css";

const Notesapp = () => {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  const saveNotes = () => {
    if (inputText.trim()) {
      setNotes([...notes, inputText]);
      setInputText("");
    }
  };

  const deleteNotes = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNotes = (index) => {
    setInputText(notes[index]);
    setNotes(notes.filter((_, i) => i !== index));
  };

  const char = 100;
  const charLimit = char - inputText.length;

  return (
    <div className="app-container">
      <h1>Notes</h1>
      <div className="notes">
        <textarea
          rows={5}
          cols={10}
          placeholder="Type your note here..."
          maxLength={100}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <div className="notefooter">
          <span className="label">{charLimit} characters left</span>
          <button className="note_save" onClick={saveNotes}>
            Save
          </button>
        </div>
        <div className="noteslist">
          {notes.map((item, index) => (
            <div key={index} className="note-item">
              <p>{item}</p>
              <div className="buttons">
                <button className="edit-btn" onClick={() => editNotes(index)}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteNotes(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notesapp;
