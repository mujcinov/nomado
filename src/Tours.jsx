import "./Tours.css";
import TripCard from "./components/TripCard";

function Tours() {
  return (
    <div className="wrapperTours">
      <div className="topbar-tours"></div>
      <div className="text-bar">
        <div>
          <p>Rezultati pretrage</p>
          <h1>Putovanja</h1>
        </div>
        <div className="cards-section">
            <TripCard></TripCard>
        </div>
      </div>
    </div>
  );
}

export default Tours;
