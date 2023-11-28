import React, { useState, useContext } from "react";
import NoteContext from "../Context/notes/NoteContext";
import { Modal, Button, Form } from "react-bootstrap";


const NoteItem = (props) => {
    const { note } = props;

    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedNote, setEditedNote] = useState({
        title: note.title,
        description: note.description,
        tag: note.tags,
    });

    const handleViewClick = () => {
        setShowViewModal(true);
    };

    const handleEditClick = () => {
        setShowEditModal(true);
    };

    const handleClose = () => {
        setShowViewModal(false);
        setShowEditModal(false);
    };

    const handleSaveChanges = () => {
        const { title, description, tag } = editedNote;
        // Call the editNote function from context to update the note
        editNote(note._id, title, description, tag);
        setShowEditModal(false);
    };
    const handleCopyClick = () => {
        // Copy the note text to the clipboard
        navigator.clipboard.writeText(`${note.title}\n${note.description}\nTags: ${note.tags}`);
    };
    const handleShareClick = () => {
        // Use the Web Share API to share the note content
        if (navigator.share) {
            navigator.share({
                title: note.title,
                text: `${note.description}\nTags: ${note.tags}`,
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
        }
    };

    const context = useContext(NoteContext);
    const { deleteNote, editNote } = context;

    return (
        <div className="col-md-3">
            <div className="rounded-corners">
                <div className="card my-3 note-card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <div className="icon-container">
                            <i
                                className="fa-solid fa-trash-can mx-3 delete-icon"
                                onClick={() => deleteNote(note._id)}
                            ></i>
                            <i
                                className="fa-solid fa-pen-to-square mx-3 edit-icon"
                                onClick={handleEditClick}
                            ></i>
                            <i
                                className="fa-solid fa-search mx-3 view-icon"
                                onClick={handleViewClick}
                            ></i>
                         <i
                                className=" fa-solid fa-copy mx-3 copy-icon"
                                onClick={handleCopyClick}
                                ></i>
                                
                                <i
                                className="fa-solid fa-share mx-3 share-icon"
                                onClick={handleShareClick}
                                ></i>
                        </div>
                    </div>
                </div>
            </div>
            {/* View Modal */}
            <Modal show={showViewModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>View Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Title: {note.title}</p>
                    <p>Description: {note.description}</p>
                    <p>Tag: {note.tags}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {/* Form fields for editing */}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={editedNote.title}
                                onChange={(e) => setEditedNote({ ...editedNote, title: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter description"
                                value={editedNote.description}
                                onChange={(e) => setEditedNote({ ...editedNote, description: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formTag">
                            <Form.Label>Tag</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter tag"
                                value={editedNote.tag}
                                onChange={(e) => setEditedNote({ ...editedNote, tag: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    );
};

export default NoteItem;
