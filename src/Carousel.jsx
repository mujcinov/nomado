import { useState } from "react";
import "./Carousel.css";

const items = [1, 2, 3, 4, 5];

function Carousel() {
  const [active, setActive] = useState(0);

  const prev = () => {
    setActive((active - 1 + items.length) % items.length);
  };

  const next = () => {
    setActive((active + 1) % items.length);
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-btn" onClick={prev}>
        ‹
      </button>

      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(50% - ${active * 60}%))`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`carousel-card ${
                index === active ? "active" : ""
              }`}
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>

      <button className="nav-btn" onClick={next}>
        ›
      </button>
    </div>
  );
}

export default Carousel;
