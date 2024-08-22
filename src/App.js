import React from 'react';
import './App.css';
import WaterFill from './WaterFill';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <WaterFill text="" fillHeight={95} waveHeight={10} />
            <div className="container2"></div>
        </header>
      </div>
  );
}

export default App;
