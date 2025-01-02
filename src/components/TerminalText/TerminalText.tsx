import { Typography, TypographyProps } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

// Define the blinking animation
const blink = keyframes`
  0% {
    opacity: 1.0;
  }
  50% {
    opacity: 0.0;
  }
  100% {
    opacity: 1.0;
  }
`;

// Styled component for TerminalText
export const TerminalText = styled(Typography)<TypographyProps>(() => ({
  fontFamily: "'Roboto Mono', monospace",
  position: "relative",
  "&:after": {
    content: "''",
    position: "absolute",
    top: 0,
    // right: "-15px",
    display: "inline-block",
    backgroundColor: "#606060",
    width: "10px",
    height: "1.2em",
    animation: `${blink} 1s step-end infinite`,
  },
}));
