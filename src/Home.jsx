import './Home.css';
import EmblaCarousel from './EmblaCarousel';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { ImPhone } from "react-icons/im";
import { IconContext } from "react-icons";
import SearchBar from './components/SearchBar'

function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
        <div
        className="hero"
      >
        <header className="top-bar">
         <img className='logo' src="/logo.png" alt="" />

        <nav className={`menu ${isOpen ? 'menu--open' : ''}`}>
  <a href="#">Destinacije</a>
  <a href="/putovanja">Putovanja</a>
  <a href="#">Kontakt</a>
</nav>


          <div className="actions">
            <div className="call">
              <a href="tel:+38762313986" className='call'>
                <ImPhone className='call-icon' />
              <span className="call-text">Pozovite nas</span>
              </a>
            </div>
            <button className="cta">Putujte s nama</button>
            <Hamburger className='hamburger' toggled={isOpen} toggle={setOpen}  />
          </div>
        </header>
      <EmblaCarousel />
      <SearchBar />
      </div>
      </div>
    )
}

export default Home;