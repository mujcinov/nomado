import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const OPTIONS = { loop: true };
const DESTINATIONS = [
  { title: "Uzbekistan", desc: "Uživajte u bojama Puta svile" },
  { title: "Malezija", desc: "Spoj modernog i tradicionalnog" },
  { title: "Nepal", desc: "Neki opis nesto nezz" },
  { title: "Vijetnam", desc: "USKORO" },
  { title: "Tajland", desc: "USKORO" },
];
const BACKGROUNDS = [
  "url(/uzbekistan.jpg)",
  "url(/malaysia.jpg)",
  "url(/nepal.jpg)",
  "url(/vietnam.jpg)",
  "url(/thailand.jpg)",
];

/* ------------------ Hooks ------------------ */

const usePrevNextButtons = (emblaApi) => {
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onSelect = useCallback((api) => {
    setPrevDisabled(!api.canScrollPrev());
    setNextDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevDisabled,
    nextDisabled,
    scrollPrev: () => emblaApi && emblaApi.scrollPrev(),
    scrollNext: () => emblaApi && emblaApi.scrollNext(),
  };
};

const useDotButtons = (emblaApi) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { selectedIndex, snaps };
};

/* ------------------ Component ------------------ */

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  /* ---- Switches carousel to next item every 7 seconds --- */
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 7000); // 10 seconds

    return () => clearInterval(interval);
  }, [emblaApi]);

  const { prevDisabled, nextDisabled, scrollPrev, scrollNext } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, snaps } = useDotButtons(emblaApi);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {SLIDES.map((index) => (
            <div className="embla__slide" key={index}>
              <div
                className="embla__slide__number"
                style={{ backgroundImage: BACKGROUNDS[index] }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <button
            className={`embla__button ${prevDisabled ? "is-disabled" : ""}`}
            onClick={scrollPrev}
            disabled={prevDisabled}
          >
            ‹
          </button>

          <button
            className={`embla__button ${nextDisabled ? "is-disabled" : ""}`}
            onClick={scrollNext}
            disabled={nextDisabled}
          >
            ›
          </button>
        </div>
        <h1>{DESTINATIONS[selectedIndex].title}</h1>
        <p>{DESTINATIONS[selectedIndex].desc}</p>
        <div className="embla__dots">
          {snaps.map((_, i) => (
            <button
              key={i}
              className={`embla__dot ${
                i === selectedIndex ? "is-selected" : ""
              }`}
              onClick={() => emblaApi.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
