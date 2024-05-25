import { useContext } from "react";
import FormContext from "../formcontext/form.context";
import { Button } from "react-bootstrap";

function Pg3() {
  const { firstName, secondName, email, phone } = useContext(FormContext);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit form");
  };

  return (
    <div>
      <div>
        <p>First Name</p>
        <p>{firstName}</p>
      </div>
      <div>
        <p>Second Name</p>
        <p>{secondName}</p>
      </div>
      <div>
        <p>Email</p>
        <p>{email}</p>
      </div>
      <div>
        <p>Phone</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>Salary</p>
        <p>{phone}</p>
      </div>
      <Button as="input" type="submit" value="Submit" onClick={submitForm} />
    </div>
  );
}

export default Pg3;
