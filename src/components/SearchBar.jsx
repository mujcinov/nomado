import './SearchBar.css'
import { useState } from 'react';
export default function SearchBar() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`wrapper ${open ? 'open' : ''}`}>
   
      <button className='button' onClick={() => setOpen(!open)}>
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
