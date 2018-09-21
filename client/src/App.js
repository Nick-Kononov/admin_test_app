import React, { Component } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';
import UserCard from './components/UserCard';
import Login from './components/Login';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: null
    };
  }

  loadUserFromCookies() {
    let user = read_cookie('user')
    if (user.id) {
      this.setState({
        isLoaded: true,
        user
      })
    }
  }

  checkForUser() {
    let token = read_cookie('token')
    let user = read_cookie('user')

    if (typeof token === 'string' && !user.id) {
      this.sendCurrentUserApiRequest()
    }
  }

  sendCurrentUserApiRequest() {
    let token = 'Bearer ' + read_cookie('token')

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
          if (result) {
            bake_cookie('user', result);
            this.setState({
              user: result,
              isLoaded: true
            })
          }
        }, (error) => {
          if (error) {
            this.setState({
              isLoaded: false,
              user: null
            })
          }
        }
      )
  }

  componentWillMount() {
    this.checkForUser();
    this.loadUserFromCookies();
  }
  // Check while cookie 'user' appears
  componentDidMount(){
    setInterval(() => this.checkForUser(), 1000)
  }

  render() {
    return (
      <div>
        {this.state.isLoaded ? <UserCard user={this.state.user} /> : <Login />}
      </div>

    )
  }
}

export default App;
