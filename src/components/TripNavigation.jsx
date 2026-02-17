import "./TripNavigation.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { destinations } from "../assets/destinations";
import Navigation  from "./Navigation";

function TripNavigation() {
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
        <div className="nav-wrap-tours"><Navigation/></div>
      </div>
   )
}

export default TripNavigation;