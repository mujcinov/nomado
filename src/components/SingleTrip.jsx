import "./SingleTrip.css";
import { useParams } from "react-router-dom";
import { destinations } from "../assets/destinations";
import TripNavigation from "./TripNavigation";
import { IoInformationCircle } from "react-icons/io5";

function SingleTrip() {
const { unique } = useParams();
const images = ["/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", 
  "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg", "/malaysia.jpg"]
  const trip = destinations.find(t => t.unique === unique);
    return(
        <div className="single-trip">
      <div className="single-trip-topbar">
        <TripNavigation></TripNavigation>
      </div>
      <div className="single-trip-feed">
        <h1>{trip.title}</h1>
        <div className="singletrip-tag"><p>{trip.tags}</p></div>
        <div className="singletrip-date">od {trip.startDate} do {trip.endDate}</div>
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
      </div>
    </div>
    )
}

export default SingleTrip;