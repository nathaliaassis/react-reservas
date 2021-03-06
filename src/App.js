import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';

import history from './services/history';
import store from './store';

import GlobalStyle from './styles/global';
import Header from './components/Header';

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

