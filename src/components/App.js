import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  // const startTime = useRef(0);
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);

  const startTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 10);
    }, 10);
  }
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  }
  const lapTimer = () => {
    const formattedTime = formatTime(currentTime);
    setLaps((prevLaps) => [...prevLaps, formattedTime]);
  };
  const restTimer = () => {
    clearInterval(intervalRef.current);
    setCurrentTime(0);
    setLaps([]);
  }
  const formatTime = (time) => {
    const milliseconds = `00${time % 1000}`.slice(-3);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 1000 / 60) % 60)}`.slice(-2);
    const hours = `0${Math.floor((time / 1000 / 3600) % 60)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;

  }

  return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>Stopwatch Time</h1>
        <p>{formatTime(currentTime)}</p>
        <section className='buttons'>
          <button className="start-btn" onClick={startTimer}>START</button>
          <button className="stop-btn" onClick={stopTimer}>STOP</button>
          <button className="lap-btn" onClick={lapTimer}>LAP</button>
          <button className="reset-btn" onClick={restTimer}>RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        {laps.length > 0 && <h2>Laps</h2>}
        <section className='laps'>
          {laps.map((lap, index) => { <p key={index}>{lap}</p> })}

          {/* <p>lap</p>
          <p>lap</p> */}
        </section>
      </section>
    </div>
  )
}


export default App;
