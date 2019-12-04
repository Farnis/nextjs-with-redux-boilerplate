import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#3A779A",
      main: "#004366",
      dark: "#003450"
    },
    secondary: {
      light: "#F2665E",
      main: "#E73339",
      dark: "#B61D22"
    },
    error: {
      main: "#E73339"
    },
    background: {
      default: "#fff"
    },
    forInputBorder: "#A6A7A9"
  },
  typography: {
    useNextVariants: true,
    fontFamily: "iransans"
  },
  secondary: {
    lighten: "#f9b4a3",
    light: "#f2665e",
    main: "#E73339",
    dark: "#b61b1e",
    darken: "#981b1e"
  },
  forInputBorder: "#A6A7A9"
});

export default theme;
