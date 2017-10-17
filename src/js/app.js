import React, { Component } from 'react';
import { render } from 'react-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Header from './inc/Header';
import Footer from './inc/Footer';
import 'bootstrap/dist/css/bootstrap.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Header />

        <h1>Content</h1>

        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
