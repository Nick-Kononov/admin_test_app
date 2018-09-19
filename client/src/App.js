import React, { Component } from 'react';
import UserCard from './components/UserCard';
import Form from './components/Form';
import Login from './components/Login';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: {}
    };
  }

  componentDidMount() {
    fetch('/api/v1/users/current')
      .then(res => res.json())
      .then(
        (result) => {
          if (result) {
            this.setState({
              isLoaded: true,
              user: result
            })
          }
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        {console.log('user in app', this.state.user) &&
        this.state.user ? <UserCard user={this.state.user} /> : <Login />}
        <Form />
      </div>

    )
  }
}

export default App;
