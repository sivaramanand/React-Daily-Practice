import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [initialMinutes, setInitialMinutes] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalRef.current);
            setIsActive(false);
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, minutes, seconds]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  const handleSetTimer = (e) => {
    e.preventDefault();
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <h1>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </h1>
      <form onSubmit={handleSetTimer}>
        <input
          type="number"
          value={initialMinutes}
          onChange={(e) => setInitialMinutes(Number(e.target.value))}
          placeholder="Minutes"
          min="0"
        />
        <input
          type="number"
          value={initialSeconds}
          onChange={(e) => setInitialSeconds(Number(e.target.value))}
          placeholder="Seconds"
          min="0"
          max="59"
        />
        <button type="submit">Set Timer</button>
      </form>
      <div>
        <button onClick={handleStartPause}>{isActive ? 'Pause' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
