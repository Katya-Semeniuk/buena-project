import { useState } from "react";
import Pg1 from "./Pg1/Pg1";
import Pg2 from "./Pg2/Pg2";

function FormExample() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const backtStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const pages = [
    <Pg1 key="1" next={nextStep} />,
    <Pg2 key="2" next={nextStep} prev={backtStep} />,
  ];

  return <div>{pages[currentStep]}</div>;
}

export default FormExample;
