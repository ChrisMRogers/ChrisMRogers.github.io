import Link, { LinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const TerminalLink = styled(Link)<LinkProps>(({ theme, href }) => ({
  textDecoration: "none",
  display: "block",
  fontWeight: "bold",
  fontFamily: "'Roboto Mono', monospace",
  color: calculateColor(theme.palette.mode, href!),
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",
  },
  "&:active": {
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",
  },
}));

const calculateColor = (mode: "light" | "dark", href: string) => {
  if (mode === "dark") {
    if (window.location.href.includes(href)) {
      return "#64b5f6";
    } else {
      return "#FAFAFA";
    }
  } else {
    if (window.location.href.includes(href)) {
      return "#0d47a1";
    } else {
      return "#363537";
    }
  }
};
