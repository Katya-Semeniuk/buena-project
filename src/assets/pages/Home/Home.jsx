import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalWindow from "../../components/modalwindow/ModalWindow";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header>Header</header>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
      <ModalWindow show={show} handleClose={handleClose} />
    </>
  );
}

export default Home;
