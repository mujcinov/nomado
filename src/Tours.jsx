import "./Tours.css";
import { useState } from "react";
import TripCard from "./components/TripCard";
import { destinations } from "./assets/destinations";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";

function Tours() {
  const { slug } = useParams();

  const [open, setOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");
  const filteredTrips = slug
    ? destinations.filter((trip) => trip.slug === slug)
    : destinations;

  const uniqueDestinations = [
    ...new Map(
      destinations.map((trip) => [
        trip.slug,
        { slug: trip.slug, name: trip.name },
      ]),
    ).values(),
  ];

  return (
    <div className="wrapperTours">
      <div className="topbar-tours">
        <Link to="/">
  <img src="/logo2.png" alt="Nomado Travel logo" className="logo-topbar" />
</Link>
        <div className="dropdown-tours">
          <div
            className={`dropdown-toggle-tours ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            Odaberite destinaciju
            <span className="arrow">▾</span>
          </div>

          <div className={`dropdown-menu-tours ${open ? "open" : ""}`}>
            <Link to="/putovanja" onClick={() => setOpen(false)}>
              Sve destinacije
            </Link>

            {uniqueDestinations.map((dest) => (
              <Link
                key={dest.slug}
                to={`/putovanja/${dest.slug}`}
                onClick={() => setOpen(false)}
              >
                {dest.name}
              </Link>
            ))}
          </div>
        </div>
        <Navigation/>
      </div>
      <div className="text-bar">
        <div>
          <p>Rezultati pretrage</p>
          <h1>
            {slug
              ? destinations.find((t) => t.slug === slug)?.name
              : "Sva putovanja"}
          </h1>
        </div>
      </div>
      <div className="cards-section">
        {filteredTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
