import { useState } from "react";
import Button from "react-bootstrap/Button";
import NavBar from "../../components/NavBar/NavBar";
import ModalWindow from "../../components/modalwindow/ModalWindow";

import FormExample from "../../components/FormikForm";
function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavBar />
      <div>Register with Buena and start booking apartments</div>
      <Button variant="primary" onClick={handleShow}>
        Start now
      </Button>
      <FormExample />
      <ModalWindow show={show} handleClose={handleClose} />
    </>
  );
}

export default Home;
