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
      loginMessage: '',
      isSaved: false
    }
  }

  componentWillMount(){
    document.body.style.backgroundColor = "#f5f5f5";
  }

  componentWillUnmount(){
    document.body.style.backgroundColor = null;
  }

  componentDidMount(){
    let token = read_cookie('token')
    if (typeof token === 'string') {
      this.props.setUserToken(token);
    }
  }

  sendLoginApiRequest(e) {
    e.preventDefault();
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
            if (this.state.isSaved) {
              bake_cookie('token', result.access_token);
            }
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
      <div className="text-center">
        <form className="form-signin" onSubmit={(e) => this.sendLoginApiRequest(e)}>
          <img className="mb-2 login-logo" src="https://by.pycon.org/assets/img/iTechArt.png" alt=":iTeachArt"/>
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
            onChange={event => this.setState({email: event.target.value})}/>
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
            onChange={event => this.setState({password: event.target.value})}/>
          <div className="custom-control custom-checkbox my-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="saveMeCheck"
              value="remember-me"
              onChange={() => this.setState({isSaved: !this.state.isSaved})}
              />
            <label className="custom-control-label" htmlFor="saveMeCheck">
              Remember me
            </label>
          </div>
          <button
            className="btn btn-lg btn-danger btn-block"
            id="signInButton"
            type="submit">Sign in
          </button>
          <Alert message={this.state.loginMessage} />
          <p className="m-2 text-muted copyright">© 2018</p>
        </form>
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
