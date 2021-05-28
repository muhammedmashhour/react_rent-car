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
import ContactPage from './components/pages/ContactPage/ContactPage';

/* scss components */
import './App.scss';


class App extends Component {

  state = {
    fixedBtn: false,
  }

  componentDidMount = function() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount= function() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = window.scrollY;
    scrollTop > 300 ? this.setState({fixedBtn: true}) : this.setState({fixedBtn: false});
  }

  render() {
    return (
      <section id="top">
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/about" render={(props) => <About {...props} />} />
          <Route path="/contact" render={(props) => <ContactPage {...props} />} />
        </Switch>
        <Footer />
        
        <a href="#top" class={`go-up ${this.state.fixedBtn === true ? 'show' : ''}`}>
          <i className="fas fa-angle-up"></i>
        </a>
      </section>
    )
  }
}

export default App
