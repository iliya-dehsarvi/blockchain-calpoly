// App.js
import React from 'react';
import LandingPage from './LandingPage';
import SplineModel from './SplineModel';

function App() {
  return (
    <div className="App" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* SplineModel as a background */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
        <SplineModel />
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
