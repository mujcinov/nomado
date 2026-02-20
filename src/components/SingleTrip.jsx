import "./SingleTrip.css";
import { useParams } from "react-router-dom";
import { destinations } from "../assets/destinations";
import TripNavigation from "./TripNavigation";
import { IoInformationCircle } from "react-icons/io5";
import Itinerary from "./Itinerary";

function SingleTrip() {

const { unique } = useParams();
const images = ["/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", 
  "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg"]
  const trip = destinations.find(t => t.unique === unique);
    const formattedStartDate = new Date(trip.startDate).toLocaleDateString(
    "de-DE",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
   const formattedEndDate = new Date(trip.endDate).toLocaleDateString(
    "de-DE",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );
    return(
        <div className="single-trip">
      <div className="single-trip-topbar">
        <TripNavigation></TripNavigation>
      </div>
      <div className="single-trip-feed">
        <h1>{trip.title}</h1>
        <div className="singletrip-tag"><p>{trip.tags}</p></div>
        <div className="singletrip-date">od {formattedStartDate} do {formattedEndDate}</div>
   <div className="gallery-scroll">
  {images.map((img, i) => (
    <img key={i} src={img} className={`img img-${i + 1}`} />
  ))}
</div>
<div className="singletrip-price-section">
  <div className="singletrip-price"><p>{trip.price} KM</p>
<span>/po osobi</span>
</div>
<div className="singletrip-price-info">
        <IoInformationCircle />
        <span>Cijena se odnosi na privatnu dvokrevetnu sobu.</span></div>
</div>
<Itinerary></Itinerary>
      </div>
    </div>
    )
}

export default SingleTrip;