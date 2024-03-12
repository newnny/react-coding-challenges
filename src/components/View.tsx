import React, { useState } from 'react';
import { List } from '../types';
import { ProgressBar, Timer } from '../challenges';
interface ViewProps {
  list: List[]
}

const View: React.FC<ViewProps> = ({ list }) => {

  const [show, setShow] = useState<boolean>(false)
  const [selectedItem, setSelecteditem] = useState<string>("")
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", justifyContent: "flex-start", width: "33%" }} />
        <div style={{ display: "flex", justifyContent: "center", width: "33%" }}>
          <button
            style={{
              border: "none",
              background: "inherit",
              cursor: "pointer",
              fontSize: 16
            }}
            onClick={() => setShow(!show)}
          >
            List of challenge
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", width: "33%" }} />
      </div>
      {show &&
        <div style={{ display: "flex", flexDirection: "column", padding: 20, marginTop: 10 }}>
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
          <Timer />
        }
        {selectedItem === "Progress bar" &&
          <ProgressBar />
        }

      </div>
    </>
  )
}

export default View;