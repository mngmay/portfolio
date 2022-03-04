import "../styles/reset.scss";
import "../styles/globals.scss";
import CssBaseline from "@mui/material/CssBaseline";
import muiTheme from "../styles/muiTheme";

import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
