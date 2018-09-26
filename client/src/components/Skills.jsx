import React from 'react';

class Skills extends React.Component {
  render(){
    if (this.props.userSkills) {
      return(
        <div className="row">
          <div className="col-5">
            <div className="list-group" id="list-tab" role="tablist">
              {
                this.props.userSkills.map((user_skill, index) => {
                  return(
                    <a
                      className={`list-group-item list-group-item-action${index === 0 ? ' active' : ''}`}
                      key={user_skill.id}
                      id={`list-${user_skill.skill.name}-list`}
                      data-toggle="list"
                      href={`#list-${user_skill.skill.name}`}
                      role="tab"
                      aria-controls={user_skill.skill.name}
                      >
                        {user_skill.skill.name}
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className="col-7">
            <div className="tab-content" id="nav-tabContent">
              {
                this.props.userSkills.map((user_skill, index) => {
                  return(
                    <div
                      className={`tab-pane fade${index === 0 ? ' show active' : ''}`}
                      key={user_skill.id}
                      id={`list-${user_skill.skill.name}`}
                      role="tabpanel"
                      aria-labelledby={`#list-${user_skill.skill.name}-list`}
                      >
                      {user_skill.skill.description}
                      <ul>
                        <li>level: {user_skill.level}/10</li>
                        <li>desire: {user_skill.desire}</li>
                        <li>{user_skill.skill.category.name} skill</li>
                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <p className="card-text">No skills</p>
      )
    }
  }
}

export default Skills;
