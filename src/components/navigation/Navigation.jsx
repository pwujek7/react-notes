import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { clearLocalStorage } from '../../utilities/localStorage';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 50px;
  border: 1px solid #000;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 50px;
  border: 1px solid #000;
`;

const StyledLi = styled.li`
  margin: 10px 0;
`;

export const StyledLink = styled(NavLink)`
  font-size: 12px;
  line-height: 48px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: right;
  letter-spacing: 6px;
  opacity: 0.5;
  display: block;
  position: relative;
  transition: all ease-out 300ms;

  &:hover {
    font-size: 14px;
    opacity: 1;
  }

  &.active {
    font-size: 14px;
    opacity: 1;
  }
`;

export const StyledButton = styled.button`
  font-size: 12px;
  line-height: 48px;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: auto;
  cursor: pointer;
  transition: all ease-out 300ms;

  &:hover {
    font-size: 14px;
  }
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
            <StyledLink exact activeClassName="active" to="/">Home</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink activeClassName="active" to="/all">All</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink activeClassName="active" to="/important">Important</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink activeClassName="active" to="/finished">Finished</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink activeClassName="active" to="/expired">Expired</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink activeClassName="active" to="/add-note">Add note</StyledLink>
          </StyledLi>
        </StyledUl>
        <StyledButton type="button" onClick={this.handleClick}>Delete all notes</StyledButton>
      </StyledNav>
    );
  }
}

export default Navigation;
