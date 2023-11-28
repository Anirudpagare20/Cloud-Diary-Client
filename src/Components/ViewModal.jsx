import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const ViewModal = ({ show, onHide, note }) => {
    const animation = useSpring({
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0%)" : "translateY(-50%)",
    });

    return (
        <Modal show={show} onHide={onHide} centered>
            <animated.div style={animation}>
                <Modal.Header closeButton>
                    <Modal.Title>{note.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{note.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                </Modal.Footer>
            </animated.div>
        </Modal>
    );
};

export default ViewModal;
