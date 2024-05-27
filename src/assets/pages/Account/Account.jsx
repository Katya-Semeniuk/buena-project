import { useContext, useEffect } from "react";
import FormContext from "../../components/formcontext/form.context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Account() {
  const { firstName, lastName, salary } = useContext(FormContext);

  useEffect(() => {
    toast.success(`Contact ${firstName} was added`);
  }, []);

  return (
    <div>
      <p>Account Page</p>
      <div>Hello</div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{salary}</p>
    </div>
  );
}

export default Account;
