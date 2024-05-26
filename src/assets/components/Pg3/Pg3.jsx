import { useContext } from "react";
import FormContext from "../formcontext/form.context";
// import { Link } from "react-router-dom";

function Pg3() {
  const { firstName, secondName, email, phone, salary } =
    useContext(FormContext);
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
    </div>
  );
}

export default Pg3;
