import React from 'react';

class Alert extends React.Component {

  render() {
    if (this.props.message){
      return(
        <div
          className="alert alert-danger my-3">
          {this.props.message}
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }
}

export default Alert;
