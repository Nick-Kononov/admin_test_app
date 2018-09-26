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
      "delete": this.state.disabled
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
      <div className="card-body">
        <form className="form-group">
          <div className="form-inline row">
            <div
              className="custom-control custom-checkbox">
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
            <div className="level ml-3">
              <label
                htmlFor={`customLevelSelect${this.props.skill.id}`}>Level</label>
              <select
                className="custom-select form-control mx-2"
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
            <div className="desire ml-3">
              <label
                htmlFor={`customDesireSelect${this.props.skill.id}`}
                >Desire</label>
              <select
                className="custom-select form-control mx-2"
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
        </form>
        <div className="card-text text-muted">
          {this.props.skill.description}
        </div>
        <hr className="my-1"/>
      </div>
    )
  }
}

export default connect(null, { updateUser })(Skill);
