import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  styled,
  ThemeProvider,
  darken,
} from "@mui/material/styles";

const GlobalStyle = createGlobalStyle`
html{ 
}

body{ 
}
`;

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#E8CB89",
    },
  },

  shape: {
    borderRadius: 15,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "#FFF",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
