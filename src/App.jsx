import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Tours from "./Tours";


function App() {
  
  return (
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/putovanja" element={<Tours />} />
    </Routes>
  );
}

export default App;

