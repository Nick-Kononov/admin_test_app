import React from 'react';

class Alert extends React.Component {

  render() {
    return(
      <div
        className="alert alert-primary">
        {this.props.message}
      </div>
    )
  }
}

export default Alert;
