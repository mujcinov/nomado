import './Home.css';
import EmblaCarousel from './EmblaCarousel';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { ImPhone } from "react-icons/im";
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation'; // ✅ import it

function Home() {
  const [isOpen, setOpen] = useState(false);

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
  <Navigation />
</header>

        <EmblaCarousel />
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
