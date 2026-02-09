import './SearchBar.css'
import { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { ImPlay3 } from "react-icons/im";
export default function SearchBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`wrapper ${open ? 'open' : ''}`}>
   
      <button className='button' onClick={() => setOpen(!open)}>
        <ImSearch></ImSearch>
        <p>Odaberite željenu destinaciju</p>
        <ImPlay3></ImPlay3>
  </button>

  <div className={`dropdown-menu ${open ? 'open' : ''}`}>
    <a href="#">Uzbekistan</a>
    <a href="#">Malezija</a>
    <a href="#">Vijetnam</a>
    <a href="#">Nepal</a>
    <a href="/nekilink">Tajland</a>
  </div>
      
    </div>
  )
}
