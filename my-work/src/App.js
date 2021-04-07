import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';

// import Pricing from './pages/Pricing'
import Routes from './Routes'

function App() {
  return (
    <>
      <Routes />
      
    </>
  );
}

export default App;
