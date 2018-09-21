import React from 'react';
import { read_cookie, delete_cookie } from 'sfcookies';

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
    let token = 'Bearer ' + read_cookie('token')
    let opts = {
      "id": this.state.id,
      "level": this.state.level,
      "desire": this.state.desire,
      "delete": this.state.disabled
    }
    
    fetch('/api/v1/users/edit_skills',{
      method: 'post',
      headers: {
        'Content-Type':'application/json',
        'Authorization': token
      },
      body: JSON.stringify(opts)
    }).then(() => delete_cookie('user'))

  }

  switchDisabled() {
    this.setState(
      {disabled: !this.state.disabled},
      () => this.updateSkill()
    )
  }

  createOptions(){
    return(
      [...Array(11).keys()].map(value => {
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
      <div className="card-body">
        <div className="form-inline row">
            <div
              className="custom-control custom-checkbox "
              style={{width: 80}}>
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
            <div className="level row ml-3">
              <label>Level</label>
              <select
                className="custom-select form-control mx-2"
                disabled={this.state.disabled}
                defaultValue={this.state.level}
                onChange={e => this.setState(
                  {level: e.target.value},
                  () => this.updateSkill()
                )}>
                {this.createOptions()}
              </select>
            </div>
            <div className="desire row ml-3">
              <label>Desire</label>
              <select
                className="custom-select form-control mx-2"
                disabled={this.state.disabled}
                defaultValue={this.state.desire}
                onChange={e => this.setState(
                  {desire: e.target.value},
                  () => this.updateSkill()
                )}>
                {this.createOptions()}
              </select>
            </div>
        </div>
        <div className="card-text text-muted">
          {this.props.skill.description}
        </div>
      </div>
    )
  }
}

export default Skill;
