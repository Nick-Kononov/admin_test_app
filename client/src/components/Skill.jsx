import React from 'react';

class Skill extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true
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
        <div className="form-inline">
          <div className="form-group">
            <div
              className="custom-control custom-checkbox"
              style={{width: 50}}>
              <input
                type="checkbox"
                className="custom-control-input form-control"
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
        </div>
        <div className="card-text text-muted">
          {this.props.skill.description}
        </div>
      </div>
    )
  }
}

export default Skill;
