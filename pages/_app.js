import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/ui/Theme';
import createEmotionCache from '../src/createEmotionCache';
import HeaderBar from '../src/Components/Layout/HeaderBar';
import { makeStyles } from '@mui/styles';
import Footer from '../src/Components/Layout/Footer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Main Classes
  const useStyles = makeStyles(() => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '10px',
      },
      '*::-webkit-scrollbar-track': {
        background: '#808080',
      },
      '*::-webkit-scrollbar-thumb': {
        background: '#b2b2b2',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: '#d8d8d8',
      },
    },
  }));

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <HeaderBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
