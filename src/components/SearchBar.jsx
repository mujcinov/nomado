import "./SearchBar.css";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { BiSolidChevronUpSquare } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`wrapper ${open ? "open" : ""}`}>
      <button className="button" onClick={() => setOpen(!open)}>
        <ImSearch className="icon-search"></ImSearch>
        <p>Odaberite željenu destinaciju</p>
        <BiSolidChevronUpSquare className="icon-play" />
      </button>

      <div className={`dropdown-menu ${open ? "open" : ""}`}>
        <Link to="/putovanja/uzbekistan">Uzbekistan</Link>
        <Link to="/putovanja/malezija">Malezija</Link>
        <Link to="/putovanja/vijetnam">Vijetnam</Link>
        <Link to="/putovanja/nepal">Nepal</Link>
        <Link to="/putovanja/tajland">Tajland</Link>
      </div>
    </div>
  );
}
