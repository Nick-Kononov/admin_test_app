import React from 'react'
import Form from './Form';
import Navbar from './Navbar';

class UserCard extends React.Component {

  render() {
    return(
      <div className="user">
        <Navbar />
        <Form />
      </div>
    )
  }
}

export default UserCard;
