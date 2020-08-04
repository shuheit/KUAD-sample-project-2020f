import React, { Component } from 'react';
import logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <img className="header-logo" src= {logo} alt="logo" />
      </div>
    );
  }
}

export default Header;
