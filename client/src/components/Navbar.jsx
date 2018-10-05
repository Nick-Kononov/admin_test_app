import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar fixed-top navbar-light bg-light">
        <a className="navbar-brand">
          <img src="https://by.pycon.org/assets/img/iTechArt.png" width="150" alt=":iTechArt" />
        </a>
      </nav>

    )
  }
}

export default Navbar;
