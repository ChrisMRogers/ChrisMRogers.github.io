import React from 'react'
import './Styles/App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import { useDarkMode } from "./Components/useDarkMode"
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'

function App() {
  const [theme, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar />
          <Homepage />

        </div>
      </>
    </ThemeProvider>

  );
}

export default App;
