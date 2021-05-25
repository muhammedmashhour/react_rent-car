/* ============ */
  // react depends
/* ============ */
import React, { Component } from 'react';

/* ============ */
  // components
/* ============ */

/* component layout */
import Navbar from './components/layouts/navbar/Navbar';
import Footer from './components/layouts/footer/Footer';

/* component pages */
import Home from './components/pages/home/Home';

/* scss components */
import './App.scss';


class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    )
  }
}

export default App
