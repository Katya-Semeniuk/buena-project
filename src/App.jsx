import { useState } from "react";
import viteLogo from "/vite.svg";
import { Pg1 } from "./assets/components/Pg1/Pg1";

import { Container, Row, Col, Button } from "react-bootstrap";
import { StepProgressBar } from "./assets/components/StepProgressBar/StepProgressBar";
import "./App.css";

function App() {
  const [index, setIndex] = useState(1);

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextButton = () => {
    if (index < 3) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Container className="custom-margin">
        <Row>
          <Col>
            <StepProgressBar step={index} />
          </Col>
        </Row>
        <Row>
          <h2 className="center">Title</h2>
        </Row>
        <Pg1 />
        <Button onClick={prevButton}>Prev</Button>
        <Button onClick={nextButton}>Next</Button>
      </Container>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
    </>
  );
}

export default App;
