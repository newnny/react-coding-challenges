import React, { useState, useEffect, useRef } from 'react';

const MaxCount = () => {
  const [start, setStart] = useState(false)
  const [click, setClick] = useState<number>(0)
  const [time, setTime] = useState<number>(10)
  const timeRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (start) {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev - 1)
      }, 1000)

      if (time === 0) {
        setTime(10)
        setClick(0)
      }
    } else {
      timeRef.current && clearInterval(timeRef.current)
    }
  }, [start])

  useEffect(() => {
    if (time === 0) {
      setStart(false)
      setTime(0)
      timeRef.current && clearInterval(timeRef.current)
    }
  }, [time])



  const handleClick = () => {
    setClick((prev) => prev + 1)
  }


  return (
    <div>
      <h1>Max Count</h1>
      <p>please click the button as many as you can till the times up.</p>
      <button
        onClick={() => setStart(!start)}
        style={{
          background: start ? '#E69D45' : '#dbd968',
          border: 'none',
          borderRadius: 25,
          padding: 15,
          fontSize: 16
        }}
      >
        {start ? 'stop' : 'start'}
      </button>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h3> you clicked {click} times</h3>

        {start && <h2>{time} second</h2>}
        <button
          onClick={handleClick}
          disabled={!start}
          style={{ 
            fontWeight: "bold",
            padding: "10px 35px", 
            border: "none",
            borderRadius: 10,
            background: "linear-gradient(to right, #FF7BB9, #A5CAD2)" 
          }}
        >
          CLICK
        </button>
      </div>
    </div>
  )
}

export default MaxCount;