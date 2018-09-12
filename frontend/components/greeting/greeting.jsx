import React from 'react';
import {Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.logout();
  }
  render () {
    if (this.props.currentUser) {
      return(
      <header className="greeting-container">
        <img src={window.flagURL} />
        <h1>Welcome {this.props.currentUser.username} </h1>
        <button onClick={this.handleClick}> Leave </button>
      </header>);
    } else {
      return(
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
