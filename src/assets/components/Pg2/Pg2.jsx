import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Form, Container, Row, Col } from "react-bootstrap";

function Pg2() {
  const { phone, setPhone, setSalary } = useContext(FormContext);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control
          required
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
        />
        <Form.Control.Feedback type="invalid">
          Please enter correct phone format
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Label>Salary indication:</Form.Label>
      <Container>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-4">
            <Row className="mb-2">
              <Col>
                <Form.Check
                  required
                  inline
                  label="0 - 1.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-1`}
                  onChange={handleSalary}
                  value="0 - 1.000"
                />
              </Col>
              <Col>
                <Form.Check
                  label="1.000 - 2.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-2`}
                  onChange={handleSalary}
                  value="1.000 - 2.000"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Form.Check
                  label="2.000 - 3.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-3`}
                  onChange={handleSalary}
                  value="2.000 - 3.000"
                />
              </Col>
              <Col>
                <Form.Check
                  label="3.000 - 4.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-4`}
                  onChange={handleSalary}
                  value="3.000 - 4.000"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <Form.Check
                  label="Mehr als 4.000"
                  name="group1"
                  type={type}
                  id={`default-${type}-5`}
                  onChange={handleSalary}
                  value="Mehr als 4.000"
                />
              </Col>
            </Row>
          </div>
        ))}
      </Container>
    </>
  );
}

export default Pg2;
