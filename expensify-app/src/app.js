import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter';
import PortfolioAppRouter from './routers/PortfolioAppRouter';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

//ReactDOM.render(<p>Hi!</p>, document.getElementById('app'));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
//ReactDOM.render(<PortfolioAppRouter />, document.getElementById('app'));

