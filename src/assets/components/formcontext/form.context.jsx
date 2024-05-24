import { useState, createContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <FormContext.Provider
      value={{
        firstName,
        secondName,
        email,
        phone,
        setFirstName,
        setSecondName,
        setEmail,
        setPhone,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
