import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Form, Container, Row, Col } from "react-bootstrap";

function Pg2() {
  const { email, setEmail, phone, setPhone } = useContext(FormContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
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
        <Form.Control type="tel" value={phone} onChange={handlePhoneChange} />
      </Form.Group>

      <Container>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-4 mt-4">
            <Row>
              <Col>
                <Form.Check
                  inline
                  label="0 - 1.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-1`}
                />
              </Col>
              <Col>
                <Form.Check
                  label="1.000 - 2.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-2`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Check
                  label="2.000 - 3.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-3`}
                />
              </Col>
              <Col>
                <Form.Check
                  label="3.000 - 4.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-3`}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Check
                  label="Mehr als 4.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-3`}
                />
              </Col>
            </Row>
          </div>
        ))}
      </Container>

      {/* {["radio"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="0 - 1.000"
            name="group1"
            type={type}
            id={`default-${type}-1`}
          />
          <Form.Check
            label="1.000 - 2.000"
            name="group1"
            type={type}
            id={`default-${type}-2`}
          />
          <Form.Check
            label="2.000 - 3.000"
            name="group1"
            type={type}
            id={`default-${type}-3`}
          />
          <Form.Check
            label="3.000 - 4.000"
            name="group1"
            type={type}
            id={`default-${type}-3`}
          />
          <Form.Check
            label="Mehr als 4.000"
            name="group1"
            type={type}
            id={`default-${type}-3`}
          />
        </div>
      ))} */}
    </Form>
  );
}

export default Pg2;
