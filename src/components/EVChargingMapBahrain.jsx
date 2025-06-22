import React, { useEffect, useState } from 'react';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './EVChargingMapBahrain.css';
import Header from './Header';


const stations = [
 {
    name: "City Centre Bahrain – Manama",
    coordinates: [26.233879, 50.553234], // Verified by PlugShare :contentReference[oaicite:1]{index=1}
    provider: "eCharge Bahrain",
    power: "22 kW (AC)",
    plugs: 2,
    services: "Shopping, Dining, Restrooms, EV Parking",
    link: "https://www.google.com/maps/place/City+Centre+Bahrain/@26.2330802,50.5471182,2023m/data=!3m1!1e3!4m20!1m13!4m12!1m4!2m2!1d50.544617!2d26.234792!4e1!1m6!1m2!1s0x3e49a5788e4fa6d3:0x59a12e7b22b7b68c!2sCity+Centre+Bahrain,+Shaikh+Khalifa+Bin+Salman+Highway,+Jidhafs!2m2!1d50.5532777!2d26.2333324!3m5!1s0x3e49a5788e4fa6d3:0x59a12e7b22b7b68c!8m2!3d26.2333324!4d50.5532777!16s%2Fg%2F11gdlkcfv9!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Atrium Mall – Saar",
    coordinates: [26.175420, 50.483843], // Verified by PlugShare :contentReference[oaicite:2]{index=2}
    provider: "eCharge Bahrain",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Shopping, Dining, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.175420,50.483843"
  },
  {
    name: "Atrium Mall – Saar",
    coordinates: [26.175420, 50.483843],
    provider: "eCharge Bahrain",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Shopping, Dining, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.175420,50.483843"
  },
  {
    name: "Hilton Bahrain – Juffair",
    coordinates: [26.222800, 50.609050],
    provider: "eCharge Bahrain",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Hotel, Dining, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.222800,50.609050"
  },
  {
    name: "InterContinental Bahrain – Manama",
    coordinates: [26.233965, 50.570908],
    provider: "Mercedes‑Benz",
    power: "Up to 350 kW (DC Fast)",
    plugs: 1,
    services: "Hotel, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.233965,50.570908"
  },
  {
    name: "Audi Centre – Sitra",
    coordinates: [26.167038, 50.604980],
    provider: "Audi Bahrain",
    power: "75 kW+ (DC Fast)",
    plugs: 1,
    services: "Showroom, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.167038,50.604980"
  },
  {
    name: "Porsche Charging – Sheyookh Ave, Manama",
    coordinates: [26.226092, 50.602214],
    provider: "Porsche",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Dealership, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.226092,50.602214"
  },
  {
    name: "Porsche Charging – Muharraq",
    coordinates: [26.297185, 50.661891],
    provider: "Porsche",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Dealership, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.297185,50.661891"
  },
  {
    name: "Moda Mall – Manama",
    coordinates: [26.239703, 50.581354],
    provider: "eCharge Bahrain",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Shopping, Dining, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.239703,50.581354"
  },
  {
    name: "Crowne Plaza – Diplomatic Area, Manama",
    coordinates: [26.235382, 50.594139],
    provider: "Crowne Plaza",
    power: "22 kW (AC)",
    plugs: 2,
    services: "Hotel, Dining, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.235382,50.594139"
  },
  {
    name: "EV Charging – Tubli",
    coordinates: [26.191266, 50.543583],
    provider: "Public",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Street Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.191266,50.543583"
  },
  {
    name: "EV Charging – Bahrain Financial Harbour 1",
    coordinates: [26.251893, 50.571796],
    provider: "BFH",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Business, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.251893,50.571796"
  },
  {
    name: "EV Charging – Government Ave, Manama",
    coordinates: [26.234930, 50.574140],
    provider: "Public",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Government Office, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.234930,50.574140"
  },
  {
    name: "EV Charging – Al Wadi Service Station, Hamad Town",
    coordinates: [26.131830, 50.500410],
    provider: "Al Wadi",
    power: "50 kW (DC CCS)",
    plugs: 1,
    services: "Fuel Station, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.131830,50.500410"
  },
  {
    name: "Wyndham Grand – Bahrain Bay",
    coordinates: [26.246525, 50.576902],
    provider: "Wyndham Grand",
    power: "22 kW (AC)",
    plugs: 1,
    services: "Hotel, Dining, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.246525,50.576902"
  },
  {
    name: "BYD Charger – Sitra",
    coordinates: [26.168000, 50.605000],
    provider: "BYD",
    power: "22 kW (AC)",
    plugs: 2,
    services: "Dealership, EV Parking",
    link: "https://www.google.com/maps/dir/?api=1&destination=26.168000,50.605000"
  }
];



const EVChargingMapBahrain = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 26.234792, lng: 50.544617 });

  useEffect(() => {
    if (document.getElementById('map')._leaflet_id != null) return;

    const map = L.map('map', {
      center: [26.2345, 50.586],
      zoom: 12.3,
      zoomControl: false,
    });

    window.__EV_MAP__ = map;
    window.__EV_MARKERS__ = [];

    map.on('moveend', () => {
      const center = map.getCenter();
      setMapCenter({ lat: center.lat, lng: center.lng });
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap & CartoDB',
    }).addTo(map);

    const getSpritePosition = (type) => {
      switch (type) {
        case 'type-dc': return '-32px 0';
        case 'type-ccs': return '-64px 0';
        case 'type-closed': return '-96px 0';
        default: return '0 0';
      }
    };

    stations.forEach((s, i) => {
      let typeClass = 'type-ac';
      const lowerType = (s.type || '').toLowerCase();
      const lowerName = s.name.toLowerCase();
      if (lowerType.includes('dc')) typeClass = 'type-dc';
      if (lowerType.includes('ccs')) typeClass = 'type-ccs';
      if (lowerName.includes('closed')) typeClass = 'type-closed';

      const icon = L.divIcon({
        className: '',
        html: `<div style="
          width: 16px;
          height: 24px;
          background-image: url('images/marker-icon.png');
          background-repeat: no-repeat;
          background-position: ${getSpritePosition(typeClass)};
          background-size: cover;
          filter: hue-rotate(292deg) saturate(2) brightness(0.9);
        "></div>`,
        iconSize: [16, 24],
        iconAnchor: [8, 24],
        popupAnchor: [0, -28],
      });

      const marker = L.marker(s.coordinates, { icon }).addTo(map);

      const popup = `
        <div style="
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          line-height: 1.5;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(6px);
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
          min-width: 260px;
        ">
          <h4 style="margin-bottom: 8px; font-size: 16px; font-weight: 600; color: #333;">${s.name}</h4>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\ud83d\udd0c <strong>Provider:</strong></span> ${s.provider}</div>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\ud83d\udccd <strong>Address:</strong></span> ${s.address}</div>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\u26a1 <strong>Type:</strong></span> ${s.type}</div>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\ud83d\udd0b <strong>Power:</strong></span> ${s.power}</div>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\ud83d\ude97 <strong>Plugs:</strong></span> ${s.plugs}</div>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\ud83d\udcee <strong>Services:</strong></span> ${s.services}</div>
          <div style="margin-bottom: 4px;"><span style="color:#666;">\ud83e\udded <strong>Location:</strong></span> ${s.location}</div>
          <div style="margin-bottom: 12px;"><span style="color:#666;">\ud83d\udccc <strong>Coordinates:</strong></span> ${s.coordinates.join(', ')}</div>
          <a href="${s.link}" target="_blank" style="
            display: inline-flex;
            align-items: center;
            padding: 8px 14px;
            background: #f5f5f5;
            color: #333;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            font-size: 13px;
            transition: background 0.2s;
          ">
            <span style="margin-right: 6px;">\ud83e\udded</span> Get Directions
          </a>
        </div>
      `;

      marker.bindPopup(popup);

      const shortName = s.name.split('–')[0].trim();
      const label = L.marker(s.coordinates, {
        icon: L.divIcon({
          className: 'station-name-label',
          html: `<div style="font-size:10px; color:#111; cursor:pointer;">${shortName}</div>`,
          iconSize: [0, 0],
          iconAnchor: [0, 50],
        }),
      }).addTo(map);

      marker.on('click', () => {
        marker.openPopup();
        label.getElement().style.display = "none";
      });

      marker.on('popupclose', () => {
        label.getElement().style.display = "block";
      });

      label.on('click', () => {
        map.setView(s.coordinates, 15);
        marker.openPopup();
        label.getElement().style.display = "none";
      });

      window.__EV_MARKERS__.push(marker);
      s._marker = marker;
    });

    L.control.zoom({ position: 'bottomright' }).addTo(map);
  }, []);

  useEffect(() => {
    const display = document.getElementById("customSelectDisplay");
    const dropdown = document.getElementById("customSelectDropdown");

    const handleOptionClick = (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      const station = stations[idx];
      if (!station || !window.__EV_MAP__) return;
      display.textContent = station.name;
      dropdown.style.display = "none";
      window.__EV_MAP__.setView(station.coordinates, 15);
      station._marker?.openPopup();
    };

    const toggleDropdown = () => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    };

    display.addEventListener("click", toggleDropdown);
    dropdown.addEventListener("click", handleOptionClick);

    return () => {
      display.removeEventListener("click", toggleDropdown);
      dropdown.removeEventListener("click", handleOptionClick);
    };
  }, []);

  return (
    <div className="map-wrapper">
      <Header currentLocation={mapCenter} />

      <div className="topbar">
        <div className="custom-select-box">
          <div className="custom-select-display" id="customSelectDisplay">Enter Location</div>
          <div className="custom-select-dropdown" id="customSelectDropdown">
            {stations.map((s, i) => (
              <div key={i} className="custom-select-option" data-index={i}>{s.name}</div>
            ))}
          </div>
        </div>
        <div className="filter-box">
          <button className="filter-btn">
            <i className="fas fa-sliders-h"></i>
          </button>
        </div>
      </div>

      <div id="map" style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}></div>

      {/* FOOTER */}
      <div style={{
        position: 'fixed',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.4)',
        padding: '6px 18px',
        borderRadius: '6px',
        backdropFilter: 'blur(1px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        minWidth: '200px',
        height: '32px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          animation: 'slideFloat 4s ease-in-out infinite alternate'
        }}>
          <a
            href="https://www.intermid.net"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            Developed by INTERMID
          </a>
          <a href="mailto:info@intermid.net" title="Email">
            <i className="fas fa-envelope" style={{ color: '#fff', fontSize: '16px' }}></i>
          </a>
          <a
            href="https://wa.me/97300000000"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp" style={{ color: '#25D366', fontSize: '16px' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EVChargingMapBahrain;
