import "./Tours.css";
import { useState } from "react";
import TripCard from "./components/TripCard";
import { destinations } from "./assets/destinations";
import { useParams } from "react-router-dom";

import TripNavigation from "./components/TripNavigation";

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
      <TripNavigation></TripNavigation>
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
