import React from 'react';
import Skill from './Skill';

class Category extends React.Component {
  render() {
    return(
      <div className="category">
        <button
          className="btn btn-primary my-3"
          type="button"
          data-toggle="collapse"
          data-target={`#${this.props.category.name}`}
          aria-expanded="false"
          aria-controls={this.props.category.name}>
          {this.props.category.name}
        </button>
        <div
          className="collapse cat-skills-list"
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
