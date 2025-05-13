import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../state/store';
import '../styles/globals.css'; // Certifique-se de que este arquivo existe

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;