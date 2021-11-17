// o provider é o meio pelo qual disponibilizamos o store
// com os estados de toda a aplicação para todos os demais componentes

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={ store }>
        <App />
      </Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
