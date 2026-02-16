import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Tours from "./Tours";
import SingleTrip from "./components/SingleTrip";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/putovanja" element={<Tours />} />
      <Route path="/putovanja/:slug" element={<Tours />} />
      <Route path="/:unique" element={<SingleTrip />} />
    </Routes>
  );
}

export default App;
