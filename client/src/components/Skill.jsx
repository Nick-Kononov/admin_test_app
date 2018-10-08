import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

class Skill extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.setDefaultState()
  }

  setDefaultState(){
    if (this.props.skill.active) {
      return {
        id: this.props.skill.id,
        disabled: !this.props.skill.active,
        level: this.props.skill.level,
        desire: this.props.skill.desire
      }
    } else {
      return {
        id: this.props.skill.id,
        disabled: !this.props.skill.active,
        level: 0,
        desire: 0
      }
    }
  }

  updateSkill() {
    let token = 'Bearer ' + this.props.token
    let opts = {
      "id": this.state.id,
      "level": this.state.level,
      "desire": this.state.desire,
      "delete": this.state.disabled.toString()
    }
    fetch('/api/v1/users/edit_skills',{
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Authorization': token
      },
      body: JSON.stringify(opts)
    })
      .then(response => response.json())
      .then(result => {
        this.props.updateUser(result);
      })

  }

  switchDisabled() {
    this.setState(
      {disabled: !this.state.disabled},
      () => this.updateSkill()  //synchronous skill update
    )
  }

  createOptions(category){
    let values = [...Array(11).keys()]
    if (category === 'desire') {
      values = values.map(x => x-5)
    }

    return(
      values.map(value => {
        return(
          <option
            key={value}
            value={value}>
            {value}
          </option>
        )
      })
    )
  }

  render() {
    return(
      <div className="skill row">
        <div className="container skill-container">
          <div className="row">
            <div className="col-5">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input form-control"
                  id={`customCheck${this.props.skill.id}`}
                  checked={!this.state.disabled}
                  onChange={() => this.switchDisabled()}/>
                <label
                  className="custom-control-label"
                  htmlFor={`customCheck${this.props.skill.id}`}>
                  {this.props.skill.name}
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="level">
                <label
                  className="selector-label"
                  htmlFor={`customLevelSelect${this.props.skill.id}`}>
                    Level</label>
                <select
                  className="custom-select form-control"
                  id={`customLevelSelect${this.props.skill.id}`}
                  disabled={this.state.disabled}
                  defaultValue={this.state.level}
                  onChange={e => this.setState(
                    {level: e.target.value},
                    () => this.updateSkill()
                  )}>
                  {this.createOptions('level')}
                </select>
              </div>
            </div>
            <div className="col-3">
              <div className="desire">
                <label
                  className="selector-label"
                  htmlFor={`customDesireSelect${this.props.skill.id}`}>
                    Desire</label>
                <select
                  className="custom-select form-control"
                  id={`customDesireSelect${this.props.skill.id}`}
                  disabled={this.state.disabled}
                  defaultValue={this.state.desire}
                  onChange={e => this.setState(
                    {desire: e.target.value},
                    () => this.updateSkill()
                  )}>
                  {this.createOptions('desire')}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-muted">
                {this.props.skill.description}
                <hr/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateUser })(Skill);
