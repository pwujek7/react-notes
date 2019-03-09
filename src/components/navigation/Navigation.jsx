import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { clearLocalStorage } from '../../utilities/localStorage';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 50px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 50px;
`;

const StyledLi = styled.li`
  margin: 10px 0;
`;

class Navigation extends Component {
  handleClick = () => {
    clearLocalStorage();
  }

  render() {
    return (
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <Link to="/">Home</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/all">All</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/important">Important</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/finished">Finished</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/expired">Expired</Link>
          </StyledLi>
          <StyledLi>
            <Link to="/add-note">Add note</Link>
          </StyledLi>
        </StyledUl>
        <button type="button" onClick={this.handleClick}>Delete all notes</button>
      </StyledNav>
    );
  }
}

export default Navigation;
