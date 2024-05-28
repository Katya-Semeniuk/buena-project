import { useContext, useEffect } from "react";
import FormContext from "../../components/formcontext/form.context";
import Card from "react-bootstrap/Card";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Account.css";

function Account() {
  const { firstName, salary } = useContext(FormContext);

  const dataUser = {
    fname: firstName,
    salary: salary,
  };

  useEffect(() => {
    if (dataUser.fname === "") {
      toast.warn("You need to register");
    } else {
      toast.success(`Contact ${dataUser.fname} was added`);
    }
  }, [dataUser.fname]);

  return (
    <div className="account-container d-flex justify-content-center align-items-center text-center">
      <Card style={{ width: "45rem" }}>
        <Card.Body>
          <Card.Title>
            Hello <span className="text-primary">{dataUser.fname}</span>
          </Card.Title>
          <Card.Text>
            Now you can find your perfect apartment that fits your budget{" "}
            <span className="text-primary"> {dataUser.salary}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Account;
