import React, { useState, useRef } from 'react';

interface TimerProps {
  theme: string | null;
}

const Timer:React.FC<TimerProps> = ({theme}) => {
  const [timer, setTimer] = useState<number>(0)
  const [isRunning, setisRunning] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleStartStop = () => {
    if (isRunning) {
      setisRunning(false)
      intervalRef.current && clearInterval(intervalRef.current)
    } else if (!isRunning) {
      setisRunning(true)
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }
  }

  const handleReset = () => {
    intervalRef.current && clearInterval(intervalRef.current)
    setTimer(0)
    setisRunning(false)
  }


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Timer</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          display: "flex",
          background: "inherit",
          border:".5px solid grey",
          width: window.innerWidth * 0.4,
          height:  window.innerWidth * 0.1
        }}
        >
          <p style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: window.innerWidth * 0.5
          }}>
            {Math.trunc((timer / 60) / 24) < 10 ? `0${Math.trunc((timer / 60) / 24)}` : Math.trunc((timer / 60) / 24)}
            :{Math.trunc((timer / 60) % 60) < 10 ? `0${Math.trunc((timer / 60) % 60)}` : Math.trunc((timer / 60) % 60)}
            :{(timer % 60) < 10 ? `0${timer % 60}` : timer % 60}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 15 }}>
        <button onClick={handleStartStop}
          style={{ 
            padding: '12px 26px 12px 26px', 
            margin: 2, 
            border: theme == 'dark'? '#f0edcc':'#02343f', 
            borderRadius:20,
            background:theme == 'dark'? '#f0edcc':'#02343f', 
            color:theme == 'dark'? '#02343f':'#f0edcc',
            fontSize: 16
          }}
        >
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}
          style={{ 
            padding: '12px 26px 12px 26px', 
            margin: 2, 
            border: theme == 'dark'? '#f0edcc':'#02343f', 
            borderRadius:20,
            background:theme == 'dark'? '#f0edcc':'#02343f', 
            color:theme == 'dark'? '#02343f':'#f0edcc',
            fontSize: 16
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer;