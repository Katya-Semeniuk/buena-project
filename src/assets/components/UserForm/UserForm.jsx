import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { StepProgressBar } from "../StepProgressBar/StepProgressBar";
import Pg1 from "../Pg1/Pg1";
import Pg2 from "../Pg2/Pg2";
import Pg3 from "../Pg3/Pg3";

function UserForm() {
  const [page, setPage] = useState(1);

  const backButton = () => {
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
    <Container>
      <Row className="mb-4">
        <Col>
          <StepProgressBar step={page} />
        </Col>
      </Row>

      <Row>{page === 1 ? <Pg1 /> : page === 2 ? <Pg2 /> : <Pg3 />}</Row>
      {page > 1 && <Button onClick={backButton}>Back</Button>}
      {page < 3 && <Button onClick={nextButton}>Next</Button>}
    </Container>
  );
}

export default UserForm;
