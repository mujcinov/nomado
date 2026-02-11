import './SearchBar.css'
import { useState } from 'react';
import { ImSearch } from "react-icons/im";
import { BiSolidChevronUpSquare } from "react-icons/bi";
export default function SearchBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`wrapper ${open ? 'open' : ''}`}>
   
      <button className='button' onClick={() => setOpen(!open)}>
        <ImSearch className='icon-search'></ImSearch>
        <p>Odaberite željenu destinaciju</p>
        <BiSolidChevronUpSquare className='icon-play' />
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
