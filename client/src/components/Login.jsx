import React from 'react';
import { read_cookie, bake_cookie } from 'sfcookies';
import { connect } from 'react-redux';
import { setUserToken } from '../actions';
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

  componentDidMount(){
    let token = read_cookie('token')
    if (typeof token === 'string') {
      this.props.setUserToken(token);
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
          if (result.error) {
            this.setState({
              loginMessage: result.error.user_authentication[0]
            })
          } else {
            bake_cookie('token', result.access_token);
            this.props.setUserToken(result.access_token);
            this.setState({
              loginMessage: ''
            })
          }
        }
      )
  }

  render() {
    return(
      <div className='card card-body'>
        <form className='form-inline'>
          <input type='email'
            className='form-control'
            placeholder='email'
            onChange={event => this.setState({email: event.target.value})} />
          <input type='password'
            className='form-control'
            placeholder='password'
            onChange={event => this.setState({password: event.target.value})} />
        <button type="button"
          className='btn btn-primary'
          onClick={() => this.sendLoginApiRequest()}> login </button>
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

function mapStateToProps(state) {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps, { setUserToken })(Login);
