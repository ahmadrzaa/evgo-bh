import React, { useEffect, useState } from 'react';
import './EVHighlightSection.css';

const texts = [
  "Live Updates on EV Charging Stations in Bahrain",
  "Find Public EV Chargers Near You Instantly",
  "Access Reliable EV Charging Locations Across Bahrain"
];

const EVHighlightSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 3500); // switch every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="evgo-text-strip">
      <h2 className="evgo-fade-text">
        <span className="highlight-ev">EV</span> {texts[index].replace("EV", "")}
      </h2>
    </section>
  );
};

export default EVHighlightSection;
