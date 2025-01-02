import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { TerminalLink } from "../TerminalLink/TerminalLink";
import { Link } from "wouter";

interface NavbarProps {
  toggleTheme: () => void;
}

export const Navbar = ({ toggleTheme }: NavbarProps) => {
  const theme = useTheme();

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        transition: "background 1.5s ease",
        background: "inherit",
      }}
    >
      <Toolbar>
        {/* Links */}
        <Box
          sx={{
            marginLeft: "auto",
            display: "flex",
            gap: 2,
          }}
        >
          {/* <Link href="/" asChild>
            <TerminalLink>.home()</TerminalLink>
          </Link> */}
          <Link href="/who" asChild>
            <TerminalLink>.who()</TerminalLink>
          </Link>
          <Link href="/work" asChild>
            <TerminalLink>.work()</TerminalLink>
          </Link>
          <Link href="/projects" asChild>
            <TerminalLink>.projects()</TerminalLink>
          </Link>
          <Link href="/contact" asChild>
            <TerminalLink>.contact()</TerminalLink>
          </Link>
        </Box>

        <IconButton
          sx={{
            marginLeft: 1,
            transition: "color 1.5s ease, transform 2s ease",
            color: theme.palette.mode === "dark" ? "#FAFAFA" : "#363537",
            transform:
              theme.palette.mode === "dark" ? "rotate(360deg)" : "rotate(0deg)",
          }}
          onClick={toggleTheme}
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <NightsStayIcon />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};