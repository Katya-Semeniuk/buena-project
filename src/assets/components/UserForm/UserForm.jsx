import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StepProgressBar } from "../StepProgressBar/StepProgressBar";
import Pg1 from "../Pg1/Pg1";
import Pg2 from "../Pg2/Pg2";
import Pg3 from "../Pg3/Pg3";

function UserForm({ handleClose }) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const backtStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const pages = [
    <Pg1 key="1" next={nextStep} />,
    <Pg2 key="2" next={nextStep} prev={backtStep} />,
    <Pg3 key="3" prev={backtStep} handleClose={handleClose} />,
  ];

  return (
    <Container>
      <Row>
        <Col>
          <StepProgressBar step={currentStep} />
        </Col>
      </Row>
      <div>{pages[currentStep]}</div>
    </Container>
  );
}

export default UserForm;
