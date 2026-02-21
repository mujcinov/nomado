import "./Itinerary.css";
import { useState } from "react";
import ArrowIco from "./ArrowIco";

function Itinerary({ day = 1, details }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="itinerary-day">
      <div className="itinerary-day-header" onClick={() => setIsOpen(!isOpen)}>
        <span>Dan {day}</span>
        <span className={`itinerary-arrow ${isOpen ? "open" : ""}`}><ArrowIco/></span>
      </div>
      {isOpen && (
        <div className="itinerary-day-details">
          {details}
        </div>
      )}
    </div>
  );
}

export default Itinerary;