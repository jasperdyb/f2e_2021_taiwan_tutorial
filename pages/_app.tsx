import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";

const GlobalStyle = createGlobalStyle`
html{ 
}

body{ 
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
