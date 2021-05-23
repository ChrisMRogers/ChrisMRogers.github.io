import React from 'react'
import './Styles/App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import { useDarkMode } from "./Components/useDarkMode"
import Homepage from './Components/Homepage'
import Toggler from './Components/Toggler'
import Navbar from './Components/Navbar'

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          {/* <Navbar theme={theme} toggelTheme={themeToggler} /> */}
          <Toggler theme={theme} toggleTheme={themeToggler} />
          <Homepage />
        </div>
      </>
    </ThemeProvider>

  );
}

export default App;
