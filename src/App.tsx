import { useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "wouter";
import Box from "@mui/material/Box";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Navbar } from "./components/Navbar/Navbar";
import { Container, Grid2, Typography, useTheme } from "@mui/material";
import { TerminalText } from "./components/TerminalText/TerminalText";
import "./App.css";

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
            transition: "background-image, background-color 1.5s ease",
            backgroundColor: theme.palette.background.default,
            width: "100%",
          }}
          className={
            theme.palette.mode === "dark"
              ? "background-pattern-dark"
              : "background-pattern-light"
          }
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
                  // backgroundColor: theme.palette.background.default,
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
  // const [text, setText] = useState("");

  // document.addEventListener("keydown", (event) => {
  //   console.log("EVENT: ", event);
  //   console.log(`Key ${event.key} was pressed.`);

  //   if (event.key === "Backspace") {
  //     setText(text.slice(0, -1));
  //   } else if (event.key !== "Enter") {
  //     setText(text + event.key);
  //   }
  // });

  return (
    <Box
      sx={{
        transition: "background 1.5s ease",
        // backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography fontFamily={"'Roboto Mono', monospace"} variant={"body1"}>
        <b>chrisRogers@Portfolio-Website ~ % </b>echo "Hi! I'm $name."
      </Typography>
      <Typography fontFamily={"'Roboto Mono', monospace"} variant={"h2"}>
        Hi! I'm{" "}
        {
          <span
            className="glowing-text"
            style={{
              color: theme.palette.mode === "dark" ? "lightgreen" : "darkgreen",
            }}
          >
            {"Chris"}
          </span>
        }
      </Typography>
      <TerminalText fontFamily={"'Roboto Mono', monospace"} variant={"body1"}>
        <b>chrisRogers@Portfolio-Website ~ % </b>bash ./portfolio/whoIAm.sh
      </TerminalText>

      <Typography
        fontFamily={"'Roboto Mono', monospace"}
        variant={"h2"}
        paddingTop={"1em"}
        paddingBottom={".25em"}
      >
        I'm a{" "}
        {
          <span
            className="glowing-text"
            style={{
              color: theme.palette.mode === "dark" ? "lightgreen" : "darkgreen",
            }}
          >
            {"full stack application developer."}
          </span>
        }
      </Typography>

      <Grid2 container>
        <Grid2 size={5}>
          <Typography fontFamily={"'Roboto Mono', monospace"} variant={"body1"}>
            I'm the kind of developer who writes bugs so elegant you'd think
            they were features—but don't worry, I fix them too. Leading QDoc’s
            app development taught me how to build not just software but
            experiences. Stick around; I’ve got some fun projects to share.
          </Typography>
        </Grid2>
        <Grid2 size={5} />
        <Grid2 size={2}>
          <div className="skills-box">
            <img
              src="./public/swift-icon.webp"
              style={{ width: "70px", height: "auto" }}
            />
            <div className="skills-box-name">Swift</div>
          </div>
        </Grid2>
      </Grid2>

      {/* <Typography
        sx={{ textAlign: "center" }}
        fontFamily={"'Roboto Mono', monospace"}
        variant={"body1"}
      >
        I'm the kind of developer who writes bugs so elegant you'd think they
        were features—but don't worry, I fix them too. Leading QDoc’s app
        development taught me how to build not just software but experiences.
        Stick around; I’ve got some fun projects to share.
      </Typography> */}

      {/* <TerminalText variant="body1">
        Ready to start? {"[Y/n]"}
      </TerminalText> */}
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
