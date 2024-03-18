import React, { useState, useRef, useEffect } from 'react';
interface ProgressBarProps {
  theme: string | null;
}

const ProgressBar:React.FC<ProgressBarProps> = ({theme}) => {
  const [input, setInput] = useState<string>("0")
  const [secondInput, setSecondInput] = useState<string>("0")
  const [progress, setProgress] = useState<number>(0)
  const [cssProgress, setCssProgress] = useState<number>(0)

  //SetInterval()
  const increaseRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let targetPercentage = Number(input)
    if (progress < targetPercentage) {
      increaseRef.current = setInterval(() => {
        setProgress((prev) => prev + 1)
      }, 25)
    }
    return () => {
      setProgress(0)
      increaseRef.current && clearInterval(increaseRef.current);
    };
  }, [input])

  useEffect(() => {
    let targetPercentage = Number(input)
    if (progress === targetPercentage || progress > targetPercentage) {
      increaseRef.current && clearInterval(increaseRef.current)
    } else if (progress === 100 || progress > 100) {
      increaseRef.current && clearInterval(increaseRef.current)
    }
  }, [progress])

  const handleClearInterval = () => {
    setInput("0")
    setProgress(0)
    increaseRef.current && clearInterval(increaseRef.current)
  }

  //CSS

  useEffect(()=> {
    setCssProgress(Number(secondInput))
  },[secondInput])

  const handleClearCSS = () => {
    setSecondInput("0")
    setCssProgress(0)
  }

  return (
    <>
      <div>
        <h2>Progress bar</h2>
        <h4>Using setInterval()</h4>
        <div>
          <div style={{ background: "#fafafa", borderRadius: 10, width: '50%', height: 30 }}>
            <div style={{
              backgroundImage: "linear-gradient(to right, #EEBD89, #D13ABD)",
              borderRadius: 10,
              width: `${input === "" ? 0 : progress}%`,
              height: 30,

            }}>
              {`${progress}%`}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
          <p>Input percentage:</p>
          <input
            type='number'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: 50,
              height: 18,
              margin: 16,
              borderRadius: 5,
              border: '1px solid #DDDDDA',
            }}
          />
          <button
            onClick={handleClearInterval}
            style={{
              width: 50,
              margin: '16px 0px 16px 0px',
              border: '1px solid #DDDDDA',
              borderRadius: 5,
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div>
        <h4>Using CSS transition</h4>
        <div>
          <div style={{ background: "#fafafa", borderRadius: 10, width: '50%', height: 30 }}>
            <div style={{
              backgroundImage: "linear-gradient(to right, #EEBD89, #D13ABD",
              borderRadius: 10,
              width:`${input === "" ? 0 : cssProgress}%`,
              transition: `width 2s`,
              height: 30,

            }}>
              {`${cssProgress}%`}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
            <p>Input percentage:</p>
            <input
              type='number'
              value={secondInput}
              onChange={(e) => setSecondInput(e.target.value)}
              style={{
                width: 50,
                height: 18,
                margin: 16,
                borderRadius: 5,
                border: '1px solid #DDDDDA',
              }}
            />
            <button
              onClick={handleClearCSS}
              style={{
                width: 50,
                margin: '16px 0px 16px 0px',
                border: '1px solid #DDDDDA',
                borderRadius: 5,
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBar;