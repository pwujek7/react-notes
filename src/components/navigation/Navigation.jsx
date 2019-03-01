import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { clearLocalStorage } from '../../utilities/localStorage';

class Navigation extends Component {
  handleClick = () => {
    clearLocalStorage();
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all">All</Link>
          </li>
          <li>
            <Link to="/important">Important</Link>
          </li>
          <li>
            <Link to="/finished">Finished</Link>
          </li>
          <li>
            <Link to="/expired">Expired</Link>
          </li>
          <li>
            <Link to="/add-note">Add note</Link>
          </li>
        </ul>
        <button type="button" onClick={this.handleClick}>Delete all notes</button>
      </nav>
    );
  }
}

export default Navigation;
