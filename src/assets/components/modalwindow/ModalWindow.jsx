import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import UserForm from "../UserForm/UserForm";

function ModalWindow({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-uppercase">Register Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm handleClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
