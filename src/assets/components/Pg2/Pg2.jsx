import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const regexPhone = /^49\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;

const pg2ValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(regexPhone, {
      message: "Invalid phone number",
    })
    .required(),
  salary: Yup.number().required(),
});

function Pg2({ next, prev }) {
  const { phone, salary, setPhone, setSalary } = useContext(FormContext);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSalary = (e) => {
    setSalary(e.target.value);
  };
  return (
    <Formik
      validationSchema={pg2ValidationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        phone: phone,
        salary: salary,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              className="mb-3"
              controlId="formBasicPhoneNumber"
            >
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handlePhoneChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Label>Salary indication:</Form.Label>
          <Container>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-4">
                <Row className="mb-2">
                  <Col>
                    <Form.Check
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
          <Button type="phone">Back</Button>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Pg2;
