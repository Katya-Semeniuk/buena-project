import Form from "react-bootstrap/Form";

export const Pg1 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSecondName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </Form>
  );
};
