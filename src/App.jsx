/* ============ */
  // react depends
/* ============ */
import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
/* ============ */
  // components
/* ============ */

/* component layout */
import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer';

/* component pages */
import Home from './components/pages/home/Home';
import About from './components/pages/About/About';

/* scss components */
import './App.scss';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App
