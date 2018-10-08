import React from 'react';

class Skills extends React.Component {
  detectColor(value, min) {
    switch (Math.floor((value-min)/4)) {
      case 0:
        return 'badge badge-danger'
      case 1:
        return 'badge badge-warning'
      case 2:
        return 'badge badge-success'
      default:
        return 'badge badge-secondary'
    }
  }

  createSkillsList(){
    let list = this.props.userSkills.map(userSkill => {
      return (
        <div key={userSkill.id} className="dropdown-item">
          {userSkill.skill.name}
          <div id="span-list">
            <span className={this.detectColor(userSkill.level,0)}>level {userSkill.level}</span>
            <span className={this.detectColor(userSkill.desire,-5)}>desire {userSkill.desire}</span>
          </div>
        </div>
      )
    })
    return list
  }

  render(){
    return(
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown-skills" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Skills</a>
        <div className="dropdown-menu" aria-labelledby="dropdown-skills">
          {this.createSkillsList()}
        </div>
      </li>
    )
  }
}

export default Skills;
