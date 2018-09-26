import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './actions';
import UserCard from './components/UserCard';
import Login from './components/Login';
import './app.css';

class App extends Component {
  sendCurrentUserApiRequest() {
    let token = 'Bearer ' + this.props.token

    let opts = {
      'Content-Type':'application/json',
      'Authorization': token
    }
    fetch('/api/v1/users/current',{
      method: 'get',
      headers: opts
    })
      .then(res => res.json())
      .then(
        (result) => {
          if (!result.message) {
            this.props.updateUser(result)
          }
        }
      )
  }

  componentDidUpdate() {
    if (!this.props.user && this.props.token) {
      this.sendCurrentUserApiRequest()
    }
  }

  render() {
    return (
      <div>
        {this.props.user ? <UserCard user={this.props.user} /> : <Login />}
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    user: state.user,
    token: state.token
  }
}

export default connect(mapStateToProps, { updateUser })(App);
