import React, { useContext, useState, lazy, Suspense } from 'react';
import '../App.css'
import { list } from './utils';
import { ThemeContext } from '../App';

const ChangeOrder = lazy(() => import('../challenges/ChangeOrder'))
const MaxCount = lazy(() => import('../challenges/MaxCount'))
const ScrollToTop = lazy(() => import('../challenges/ScrollToTop'))
const Timer = lazy(() => import('../challenges/Timer'))
const ProgressBar = lazy(() => import('../challenges/ProgressBar'))
const Sudoku = lazy(() => import('../challenges/Sudoku'))

const View = () => {
  const [show, setShow] = useState<boolean>(false)
  const [selectedItem, setSelecteditem] = useState<string>("")
  const theme = useContext(ThemeContext)

  return (
    <section className='view-div'>
      <dl style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button
          className='list-btn'
          onClick={() => setShow(!show)}
        >
          <h2>List of challenge</h2>
        </button>
      </dl>
      {show &&
        <dl style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          marginTop: 10,
          height: window.innerHeight / 10
        }}>
          {list.map(l =>
            <dt
              key={l.id}
              onClick={() => setSelecteditem(l.name)}
              style={{
                cursor: "pointer",
                color: l.name === selectedItem ? 'inherit' : 'grey',
                padding: 2
              }}
            >
              {`> ${l.name}`}
            </dt>
          )}
        </dl>
      }
      <dl style={{ padding: 20 }} id={theme!}>
        <Suspense fallback={<p>Loading</p>}>
          {selectedItem === "Timer" &&
            <Timer theme={theme} />
          }
          {selectedItem === "Progress bar" &&
            <ProgressBar theme={theme} />
          }
          {selectedItem === "Max count" &&
            <MaxCount theme={theme} />
          }
          {selectedItem === "Scroll to top" &&
            <ScrollToTop theme={theme} />
          }
          {selectedItem === "Change order" &&
            <ChangeOrder theme={theme} />
          }
          {selectedItem === "Sudoku" &&
            <Sudoku theme={theme} />
          }
        </Suspense>
      </dl>
    </section>
  )
}

export default View;