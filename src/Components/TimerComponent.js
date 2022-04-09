import React, { useEffect, useState } from "react";

function TimerComponent(props) {
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let secondTimes = parseInt(props.time) * 60;
  let time = secondTimes;
  let minutes = 0;
  let seconds = 0;
  useEffect(() => {
    setInterval(() => {
      minutes = Math.floor(time / 60);
      seconds = time % 60;
      time--;
      seconds = seconds > 9 ? seconds : "0" + seconds;
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }, 1000);
  }, []);
  return (
    <div>
      {timerMinutes}:{timerSeconds}
    </div>
  );
}

export default TimerComponent;
