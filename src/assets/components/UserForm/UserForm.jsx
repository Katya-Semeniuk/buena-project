// import { useState, useContext } from "react";
// import FormContext from "../formcontext/form.context";
// import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
// import { StepProgressBar } from "../StepProgressBar/StepProgressBar";
// import Pg1 from "../Pg1/Pg1";
// import Pg2 from "../Pg2/Pg2";
// import Pg3 from "../Pg3/Pg3";

// function UserForm() {
//   const { firstName, lastName, email, phone, salary } = useContext(FormContext);

//   const [page, setPage] = useState(1);
//   const [validated, setValidated] = useState(false);

//   const backButton = () => {
//     if (page > 1) {
//       setPage((prev) => prev - 1);
//     }
//   };
//   const nextButton = () => {
//     if (page < 3) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   const submitForm = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     if (form.checkValidity() === false) {
//       console.log("validation error");
//       e.preventDefault();
//       e.stopPropagation();
//     }
//     setValidated(true);
//     if (form.checkValidity() === true) {
//       const formObj = {
//         firstName: firstName,
//         secondName: lastName,
//         email: email,
//         phone: phone,
//         salary: salary,
//       };
//       console.log("formObj", formObj);
//       console.log("form submitted");
//       <Alert variant="success">Hey, nice to see you</Alert>;
//     }
//   };

//   return (
//     <Container>
//       <Row className="mb-4">
//         <Col>
//           <StepProgressBar step={page} />
//         </Col>
//       </Row>
//       <Form noValidate validated={validated} onSubmit={submitForm}>
//         <Row>{page === 1 ? <Pg1 /> : page === 2 ? <Pg2 /> : <Pg3 />}</Row>
//         {page > 1 && <Button onClick={backButton}>Back</Button>}
//         {page < 3 && <Button onClick={nextButton}>Next</Button>}
//         {page === 3 && (
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         )}

//       </Form>
//     </Container>
//   );
// }

// export default UserForm;

import { useState, useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { StepProgressBar } from "../StepProgressBar/StepProgressBar";
import Pg1 from "../Pg1/Pg1";
import Pg2 from "../Pg2/Pg2";
import Pg3 from "../Pg3/Pg3";

function UserForm() {
  const { firstName, lastName, email, phone, salary } = useContext(FormContext);

  const [page, setPage] = useState(1);
  const [validated, setValidated] = useState(false);

  const backButton = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const nextButton = () => {
    if (page < 3) {
      setPage((prev) => prev + 1);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      console.log("validation error");
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      const formObj = {
        firstName: firstName,
        secondName: lastName,
        email: email,
        phone: phone,
        salary: salary,
      };
      console.log("formObj", formObj);
      console.log("form submitted");
      <Alert variant="success">Hey, nice to see you</Alert>;
    }
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <StepProgressBar step={page} />
        </Col>
      </Row>

      <Form noValidate validated={validated} onSubmit={submitForm}>
        <Row>{page === 1 ? <Pg1 /> : page === 2 ? <Pg2 /> : <Pg3 />}</Row>
        {page > 1 && <Button onClick={backButton}>Back</Button>}
        {page < 3 && <Button onClick={nextButton}>Next</Button>}
        {page === 3 && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default UserForm;
