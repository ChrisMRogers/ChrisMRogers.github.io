import React from 'react'
import './Styles/App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"
import { useDarkMode } from "./Components/useDarkMode"
import Navbar from './Components/Navbar'

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

        </div>
      </>
    </ThemeProvider>

  );
}

export default App;
