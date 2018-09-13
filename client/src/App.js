import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';
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
        {this.state.user ? <Card user={this.state.user} /> : <div>No user</div>}
        <Form />
      </div>

    )
  }
}

export default App;
