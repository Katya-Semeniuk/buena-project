import { useState } from "react";
import viteLogo from "/vite.svg";
import { Pg1 } from "./assets/components/Pg1/Pg1";
import { Pg2 } from "./assets/components/Pg2/Pg2";
import { Pg3 } from "./assets/components/Pg3/Pg3";

import { Container, Row, Col, Button } from "react-bootstrap";
import { StepProgressBar } from "./assets/components/StepProgressBar/StepProgressBar";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  const prevButton = () => {
    if (page > 1) {
      setPage((prevIndex) => prevIndex - 1);
    }
  };
  const nextButton = () => {
    if (page < 3) {
      setPage((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <Container className="custom-margin">
        <Row>
          <Col>
            <StepProgressBar step={page} />
          </Col>
        </Row>
        <Row>
          <h2 className="center">Title</h2>
        </Row>
        <Row>{page == 1 ? <Pg1 /> : page == 2 ? <Pg2 /> : <Pg3 />}</Row>

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
