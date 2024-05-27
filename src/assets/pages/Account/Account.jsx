import { useContext } from "react";
import FormContext from "../../components/formcontext/form.context";

function Account() {
  const { firstName, lastName, salary } = useContext(FormContext);
  console.log(firstName);
  return (
    <div>
      <p>Account Page</p>
      <div>Hello</div>
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
}

export default Account;
