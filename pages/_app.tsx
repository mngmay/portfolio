import "../styles/reset.scss";
import "../styles/globals.scss";
import CssBaseline from "@mui/material/CssBaseline";
import muiTheme from "../styles/muiTheme";
import createEmotionCache from "../styles/emotionCache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";

const clientSideEmotionCache = createEmotionCache();

interface EmotionAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: EmotionAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
