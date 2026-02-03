import { useState } from "react";
import Stepper from "./Stepper";

const steps = [
  {
    title: "Istražite destinacije",
    description: "Otkrijte najlepša mesta širom sveta.",
  },
  {
    title: "Planirajte put",
    description: "Birajte datume i prilagodite putovanje.",
  },
  {
    title: "Rezervišite lako",
    description: "Brza i sigurna online rezervacija.",
  },
  {
    title: "Putujte bez brige",
    description: "Uživajte, mi brinemo o svemu.",
  },
];

function HeroContent() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ display: "flex", gap: 24 }}>
      <Stepper activeStep={activeStep} onChange={setActiveStep} />

      <div>
        <h1>{steps[activeStep].title}</h1>
        <p>{steps[activeStep].description}</p>
      </div>
    </div>
  );
}

export default HeroContent;
