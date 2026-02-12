import "./TripCard.css";

function TripCard(trip) {
  return (
    <div className="trip-card">
      <div className="image"></div>
     <div className="info-section">
       <div className="tags">
        <p>Istaknuto</p>
      </div>
      <h1>Uzbekistan</h1>
      <blockquote>I tako dalje nesto da ima vise teksta nmp bzvz</blockquote>
      <dl className="desc-list">
        <dt>Trajanje:</dt>
        <dd>10 dana</dd>
        <dt>Datum polaska:</dt>
        <dd>11. april 2026</dd>
        <dt>Uključeno:</dt>
        <dd>Letovi - Hoteli - Vodič - Doručak</dd>
      </dl>
      <div className="price">
        <p>od</p>
        <h2>2490 KM</h2>
      </div>
      <div className="buttons">
        <button className="itinirery-button">Preuzmi program</button>
        <button className="details-button">Detalji putovanja</button>
      </div>
     </div>
    </div>
  );
}

export default TripCard;
