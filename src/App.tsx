import React, { useState, useEffect } from "react";
import { Router, Route, Link } from "wouter";
import Box from "@mui/material/Box";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar/Navbar";
import { Container } from "@mui/material";

// Styled TerminalLink with dynamic hover color

export default function App() {
  const [mode, setMode] = useState<PaletteMode>(
    (window.localStorage.getItem("theme") as PaletteMode) ?? "dark"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", mode);
  }, [mode]);

  // Create MUI themes for light and dark modes
  const theme = createTheme({
    palette: {
      mode: mode,
    },
    transitions: {
      duration: {
        standard: 1500, // Standard duration for transitions
      },
    },
  });

  const toggleTheme = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  return (
    <Router base="/ChrisMRogers.github.io">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Box
            sx={{
              height: "100vh",
              transition: "background 1.5s ease", // Smooth transition
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}
            >
              <Navbar toggleTheme={toggleTheme} />
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Router>
  );
}
