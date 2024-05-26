import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

const pg1ValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("This is an ERROR email")
    .matches(/^[a-zA-Z0-9@.]+$/, "Email must contain only Latin characters")
    .required("Email is required"),
});

function Pg1({ next }) {
  const { firstName, setFirstName, lastName, setLastName, email, setEmail } =
    useContext(FormContext);

  const handleSubmit = () => {
    console.log("page 1");
    next();
  };
  const handEmailChange = (e) => {
    const { name, value } = e.target;
    console.log("email", name, value);
  };
  const handleLNChange = (e) => {
    const { name, value } = e.target;
    console.log("LN", name, value);
  };

  const handleFNChange = (e) => {
    const { name, value } = e.target;
    console.log("FN", name, value);
  };

  return (
    <Formik
      validationSchema={pg1ValidationSchema}
      onSubmit={handleSubmit}
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        email: email,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              autoFocus
              isValid={touched.firstName && !errors.firstName}
              isInvalid={touched.firstName && !!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSecondName">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={touched.lastName && !!errors.lastName}
            />

            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              Please enter correct email
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>

    // vithout Formik

    // import { useContext } from "react";
    // import FormContext from "../formcontext/form.context";
    // import { Form, Col } from "react-bootstrap";

    // function Pg1() {
    //   const { firstName, setFirstName, lastName, setLastName, email, setEmail } =
    //     useContext(FormContext);

    //   const handleFirstNameChange = (e) => {
    //     setFirstName(e.target.value);
    //   };

    //   const handleSecondNameChange = (e) => {
    //     setLastName(e.target.value);
    //   };

    //   const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //   };

    //   return (
    //     <>
    //       <Form.Group as={Col} className="mb-3" controlId="formBasicFirstName">
    //         <Form.Label>First Name:</Form.Label>
    //         <Form.Control
    //           required
    //           type="text"
    //           value={firstName}
    //           onChange={handleFirstNameChange}
    //           autoFocus
    //         />
    //       </Form.Group>

    //       <Form.Group className="mb-3" controlId="formBasicSecondName">
    //         <Form.Label>Last Name:</Form.Label>
    //         <Form.Control
    //           required
    //           type="text"
    //           value={lastName}
    //           onChange={handleSecondNameChange}
    //         />
    //       </Form.Group>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Email address:</Form.Label>
    //         <Form.Control
    //           required
    //           type="email"
    //           placeholder="Enter email"
    //           value={email}
    //           onChange={handleEmailChange}
    //         />
    //         <Form.Control.Feedback type="invalid">
    //           Please enter correct email
    //         </Form.Control.Feedback>
    //       </Form.Group>
    //     </>
    // <Form>
    //   <Form.Group className="mb-3" controlId="formBasicFirstName">
    //     <Form.Label>First Name:</Form.Label>
    //     <Form.Control
    //       type="text"
    //       value={firstName}
    //       onChange={handleFirstNameChange}
    //       autoFocus
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicSecondName">
    //     <Form.Label>Last Name:</Form.Label>
    //     <Form.Control
    //       type="text"
    //       value={secondName}
    //       onChange={handleSecondNameChange}
    //     />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address:</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Enter email"
    //       value={email}
    //       onChange={handleEmailChange}
    //     />
    //     <Form.Text className="text-muted">
    //       Well never share your email with anyone else.
    //     </Form.Text>
    //   </Form.Group>
    // </Form>
  );
}

export default Pg1;
