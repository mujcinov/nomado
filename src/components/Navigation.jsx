import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import "./Navigation.css";



function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Hamburger only on mobile */}
      {isMobile && (
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          className="hamburger"
        />
      )}

      <nav className={`menu ${isMobile && isOpen ? "menu--open" : ""}`}>
        <Link to="/">Početna</Link>
        <Link to="/putovanja">Putovanja</Link>
        <Link>Kontakt</Link>
      </nav>
    </>
  );
}

export default Navigation;
