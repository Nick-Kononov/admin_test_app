import React from 'react'
import Skills from './Skills'

class Card extends React.Component {

  render() {
    let {username, email} = this.props.user
    let user_skills = this.props.user.user_skills

    return(
      <div className="card user-card">
        <div className="card-body">
          <h5 className="card-title">
            {username || 'No user'}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <Skills userSkills={user_skills} />
        </div>
      </div>
    )
  }
}

export default Card;
