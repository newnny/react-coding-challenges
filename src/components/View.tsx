import React, { useContext, useState } from 'react';
import '../App.css'
import { list } from './utils';
import { MaxCount, ProgressBar, Timer } from '../challenges';
import { ThemeContext } from '../App';



const View= () => {
  const [show, setShow] = useState<boolean>(false)
  const [selectedItem, setSelecteditem] = useState<string>("")
  const theme = useContext(ThemeContext)
  return (
    <div className='view-div'>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <button
            className='list-btn'
            onClick={() => setShow(!show)}
          >
            <h2>List of challenge</h2>
          </button>
        </div>
      </div>
      {show &&
        <div style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          marginTop: 10,
          height: window.innerHeight / 10
        }}>
          {list.map(l =>
            <a
              key={l.id}
              onClick={() => setSelecteditem(l.name)}
              style={{
                cursor: "pointer",
                color: l.name === selectedItem ? 'inherit' : 'grey',
                padding: 2
              }}
            >
              {`> ${l.name}`}
            </a>
          )}
        </div>
      }
      <div style={{ padding: 20 }}>
        {selectedItem === "Timer" &&
          <Timer theme={theme}/>
        }
        {selectedItem === "Progress bar" &&
          <ProgressBar theme={theme}/>
        }
        {selectedItem === "Max count" &&
          <MaxCount theme={theme}/>
        }
      </div>
    </div>
  )
}

export default View;