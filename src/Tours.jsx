import "./Tours.css";
import TripCard from "./components/TripCard";
import {destinations} from "./assets/destinations";

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
           {destinations.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
        </div>
      </div>
    </div>
  );
}

export default Tours;
