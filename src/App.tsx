import { useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "wouter";
import Box from "@mui/material/Box";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar/Navbar";
import { Container, Typography, useTheme } from "@mui/material";
import { TerminalText } from "./components/TerminalText/TerminalText";

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
                  <Route path={"/"}>
                    <Home />
                  </Route>
                  <Route path={"/who"}>
                    <Who />
                  </Route>
                  <Route>
                    <PlaceHolder />
                  </Route>
                </Switch>
              </Box>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

const Home = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        transition: "background 1.5s ease",
        backgroundColor: theme.palette.background.default,
      }}
    ></Box>
  );
};

const Who = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        transition: "background 1.5s ease",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography fontFamily={"'Roboto Mono', monospace"} variant={"body1"}>
        <b>chrisRogers@Portfolio-Website ~ % </b>echo "Hi! I'm $name"
      </Typography>
      <Typography fontFamily={"'Roboto Mono', monospace"} variant={"h2"}>
        Hi! I'm{" "}
        {
          <span
            style={{
              color: theme.palette.mode === "dark" ? "lightgreen" : "darkgreen",
              transition: "color 1.5s ease",
              fontFamily: "'Roboto Mono', monospace",
            }}
          >
            {"Chris"}
          </span>
        }
      </Typography>
      <TerminalText variant={"body1"}>
        <b>chrisRogers@Portfolio-Website ~ % </b>bash ./portfolio/whoIAm.sh
      </TerminalText>
    </Box>
  );
};

const PlaceHolder = () => (
  <Container>
    <img
      src="construction.gif"
      alt="Work in Progress"
      width="25%"
      height="25%"
    />
  </Container>
);
