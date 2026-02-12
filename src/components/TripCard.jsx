import "./TripCard.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { RiDownloadCloud2Fill } from "react-icons/ri";
import { IoInformationCircle } from "react-icons/io5";

function TripCard({trip}) {
  return (
    <div className="trip-card">
      <div className="image" style={{ backgroundImage: `url(${trip.image})` }}></div>
     <div className="info-section">
       <div className="tags">
        <p>{trip.tags}</p>
      </div>
      <h2>{trip.name}</h2>
      <blockquote>I tako dalje nesto da ima vise teksta nmp bzvz</blockquote>
      <dl className="desc-list">
        <dt>Trajanje:</dt>
        <dd>{trip.duration}</dd>
        <dt>Datum polaska:</dt>
        <dd>11. april 2026</dd>
        <dt>Datum povratka</dt>
        <dd>20. april 2026</dd>
        <dt>Uključeno:</dt>
        <dd>Letovi - Hoteli - Vodič - Doručak</dd>
      </dl>
      <div className="price">
        <p>Cijena od</p>
        <div className="price-adjust">
          <h2>2490 KM</h2>
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
  );
}

export default TripCard;
