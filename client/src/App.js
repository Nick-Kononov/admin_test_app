import React, { Component } from 'react';
import { read_cookie } from 'sfcookies';
import UserCard from './components/UserCard';
import Login from './components/Login';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: read_cookie('user')
    };
  }

  checkForUser() {
    let user = read_cookie('user');
    if (user.id) {
      this.setState({
        isLoaded: true,
        user
      })
    } else {
      this.setState({
        isLoaded: false,
        user
      })
    }
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
