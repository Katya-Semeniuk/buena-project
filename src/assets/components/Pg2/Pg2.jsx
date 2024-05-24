import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Button, Form } from "react-bootstrap";

export const Pg2 = () => {
  const { email, setEmail, phone, setPhone } = useContext(FormContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const resetPage2 = () => {
    setEmail("");
    setPhone("");
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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

      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          value={phone}
          onChange={handlePhoneChange}
        />
      </Form.Group>
      <Button as="input" type="reset" value="Reset" onClick={resetPage2} />
    </Form>
  );
};
