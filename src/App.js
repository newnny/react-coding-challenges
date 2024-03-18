import "./App.css";
import { createContext, useState } from "react";
import View from "./components/View";
import Moon from './assets/moon.svg'
import Sun from './assets/sun.svg'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <div className="btn-div">
          <button onClick={toggleTheme} className="btn">
            {theme === 'light' ?
              <img src={Moon} alt='dark' className="icon" /> :
              <img src={Sun} alt='light' className="icon" />
            }
          </button>
        </div>
        <View />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
