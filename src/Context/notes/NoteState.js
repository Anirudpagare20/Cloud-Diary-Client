// NoteState.js
import React, { useState } from "react";
import NoteContext from "./NoteContext";
// NoteState.js
// NoteState.js
import Alert from "../../Components/Alert";


const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'), // Replace with your actual token
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
      showAlert("Error fetching notes", "danger");
    }
  };

  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'), // Replace with your actual token
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      const newNote = {
        _id: json._id,
        user: "654fe67e0d308b3b0a868b4dc",
        title: title,
        description: description,
        tags: tag,
        date: "2023-11-14T16:49:54.956Z",
        __v: 0,
      };

      setNotes([...notes, newNote]);
      showAlert("Note added successfully", "success");
    } catch (error) {
      console.error("Error adding note:", error);
      showAlert("Error adding note", "danger");
    }
  };

  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": localStorage.getItem('token'), // Include only the auth-token header
        },
      });

      const updatedNotes = notes.filter((note) => note._id !== id);
      setNotes(updatedNotes);
      showAlert("Note deleted successfully", "success");
    } catch (error) {
      console.error("Error deleting note:", error);
      showAlert("Error deleting note", "danger");
    }
  };

  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'), // Replace with your actual token
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note._id === id
            ? {
                ...note,
                title: json.title,
                description: json.description,
                tags: json.tag,
              }
            : note
        )
      );

      showAlert("Note updated successfully", "success");
    } catch (error) {
      console.error("Error updating note:", error);
      showAlert("Error updating note", "danger");
    }
  };

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });

    // You can also automatically hide the alert after a certain duration if needed
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "success" });
    }, 3000); // Hide the alert after 3 seconds (adjust the duration as needed)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
      <Alert show={alert.show} message={alert.message} type={alert.type} />
    </NoteContext.Provider>
  );
};

export default NoteState;
