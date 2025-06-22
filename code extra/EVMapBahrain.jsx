import React, { useState } from 'react';
import './EVMapBahrain.css';

const stations = [
  {
    id: 1,
    name: "City Centre Bahrain – Manama",
    area: "Manama",
    power: "22 kW",
    hours: "24/7",
    location: "mall basement parking near Gate A (Opp. D24 – Level B)",
    directions: "https://maps.app.goo.gl/kd4XU6No74UMvcX88"
  },
  {
    id: 2,
    name: "Marassi Galleria Mall – Diyar Al Muharraq",
    area: "Muharraq",
    power: "11–22 kW",
    hours: "24/7",
    location: "P2 – Carrefour entrance, P4 – Sports entrance",
    directions: "https://maps.app.goo.gl/smYajAdwBq8qBGJu6"
  },
  {
    id: 3,
    name: "Atrium Mall – Saar",
    area: "Saar",
    power: "22 kW",
    hours: "Mall hours",
    location: "Outdoor/Fountain Parking",
    directions: "https://maps.app.goo.gl/tijpLtxLQS6JPxrDA"
  },
  {
    id: 4,
    name: "Hilton Bahrain – Juffair",
    area: "Juffair",
    power: "22 kW",
    hours: "",
    location: "Hilton Bahrain, Building 4672, Manama 324",
    directions: "https://maps.app.goo.gl/GENHYBAmG6oMeTQD8"
  },
  {
    id: 5,
    name: "InterContinental Bahrain – Manama",
    area: "Manama",
    power: "Up to 350 kW",
    hours: "",
    location: "InterContinental Bahrain, King Faisal Hwy",
    directions: "https://www.google.com/maps/dir//King+Faisal+Hwy,+Manama"
  },
  {
    id: 6,
    name: "Audi Centre Bahrain – Sitra",
    area: "Sitra",
    power: "75+ kW",
    hours: "",
    location: "Audi Showroom, Sitra",
    directions: "https://maps.app.goo.gl/wzymyeKnCo1TP7226"
  },
  {
    id: 7,
    name: "Moda Mall – Manama",
    area: "Manama",
    power: "22 kW",
    hours: "",
    location: "Moda Mall Bahrain Branch (Bateel), Isa Al Kabeer Ave",
    directions: "https://maps.app.goo.gl/WeJWQKHqov8wYThn7"
  },
  {
    id: 8,
    name: "Crowne Plaza – Manama",
    area: "Manama",
    power: "22 kW",
    hours: "",
    location: "Crowne Plaza Manama, Diplomatic Area 317",
    directions: "https://maps.app.goo.gl/mvGxXcL2oHBpSMD46"
  },
  {
    id: 9,
    name: "Porsche Charging – Muharraq",
    area: "Muharraq",
    power: "22 kW",
    hours: "",
    location: "Bldg. 2780 Al Fanar Avenue Rd 5722",
    directions: "https://maps.app.goo.gl/u5dSKcPYQ9X5bRMh6"
  },
  {
    id: 10,
    name: "Porsche Charging – Sheyookh Ave",
    area: "Manama",
    power: "22 kW",
    hours: "",
    location: "57 Sheyookh Ave",
    directions: "https://maps.app.goo.gl/mCEv8pdybSSSqnbb8"
  },
  {
    id: 11,
    name: "EV Station – Tubli",
    area: "Tubli",
    power: "",
    hours: "",
    location: "5GQP+5J, Tubli",
    directions: "https://maps.app.goo.gl/ytQKfXiR4puXeeDM9"
  },
  {
    id: 12,
    name: "EV Station – Bahrain Financial Harbour A",
    area: "Manama",
    power: "",
    hours: "",
    location: "Building 1435 Rd 4626, Bahrain Financial Harbour",
    directions: "https://maps.app.goo.gl/Xbhyaa2tEnSojLtSA"
  },
  {
    id: 13,
    name: "EV Station – Bahrain Financial Harbour B",
    area: "Manama",
    power: "",
    hours: "",
    location: "Building 1435 Rd 4626, Bahrain Financial Harbour",
    directions: "https://maps.app.goo.gl/ErZ9jkhaqM9iQu1r5"
  },
  {
    id: 14,
    name: "EV Station – Government Ave",
    area: "Manama",
    power: "",
    hours: "",
    location: "6HPH+95V, Government Ave, Manama 143",
    directions: "https://maps.app.goo.gl/253vnwPqYpXLGk4r6"
  },
  {
    id: 15,
    name: "EV Station – Al Wadi Service Station",
    area: "Hamad Town",
    power: "50 kW (CCS)",
    hours: "Temporarily closed",
    location: "3GW4+WHM, Hamad Town",
    directions: "https://maps.app.goo.gl/BZmcddjNRK4jbjiF7"
  }
];

const EVMapBahrain = () => {
  const [search, setSearch] = useState("");

  const filteredStations = stations.filter((s) =>
    `${s.name} ${s.area} ${s.location}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="evgo-wrapper">
      <div className="evgo-left">
        <div className="evgo-header">
          <input
            type="text"
            placeholder="Search Location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="evgo-counter">
          Number Of Charging Stations: {filteredStations.length}
        </div>

        <div className="evgo-scroll-list">
          {filteredStations.map((s) => (
            <div className="evgo-card" key={s.id}>
              <div className="evgo-info">
                <h4>{s.name}</h4>
                <p>📍 {s.area}</p>
                <p>🕒 {s.hours || '24/7'}</p>
                <p>⚡ {s.power || 'Unknown'}</p>
                <p>{s.location}</p>
                <a href={s.directions} target="_blank" rel="noreferrer">
                  <button>Directions</button>
                </a>
              </div>
              <div className="evgo-name-tag">EVGO.BH</div>
            </div>
          ))}
        </div>
      </div>

      <div className="evgo-map">
        <iframe
          src="https://www.google.com/maps?q=EV+Charging+Station+Bahrain&output=embed&z=11"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="EV Charging Map"
        />
      </div>
    </div>
  );
};

export default EVMapBahrain;
