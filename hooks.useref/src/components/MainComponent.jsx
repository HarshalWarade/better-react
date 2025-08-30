import React, { useState } from "react";

const MainComponent = () => {
    console.log('re-rendered!')
  const [seconds, setSeconds] = useState(0);

  function startWatch() {
    let k = setInterval(() => {
        setSeconds(seconds => seconds + 1)
    }, 1000);
  }

  return (
    <>
      <p>Stopwatch</p>
      <p>Time: {seconds}</p>
      <div>
        <button onClick={startWatch}>start</button>
      </div>
    </>
  );
};

export default MainComponent;
