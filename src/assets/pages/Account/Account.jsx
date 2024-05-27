import { useContext, useEffect, useState } from "react";
import FormContext from "../../components/formcontext/form.context";

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
    <div className="wrap-container">
      <h1 className="text-center pt-5 mb-4">
        Hello <span className="text-primary">{dataUser.fname}</span>
      </h1>
      <p className=" text-center">
        Now you can find your perfect apartment that fits your budget{" "}
        <span className="text-primary"> {dataUser.salary}</span>
      </p>
    </div>
  );
}

export default Account;
