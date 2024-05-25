import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Form } from "react-bootstrap";

function Pg1() {
  const {
    firstName,
    setFirstName,
    secondName,
    setSecondName,
    email,
    setEmail,
  } = useContext(FormContext);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          autoFocus
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSecondName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          type="text"
          value={secondName}
          onChange={handleSecondNameChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
        <Form.Text className="text-muted">
          Well never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default Pg1;
