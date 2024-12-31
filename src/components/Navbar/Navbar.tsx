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
        transition: "background 1.5s ease", // Transition for the AppBar background
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
          <Link href="/who" asChild>
            <TerminalLink>.who()</TerminalLink>
          </Link>

          <Link href="/work" asChild>
            <TerminalLink href="#work">.work()</TerminalLink>
          </Link>

          <Link href="/projects" asChild>
            <TerminalLink href="#projects">.projects()</TerminalLink>
          </Link>

          <Link href="/contact" asChild>
            <TerminalLink href="#contact">.contact()</TerminalLink>
          </Link>
        </Box>

        {/* Toggle Icon Button */}
        <IconButton
          sx={{
            marginLeft: 1,
            transition: "color 1.5s ease, transform 2s ease", // Smooth transition for the icon
            color: theme.palette.mode === "dark" ? "#FAFAFA" : "#363537",
            transform:
              theme.palette.mode === "dark" ? "rotate(360deg)" : "rotate(0deg)", // Optional spin effect
          }}
          onClick={toggleTheme}
          //   color="default"
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
