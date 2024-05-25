import { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../formcontext/form.context";
import { Button } from "react-bootstrap";

function Pg3() {
  const { firstName, secondName, email, phone, salary } =
    useContext(FormContext);

  const submitForm = (e) => {
    e.preventDefault();

    const formObj = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      phone: phone,
      salary: salary,
    };
  };

  return (
    <div>
      <div className="d-flex">
        <p className="me-2">First Name</p>
        <p>{firstName}</p>
      </div>
      <div className="d-flex">
        <p className="me-2">Second Name</p>
        <p>{secondName}</p>
      </div>
      <div className="d-flex">
        <p className="me-2">Email</p>
        <p>{email}</p>
      </div>
      <div className="d-flex">
        <p className="me-2">Phone</p>
        <p>{phone}</p>
      </div>
      <div className="d-flex">
        <p className="me-2">Salary</p>
        <p>{salary}</p>
      </div>
      <Button type="submit" value="Submit" onClick={submitForm}>
        <Link to="/account">Submit</Link>
      </Button>
    </div>
  );
}

export default Pg3;
