import React from 'react';
import Skill from './Skill';

class Category extends React.Component {
  render() {
    return(
      <div className="category">
        <button
          className="btn btn-primary m-2"
          type="button"
          style={{width: 90}}
          data-toggle="collapse"
          data-target={`#${this.props.category.name}`}
          aria-expanded="false"
          aria-controls={this.props.category.name}>
          {this.props.category.name}
        </button>
        <div
          className="collapse"
          id={this.props.category.name}>
          {
            this.props.category.skills.map(skill => {
              return(
                <Skill
                  key={skill.id}
                  skill={skill}
                  token={this.props.token} />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Category;
