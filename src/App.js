import React from 'react';
import Header from './components/Header';
// import EVHighlightSection from './components/EVHighlightSection';

// import EVGlassSection from './components/EVGlassSection';
// import EVPatternSection from './components/EVPatternSection';
// import EVMapBahrain from './components/EVMapBahrain';
import EVChargingMapBahrain from './components/EVChargingMapBahrain';

function App() {
  return (
    <div>
      <Header />
      {/* <EVHighlightSection /> */}
       {/* <EVGlassSection/>
        <EVPatternSection/>
      <EVMapBahrain/> */}
       <EVChargingMapBahrain />
      
    </div>
  );
}

export default App;
