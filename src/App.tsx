import { useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "wouter";
import Box from "@mui/material/Box";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar/Navbar";
import { Container } from "@mui/material";

export default function App() {
  const [mode, setMode] = useState<PaletteMode>(
    (window.localStorage.getItem("theme") as PaletteMode) ?? "dark"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
    transitions: {
      duration: {
        standard: 1500,
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
        <Redirect to="/who" />
        <CssBaseline />
        <Box
          sx={{
            transition: "background 1.5s ease",
            backgroundColor: theme.palette.background.default,
            width: "100%",
          }}
        >
          <Container sx={{ paddingX: 0 }}>
            <Box
              sx={{
                height: "100vh",
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

                <Switch>
                  <Route>404: No such page!</Route>
                </Switch>
              </Box>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
