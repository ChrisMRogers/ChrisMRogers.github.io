import Link, { LinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const TerminalLink = styled(Link)<LinkProps>(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  fontWeight: "bold",
  fontFamily: "'Roboto Mono', monospace",
  color: theme.palette.mode === "dark" ? "#FAFAFA" : "#363537",
  "&:hover": {
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",
  },
  "&:active": {
    color: theme.palette.mode === "dark" ? "#64b5f6" : "#0d47a1",
  },
}));
