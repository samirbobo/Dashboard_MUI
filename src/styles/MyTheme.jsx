import { grey, purple, teal } from "@mui/material/colors";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          samir: {
            main: purple[500],
            light: purple[700],
          },
          favColor: {
            main: grey[300],
          },
          favFilter: {
            main: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          },
        }
      : {
          // palette values for dark mode
          samir: {
            main: teal[500],
            light: teal[700],
          },
          favColor: {
            main: grey[800],
          },
          favFilter: {
            main: "drop-shadow(0px 2px 8px rgba(250,250,250,0.2))",
          },
        }),
  },
});
export default getDesignTokens;
