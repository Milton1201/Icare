/**
 * @flow
 * @author Mbifanse Milton Keyness Vuchi
 */



import React from 'react';

import Home from './pages/Home';
import Services from './pages/Services';
import Premium from './pages/Premium';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/services/:slug" component={Premium} />
      <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
