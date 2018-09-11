import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      username: ''
    };
  }

  componentDidMount() {
    fetch('/api/v1/current_user')
      .then(res => res.json())
      .then(
        (result) => {
          if (result)
          this.setState({
            isLoaded: true,
            username: result.username
          })},
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
        Hello,       
        {this.state.username ? this.state.username : 'world'}!
      </div>
    )
  }
}

export default App;
