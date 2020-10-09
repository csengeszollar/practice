import React from "react";
import { useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState({ ms: 0, s: 0 });
  const [interv, setInterv] = useState();

  const startCounter = () => {
    run();
    setInterv(setInterval(run, 10));
  };

  const stopCounter = () => {
    clearInterval(interv);
  };

  const resetCounter = () => {
    clearInterval(interv);
    setTime({ ms: 0, s: 0 });
  };

  let updatedMs = time.ms;
  let updatedS = time.s;

  const run = () => {
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS });
  };

  return (
    <div>
      <div>
        <h1>STOPWATCH</h1>
        <h2>VANILLA JAVASCRIPT STOPWATCH</h2>
      </div>
      <div className="time-box">
        <span>{time.s >= 10 ? time.s : "0" + time.s}</span>
        &nbsp;:&nbsp;
        <span>{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
      </div>
      <div className="buttons">
        <button onClick={startCounter}>START</button>
        <button onClick={stopCounter}>STOP</button>
        <button onClick={resetCounter}>RESET</button>
      </div>
    </div>
  );
}

export default Stopwatch;
