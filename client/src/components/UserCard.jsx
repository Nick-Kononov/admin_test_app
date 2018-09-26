import React from 'react'
import { delete_cookie } from 'sfcookies'
import { connect } from 'react-redux'
import { clearAll } from '../actions'
import Skills from './Skills'
import Form from './Form';

class UserCard extends React.Component {

  logOut() {
    delete_cookie('token');
    this.props.clearAll();
  }

  render() {
    let {username, email} = this.props.user
    let user_skills = this.props.user.user_skills

    return(
      <div className="user">
        <div className="card user-card">
          <div className="card-body">
            <div className='card-title'>
              <span
                className="badge badge-pill badge-danger"
                onClick={() => this.logOut()}>log out</span>
              <h5>{username || 'No user'}</h5>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
            <Skills userSkills={user_skills} />
          </div>
        </div>
        <Form />
      </div>
    )
  }
}

export default connect(null, { clearAll })(UserCard);
