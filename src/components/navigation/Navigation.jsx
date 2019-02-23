import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
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
  </nav>
);

export default Navigation;
