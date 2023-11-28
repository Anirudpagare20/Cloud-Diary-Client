import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/NoteContext";
import { CSSTransition } from "react-transition-group";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const [isNoteAdded, setNoteAdded] = useState(false);

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNoteAdded(true);

    // Reset the form after adding the note
    setNote({
      title: "",
      description: "",
      tag: "default",
    });

    // Reset the "Note Added" text after 2 seconds
    setTimeout(() => {
      setNoteAdded(false);
    }, 2000);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div>
          <h2 className="mb-4">Add a Note</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                onChange={onChange}
                value={note.title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={onChange}
                value={note.description}
              />
            </div>
            <button
              type="submit"
              className={`btn btn-success mb-3 ${isNoteAdded ? "disabled" : ""}`}
              onClick={handleAddNote}
              disabled={isNoteAdded}
            >
              {isNoteAdded ? "Note Added" : "Add Note"}
            </button>
          </form>
        </div>
      </CSSTransition>
    </div>
  );
};

export default AddNote;
