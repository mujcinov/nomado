import "./TripCard.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";

function TripCard({trip}) {
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
  return (
    <div className="trip-card">
      <div className="image" style={{ backgroundImage: `url(${trip.image})` }}></div>
     <div className="info-section">
     <div className="left-desktop">
        <div className="tags">
        <p>{trip.tags}</p>
      </div>
      <h2>{trip.name}</h2>
      <blockquote>{trip.desc}</blockquote>
      <dl className="desc-list">
        <dt>Trajanje:</dt>
        <dd>{trip.duration} dana</dd>
        <dt>Datum polaska:</dt>
        <dd>{formattedStartDate}</dd>
        <dt>Datum povratka</dt>
        <dd>{formattedEndDate}</dd>
        <dt>Uključeno:</dt>
        <dd>{trip.included}</dd>
      </dl>
     </div>
      <div className="right-desktop">
        <div className="price">
        <p>Cijena od</p>
        <div className="price-adjust">
          <h2>{trip.price} KM</h2>
          <span>/po osobi</span>
        </div>
      </div>
      <div className="price-info">
        <IoInformationCircle />
        <span>Cijena se odnosi na privatnu dvokrevetnu sobu.</span></div>
      <div className="buttons">
        <button className="itinerary-button">
          <div className="download-icon"><RiDownloadCloud2Fill /></div>
        <span>Preuzmi program</span>
        </button>
        <button className="details-button">
          <div className="arrow-icon"><FaArrowCircleRight  /></div>
        <span>Detalji putovanja</span>
        </button>
      </div>
      </div>
     </div>
    </div>
  );
}

export default TripCard;
