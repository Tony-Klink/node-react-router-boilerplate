import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

import './index.css';

ReactDOM.render(
  <Routes/>,
  document.getElementById('root')
);