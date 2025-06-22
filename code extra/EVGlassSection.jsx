import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const stations = [
    {
      name: 'City Centre Bahrain – Manama',
      type: 'Type 2 (AC)',
      power: '22 kW',
      services: 'Shopping, Dining, Restrooms, EV Parking',
      provider: 'eCharge Bahrain',
      location: 'Basement Parking near Gate A',
      map: 'https://maps.app.goo.gl/kd4XU6No74UMvcX88',
    },
    {
      name: 'Marassi Galleria – Diyar Al Muharraq',
      type: 'Type 2 (AC)',
      power: '11–22 kW',
      services: 'Lodging, Grocery, EV Parking',
      provider: 'ABB / Non-networked',
      location: 'Carrefour / Sports entrances',
      map: 'https://maps.app.goo.gl/smYajAdwBq8qBGJu6',
    },
    {
      name: 'Atrium Mall – Saar',
      type: 'Type 2 (AC)',
      power: '22 kW',
      services: 'Shopping, Dining',
      provider: 'eCharge Bahrain',
      location: 'Outdoor Fountain Parking',
      map: 'https://maps.app.goo.gl/tijpLtxLQS6JPxrDA',
    },
    {
      name: 'Hilton Bahrain – Juffair',
      type: 'Unknown',
      power: 'Unknown',
      services: 'Hotel, Dining, EV Parking',
      provider: 'eCharge Bahrain',
      location: 'Building 4672 Road 2468',
      map: 'https://maps.app.goo.gl/GENHYBAmG6oMeTQD8',
    },
    {
      name: 'InterContinental – Manama',
      type: 'Mercedes-Benz HPC',
      power: 'Up to 350 kW',
      services: 'Hotel, Dining, EV Parking',
      provider: 'Mercedes-Benz',
      location: 'King Faisal Highway',
      map: 'https://www.google.com/maps/dir//King+Faisal+Hwy,+Manama/@26.2350724,50.5324088,13z',
    },
    {
      name: 'Audi Centre – Sitra',
      type: 'DC Fast Charger',
      power: '75+ kW',
      services: 'Restrooms, Auto Services',
      provider: 'Audi + ABB',
      location: 'Audi Showroom, Sitra',
      map: 'https://maps.app.goo.gl/wzymyeKnCo1TP7226',
    },
    {
      name: 'Moda Mall – Manama',
      type: 'Type 2 (AC)',
      power: '22 kW',
      services: 'Shopping, Dining',
      provider: 'eCharge + MoT',
      location: 'Moda Mall Parking',
      map: 'https://maps.app.goo.gl/WeJWQKHqov8wYThn7',
    },
    {
      name: 'Crowne Plaza – Manama',
      type: 'Type 2 (AC)',
      power: '22 kW',
      services: 'Hotel Parking',
      provider: 'Crowne Plaza',
      location: 'Diplomatic Area 317',
      map: 'https://maps.app.goo.gl/mvGxXcL2oHBpSMD46',
    },
    {
      name: 'Porsche Charging – Muharraq',
      type: 'Type 2 (AC)',
      power: '22 kW',
      services: 'Porsche Service',
      provider: 'Porsche',
      location: 'Al Fanar Avenue, Muharraq',
      map: 'https://maps.app.goo.gl/u5dSKcPYQ9X5bRMh6',
    },
    {
      name: 'Porsche Charging – Sheyookh Ave',
      type: 'Type 2 (AC)',
      power: '22 kW',
      services: 'Porsche Service',
      provider: 'Porsche',
      location: '57 Sheyookh Ave, Manama',
      map: 'https://maps.app.goo.gl/mCEv8pdybSSSqnbb8',
    },
  ];

  const colors = [
    '142, 249, 252',
    '142, 252, 204',
    '142, 252, 157',
    '215, 252, 142',
    '252, 252, 142',
    '252, 208, 142',
    '252, 142, 142',
    '252, 142, 239',
    '204, 142, 252',
    '142, 202, 252',
  ];

  return (
    <FullSection>
      <div className="wrapper">
        <div className="inner" style={{ '--quantity': stations.length }}>
          {stations.map((s, i) => (
            <div
              key={i}
              className="card"
              style={{ '--index': i, '--color-card': colors[i] }}
            >
              <div className="img">
                <h3>{s.name}</h3>
                <p>📍 {s.location}</p>
                <p>🕒 24/7</p>
                <p>⚡ {s.power}</p>
                <p>🔌 {s.type}</p>
                <p>🏷️ {s.services}</p>
                <p>👤 {s.provider}</p>
                <button
                  className="map-button"
                  onClick={() => window.open(s.map, '_blank')}
                >
                  ➤ Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FullSection>
  );
};

const FullSection = styled.section`
  width: 100%;
  height: 80vh;
  background: #171717;
  position: relative;
  overflow: hidden;

  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .inner {
    --w: 160px;
    --h: 200px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 12px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding: 10px;
    overflow-y: auto;
    color: white;
    font-size: 10px;
    font-family: sans-serif;
    background: #0000 radial-gradient(
      circle,
      rgba(var(--color-card), 0.2) 0%,
      rgba(var(--color-card), 0.6) 80%,
      rgba(var(--color-card), 0.9) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .img h3 {
    margin: 0 0 4px;
    font-size: 11px;
    font-weight: bold;
  }

  .img p {
    margin: 1px 0;
    font-size: 9px;
    opacity: 0.85;
  }

  .img .map-button {
    margin-top: 6px;
    padding: 4px 10px;
    font-size: 9px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s ease;
    align-self: center;
  }

  .img .map-button:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: white;
  }
`;

export default Card;
