import { useState } from "react";
import Stepper from "./Stepper";
import EmblaCarousel from "./EmblaCarousel";

const steps = [
  {
    title: "Uzbekistan",
    description: "Otkrijte najlepša mesta širom sveta.",
  },
  {
    title: "Malezija",
    description: "Birajte datume i prilagodite putovanje.",
  },
  {
    title: "Nepal",
    description: "Brza i sigurna online rezervacija.",
  },
  {
    title: "Vijetnam",
    description: "Uživajte, mi brinemo o svemu.",
  },
];

function HeroContent() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
      <Stepper activeStep={activeStep} onChange={setActiveStep} />

      <div>
        <h1>{steps[activeStep].title}</h1>
        <p>{steps[activeStep].description}</p>
      </div>
    </div>
  );
}

export default HeroContent;
