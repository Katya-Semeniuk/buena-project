import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const regexPhone = /^49\d{3}\d{3}\d{2}\d{2}$/;

const pg2ValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(regexPhone, {
      message: "Invalid phone number",
    })
    .required(),
  salary: Yup.string().required(),
});

function Pg2({ next, prev }) {
  const { phone, salary, setPhone, setSalary } = useContext(FormContext);

  const handleSubmit = ({ phone, salary }) => {
    setPhone(phone);
    setSalary(salary);

    next();
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
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Phone format 49********* "
              value={values.phone}
              onChange={handleChange}
              isValid={touched.phone && !errors.phone}
              isInvalid={touched.phone && !!errors.phone}
            />
            <Form.Control.Feedback type="invalid">
              Invalid phone number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Label>Salary indication:</Form.Label>
          <Container>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-4">
                <Row className="mb-2">
                  <Col>
                    <Form.Check
                      inline
                      label="0 - 1.000"
                      name="salary"
                      type={type}
                      id={`default-${type}-1`}
                      onChange={handleChange}
                      value="0 - 1.000"
                      isValid={touched.salary && !errors.salary}
                      isInvalid={touched.salary && !!errors.salary}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      label="1.000 - 2.000"
                      name="salary"
                      type={type}
                      id={`default-${type}-2`}
                      onChange={handleChange}
                      value="1.000 - 2.000"
                      isValid={touched.salary && !errors.salary}
                      isInvalid={touched.salary && !!errors.salary}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Check
                      label="2.000 - 3.000"
                      name="salary"
                      type={type}
                      id={`default-${type}-3`}
                      onChange={handleChange}
                      value="2.000 - 3.000"
                      isValid={touched.salary && !errors.salary}
                      isInvalid={touched.salary && !!errors.salary}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      label="3.000 - 4.000"
                      name="salary"
                      type={type}
                      id={`default-${type}-4`}
                      onChange={handleChange}
                      value="3.000 - 4.000"
                      isValid={touched.salary && !errors.salary}
                      isInvalid={touched.salary && !!errors.salary}
                    />
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <Form.Check
                      label="Mehr als 4.000"
                      name="salary"
                      type={type}
                      id={`default-${type}-5`}
                      onChange={handleChange}
                      value="Mehr als 4.000"
                      isValid={touched.salary && !errors.salary}
                      isInvalid={touched.salary && !!errors.salary}
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
          <Button type="button" onClick={() => prev()}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Pg2;
