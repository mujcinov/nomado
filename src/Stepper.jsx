function Stepper({ activeStep, onChange }) {
  return (
    <div>
      {[0, 1, 2, 3].map((step) => (
        <div
          key={step}
          onClick={() => onChange(step)}
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            margin: "0 10px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",

            backgroundColor:
              activeStep === step
                ? "white"
                : "rgba(255,255,255,0.4)",
          }}
        />
      ))}
    </div>
  );
}

export default Stepper;
