import React, { Component } from 'react';
import { delete_cookie } from 'sfcookies'
import { connect } from 'react-redux'
import { clearAll } from '../actions'
import Account from './Account';
import Skills from './Skills';

class Navbar extends Component {
  logOut() {
    delete_cookie('token');
    this.props.clearAll();
  }

  render() {
    return(
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light">
        <a className="navbar-brand">
          <img src="https://by.pycon.org/assets/img/iTechArt.png" width="120" alt=":iTechArt" />
        </a>
        <button className="navbar-toggler collapsed" type="button"
          data-toggle="collapse" data-target="#navbarDefault"
          aria-controls="navbarDefault" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarDefault">
          <ul className="navbar-nav mr-auto">
            <Account user={this.props.user} />
            <Skills userSkills={this.props.user.user_skills} />
          </ul>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => this.logOut()}>
            Log Out
          </button>
        </div>
      </nav>

    )
  }
}

function mapStateToProps(state) {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps, { clearAll })(Navbar);
