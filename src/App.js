import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Destination from './components/pages/Destination';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {Home} />
        <Route path = "/destination" component = {Destination} />
        <Route path = "/services" component = {Services} />
        <Route path = "/sign-up" component = {SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
