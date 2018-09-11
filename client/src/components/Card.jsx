import React from 'react'

class Card extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div className="card user-card">
        <div className="card-body">
          <h5 className="card-title">
            Hello, {this.props.username}!
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.props.email}</h6>
        </div>
      </div>
    )
  }
}

export default Card;
