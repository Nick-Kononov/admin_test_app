import React, { Component } from 'react';

class Account extends Component {
  render() {
    return(
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown-account" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
        <div className="dropdown-menu" aria-labelledby="dropdown-account">
          <div className="dropdown-item" id="user-info">
            <div id="user-name">
              {this.props.user.username}<span className="badge badge-info">{this.props.user.user_skills.length} skills</span>
            </div>
            <div className="text-muted">{this.props.user.email}</div>
          </div>
        </div>
      </li>
    )
  }
}

export default Account;
