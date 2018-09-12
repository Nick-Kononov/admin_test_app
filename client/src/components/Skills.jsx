import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  makeActive(active){
    this.setState({active});
  }

  render(){
    if (this.props.userSkills) {
      return(
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              {
                this.props.userSkills.map((user_skill, index) => {
                  return(
                    <a
                      className={`list-group-item list-group-item-action${this.state.active === index ? ' active' : ''}`}
                      key={user_skill.id}
                      id={`list-${user_skill.skill.name}-list`}
                      data-toggle="list"
                      href={`#list-${user_skill.skill.name}`}
                      role="tab"
                      aria-controls={user_skill.skill.name}
                      onClick={() => this.makeActive(index)}
                      >
                        {user_skill.skill.name}
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
              {
                this.props.userSkills.map((user_skill, index) => {
                  return(
                    <div
                      className={`tab-pane fade${this.state.active === index ? ' show active' : ''}`}
                      key={user_skill.id}
                      id={`list-${user_skill.skill.name}`}
                      role="tabpanel"
                      aria-labelledby={`#list-${user_skill.skill.name}-list`}
                      >
                      {user_skill.skill.description}
                      <ul>
                        <li>level: {user_skill.level}/10</li>
                        <li>desire: {user_skill.desire}/10</li>
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
