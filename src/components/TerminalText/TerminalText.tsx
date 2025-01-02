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
  display: "inline-block",
  "&:after": {
    content: "''",
    position: "absolute",
    backgroundColor: "#606060",
    width: "10px",
    height: "1.3em",
    animation: `${blink} 1s step-end infinite`,
  },
}));
