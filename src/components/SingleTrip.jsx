import "./SingleTrip.css";
import { useParams } from "react-router-dom";
import { destinations } from "../assets/destinations";
import Navigation from "./Navigation";

function SingleTrip() {
const { unique } = useParams();

  const trip = destinations.find(t => t.unique === unique);
    return(
        <div className="single-trip">
      <div className="single-trip-topbar">
        <img src="/logo2.png" alt="" className=""/>
        <Navigation></Navigation>
      </div>
      <div className="single-trip-feed">
        <h1>{trip.name}</h1>
        <p>{trip.tags}</p>
        <p>{trip.duration} dana</p>
        <p>od {trip.startDate} do {trip.endDate}</p>
        <img src={trip.image} alt="" className="single-trip-image"/>
        <h2>{trip.price} KM</h2>
      </div>
    </div>
    )
}

export default SingleTrip;