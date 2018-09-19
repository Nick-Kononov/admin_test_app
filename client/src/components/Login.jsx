import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    };
  }

  signIn(){
    console.log('state', this.state);
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
              onClick={() => this.signIn()}> login </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login;
