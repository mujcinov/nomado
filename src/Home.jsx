import './Home.css';
import EmblaCarousel from './EmblaCarousel';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { ImPhone } from "react-icons/im";
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation'; // ✅ import it
import TripCard from "./components/TripCard";
import { destinations } from "./assets/destinations";

function Home() {
  const [isOpen, setOpen] = useState(false);
  const featuredTrips = destinations.filter(trip => trip.featured);
  return (
    <div>
      <div className="hero">
        <header className="top-bar">
  <img className="logo" src="/logo.png" alt="" />

  

  <div className="actions">
    <div className="call">
      <a href="tel:+38762313986" className="call">
        <ImPhone className="call-icon" />
        <span className="call-text">Pozovite nas</span>
      </a>
    </div>

    <button className="cta">Putujte s nama</button>
  </div>
  <div className='nav-wrap-home'><Navigation /></div>
</header>

        <EmblaCarousel />
        <SearchBar />
      </div>
      <div className='home-feed'>
      <div className="simple-carousel">
  {destinations.filter(t => t.featured).map(trip => (
    <TripCard key={trip.id} trip={trip} variant="featured" />
  ))}
</div>

      </div>
    </div>
  );
}

export default Home;
