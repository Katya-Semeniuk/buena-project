import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState(null);

  return (
    <FormContext.Provider
      value={{
        firstName,
        secondName,
        email,
        phone,
        salary,
        setFirstName,
        setSecondName,
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
