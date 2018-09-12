import React, { Component } from 'react';
import './app.css'
import Card from './components/Card'

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
    fetch('/api/v1/current_user')
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
        {console.log('user in app',this.state.user)}
        {this.state.user ? <Card user={this.state.user} /> : <div>No user</div>}
      </div>

    )
  }
}

export default App;
