import { useContext } from "react";
import FormContext from "../formcontext/form.context";

function Pg3() {
  const { firstName, secondName, email, phone } = useContext(FormContext);
  return (
    <ul>
      <li>{firstName}</li>
      <li>{secondName}</li>
      <li>{email}</li>
      <li>{phone}</li>
    </ul>
  );
}

export default Pg3;
