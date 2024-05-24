import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Button, Form } from "react-bootstrap";

export const Pg1 = () => {
  const { firstName, setFirstName, secondName, setSecondName } =
    useContext(FormContext);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const resetPage1 = () => {
    setFirstName("");
    setSecondName("");
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSecondName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          value={secondName}
          onChange={handleSecondNameChange}
        />
      </Form.Group>
      <Button as="input" type="reset" value="Reset" onClick={resetPage1} />
    </Form>
  );
};
