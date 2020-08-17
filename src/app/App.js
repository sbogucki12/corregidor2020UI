import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeDesktop from '../home/HomeDesktop';
import homeProps from '../home/homeProps';
import HomeMobile from '../home/HomeMobile';
import Routing from '../utils/routing';

function App() {
  const [ matches, setMatches] = useState( window.matchMedia("(min-width: 479px)").matches )

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }, [])

  const [showRoutes, setShowRoutes] = useState(false);

  return (
    <div className="App">
      {matches && !showRoutes && <HomeDesktop homeProps={homeProps} setShowRoutes={setShowRoutes} />}
      {!matches && !showRoutes && <HomeMobile homeProps={homeProps} setShowRoutes={setShowRoutes} />} 
      {showRoutes && <Routing setShowRoutes={setShowRoutes}/>}
    </div>
  );
}

export default App;
