import React from 'react'
import { delete_cookie } from 'sfcookies'
import Skills from './Skills'
import Form from './Form';

class UserCard extends React.Component {

  clearCookies() {
    delete_cookie('user');
    delete_cookie('token');
  }

  render() {
    let {username, email} = this.props.user
    let user_skills = this.props.user.user_skills

    return(
      <div className="user">
        <div className="card user-card">
          <div className="card-body">
            <div className='card-title'>
              <a
                href=''
                className="badge badge-pill badge-danger"
                onClick={() => this.clearCookies()}>log out</a>
              <h5>{username || 'No user'}</h5>
            </div>
            <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
            <Skills userSkills={user_skills} />
          </div>
        </div>
        <Form userSkills={this.props.user.user_skills}/>
      </div>
    )
  }
}

export default UserCard;
