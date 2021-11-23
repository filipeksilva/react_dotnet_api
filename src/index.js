import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Clientes from './views/Clientes';
import Pagina404 from './views/Pagina404';
import ClienteMostrar from './views/ClienteMostrar';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/clientes" component={Clientes} />      
      <Route path="/cliente/:id" component={ClienteMostrar} />
      <Route path='*' component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
