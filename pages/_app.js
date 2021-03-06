import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
    PropTypes.object,
  ]).isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
    PropTypes.object,
  ]).isRequired,
};
