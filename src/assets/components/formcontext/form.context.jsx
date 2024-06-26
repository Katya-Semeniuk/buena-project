import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <FormContext.Provider
      value={{
        firstName,
        lastName,
        email,
        phone,
        salary,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        setSalary,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
