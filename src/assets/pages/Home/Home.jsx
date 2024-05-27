import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ModalWindow from "../../components/modalwindow/ModalWindow";
import NavBar from "../../components/NavBar/NavBar";
import "./Home.css";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBar openModal={handleShow} />
      <Container className="text-center">
        <h1 className="title">
          Register with Buena and start booking apartments
        </h1>
        <Button className="fs-5" variant="primary" onClick={handleShow}>
          Start now
        </Button>
      </Container>

      <ModalWindow show={show} handleClose={handleClose} />
    </>
  );
}

export default Home;
