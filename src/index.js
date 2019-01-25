import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from  './components/Homepage';
import * as serviceWorker from './serviceWorker';
import Tickets from '../src/sub-components/Tickets/newTickets';
import Routes from './sub-components/route'
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
    <Routes />
  </HashRouter>, document.getElementById('root')
);

