import { useState } from "react";

function Stepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      {[0, 1, 2, 3].map((step) => (
        <div
          key={step}
          onClick={() => setActiveStep(step)}
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            margin: "10px 0",
            cursor: "pointer",
            backgroundColor: activeStep === step ? "white" : "rgba(255,255,255,0.4)",
          }}
        />
      ))}
    </div>
  );
}

export default Stepper;
