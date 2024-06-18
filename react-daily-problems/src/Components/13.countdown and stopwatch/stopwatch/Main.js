import React, { useState } from 'react';
import Stopwatch from './stopwatch';
import CountdownTimer from './countdown';
import './style.css';

const App1 = () => {
  const [view, setView] = useState('stopwatch');

  return (
    <div className="app-container">
      <h1>Stopwatch and Timer</h1>
      <div className="button-container">
        <button onClick={() => setView('stopwatch')}>Stopwatch</button>
        <button onClick={() => setView('timer')}>Timer</button>
      </div>
      <div className="view-container">
        {view === 'stopwatch' ? <Stopwatch /> : <CountdownTimer initialMinutes={5} />}
      </div>
    </div>
  );
};

export default App1;
