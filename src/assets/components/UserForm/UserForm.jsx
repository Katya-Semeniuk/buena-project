import { useState, useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { StepProgressBar } from "../StepProgressBar/StepProgressBar";
import Pg1 from "../Pg1/Pg1";
import Pg2 from "../Pg2/Pg2";
import Pg3 from "../Pg3/Pg3";

function UserForm({ closeModalWindow }) {
  const { firstName, secondName, email, phone, salary } =
    useContext(FormContext);
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

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const formObj = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      phone: phone,
      salary: salary,
    };
    closeModalWindow();
  };
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <StepProgressBar step={page} />
        </Col>
      </Row>
      <Form>
        <Row>{page === 1 ? <Pg1 /> : page === 2 ? <Pg2 /> : <Pg3 />}</Row>
        {page > 1 && <Button onClick={backButton}>Back</Button>}
        {page < 3 && <Button onClick={nextButton}>Next</Button>}
        {page === 3 && (
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        )}

        {/* <Button type="submit" value="Submit" onClick={submitForm}>
        <Link to="/account">Submit</Link>
       
      </Button> */}
      </Form>
      <Alert variant="success">Hey, nice to see you</Alert>
    </Container>
  );
}

export default UserForm;
