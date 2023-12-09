import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timeStarted, setTimeStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimeStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost.</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>Start Chanllenge</button>
      </p>
      <p className="">Time is running..</p>
    </section>
  );
}
