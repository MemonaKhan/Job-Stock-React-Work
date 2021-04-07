import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';

// import Pricing from './pages/Pricing'
import Routes from './Routes'

import ProfileAbout from './components/ProfileAbout';
import ProfileAddress from './components/ProfileAddress';
import ProfileFriends from './components/ProfileFriends';
import ProfileMessage from './components/ProfileMessage';
import ProfilePostJob from './components/ProfilePostJob';
import ProfileSetting from './components/ProfileSetting';

function App() {
  return (
    <>
      <Routes />
      
    </>
  );
}

export default App;
