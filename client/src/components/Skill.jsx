import React from 'react';

class Skill extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.setDefaultState()
  }

  setDefaultState(){
    console.log(this.props.skill);
    if (this.props.skill.active) {
      return {
        disabled: true,
        active: true,
        level: this.props.skill.level,
        desire: this.props.skill.desire
      }
    } else {
      return {
        disabled: true,
        active: false,
        level: 0,
        desire: 0
      }
    }
  }

  switchDisabled() {
    this.setState({disabled: !this.state.disabled})
  }

  createOptions(){
    return(
      [...Array(11).keys()].map(level => {
        return(
          <option key={level} value={level}>{level}</option>
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
                checked={this.state.added}
                id={`customCheck${this.props.skill.id}`}
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
                disabled={this.state.disabled}>
                {this.createOptions()}
              </select>
            </div>
            <div className="desire row ml-3">
              <label>Desire</label>
              <select
                className="custom-select form-control mx-2"
                disabled={this.state.disabled}>
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
