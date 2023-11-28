import React, { useContext, useEffect } from 'react';
import NoteContext from '../Context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const history = useHistory();
  const { notes, getNotes } = noteContext;

  useEffect(() => {
    const checkTokenAndFetchNotes = async () => {
      if (!localStorage.getItem('token')) {
        // Redirect to the login page if the user is not authenticated
        history.push("/login");
      } else {
        await getNotes();
      }
    };

    checkTokenAndFetchNotes();
  }, [getNotes, history]);

  return (
    <>
      <AddNote />
      <section className='row my-3'>
        <h2>Your Notes</h2>
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => (
            <Noteitem key={note._id} note={note} />
          ))
        ) : (
          <p>No notes available</p>
        )}
      </section>
    </>
  );
};

export default Notes;
