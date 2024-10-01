import { Fragment, useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import "./global.css";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const muiTheme = createTheme();
  const chakraTheme = extendTheme({
    styles: { global: { img: { maxWidth: "unset" } } },
  });
  const emotionCache = createCache({
    key: "emotion-cache",
    prepend: true,
  });

  return (
    <Fragment>
      <Head>
        <title>Jimil Mandani's Team's Project</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={chakraTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ChakraProvider>
        </CacheProvider>
      </ThemeProvider>
    </Fragment>
  );
}
