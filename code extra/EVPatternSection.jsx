import React from 'react';
import styled from 'styled-components';

const EVPatternSection = () => {
  return (
    <StyledWrapper>
      <div className="glass-box">
        <div className="box-content">
          <div className="map-section">
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
          <div className="text-section">
            <h2>EV Stations in Bahrain</h2>
            <p>
              Bahrain is embracing electric mobility with a growing network of EV stations.
              From Manama to Muharraq, charging points are becoming more accessible and
              convenient for all EV owners.
            </p>
            <p>
              Explore the full coverage, station types, power ratings, and provider details
              across the Kingdom.
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 60px 20px 0;
  margin: 0;
  background-color: #0e1e2a;
  background-image:
    repeating-radial-gradient(circle at 0 0, transparent 0px, #0e1e2a 30px),
    repeating-linear-gradient(90deg, #00ffe1aa, #00d4ff88);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;

 .glass-box {
  width: 100%;
  max-width: 1300px;
  background: transparent; /* remove any solid color */
  backdrop-filter: blur(3px) brightness(1.05);
  -webkit-backdrop-filter: blur(20px) brightness(1.05);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
 box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

}

  .box-content {
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: center;
  }

  .map-section {
    flex: 1;
    height: 450px;
    border-radius: 16px;
    overflow: hidden;
  }

  .text-section {
    flex: 1;
    color: #ffffff;
  }

  .text-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .text-section p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    .box-content {
      flex-direction: column;
    }

    .map-section {
      width: 100%;
      height: 300px;
    }

    .glass-box {
      padding: 20px;
    }
  }
`;

export default EVPatternSection;
