import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider} from 'react-toast-notifications'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';

import Routes from 'routes';

const App = () => {
  return (
    <ToastProvider>
      <Router>
        <Routes />
      </Router>
    </ToastProvider>
  );
}

export default App;
