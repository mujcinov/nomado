import './App.css';
import EmblaCarousel from './EmblaCarousel';
function App() {
  return (
    <>
      <div
        className="hero"
      >
        <header className="top-bar">
         <img className='logo' src="/logo.png" alt="" />

          <nav className="menu">
            <a href="#">Destinacije</a>
            <a href="#">Putovanja</a>
            <a href="#">Kontakt</a>
          </nav>

          <div className="actions">
            <div className="call">
              <span className="call-icon">☎</span>
              <span className="call-text">Pozovite nas</span>
            </div>
            <button className="cta">Putujte s nama</button>
            <div className="hamburger">☰</div>
          </div>
        </header>
      <EmblaCarousel />

      </div>

      <div className="content"></div>
    </>
  );
}

export default App;

