import React from 'react';
import { bake_cookie } from 'sfcookies';
import Alert from './Alert';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loginMessage: ''
    }
  }

  handleResult(result) {
    if (result.access_token){
      bake_cookie('token', result.access_token)
      this.setState({
        loginMessage: result.message
      })
    } else {
      this.setState({
        loginMessage: result.error.user_authentication[0]
      })
    }
  }

  sendLoginApiRequest() {
    let opts = {
      "email": this.state.email,
      "password": this.state.password
    }
    fetch('/api/v1/users/login',{
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(opts)
      })
      .then(res => res.json())
      .then(
        (result) => {
          if (result) {
            this.handleResult(result)
          }
        }
      )
  }

  login(){
    this.sendLoginApiRequest()
  }

  render() {
    return(
      <div className='card card-body'>
        <form id='login'>
          <div className='form-inline'>
            <div className='form-group'>
              <input type='email'
                className='form-control'
                placeholder='email'
                onChange={event => this.setState({email: event.target.value})} />
            </div>
            <div className='form-group'>
              <input type='password'
                className='form-control'
                placeholder='password'
                onChange={event => this.setState({password: event.target.value})} />
            </div>
            <button type="button"
              className='btn btn-primary'
              onClick={() => this.login()}> login </button>
          </div>
        </form>
        <div className="message">
          {this.state.loginMessage
          ? <Alert message={this.state.loginMessage} />
          : ''}
        </div>
      </div>
    )
  }
}

export default Login;
