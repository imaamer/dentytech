// src/App.js
import React, { useState } from 'react';

import './App.css';
import Splash from './components/Splash';
import LandingPage1 from './components/LandingPage1';
import LandingPage2 from './components/LandingPage2';
import LandingPage3 from './components/LandingPage3';

function App() {

  const [landingStage, setLandingStage] = useState(1);

  return (
    <div className="App">
      {landingStage === 1 && <Splash setLandingStage={setLandingStage}/>}
      {landingStage === 2 && <LandingPage1 setLandingStage={setLandingStage} />}
      {landingStage === 3 && <LandingPage2 setLandingStage={setLandingStage} />}
      {landingStage === 4 && <LandingPage3 setLandingStage={setLandingStage} />}
    </div>
  );
}

export default App;
