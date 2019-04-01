import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { StyledButton } from '../common-styled/Button';

import { clearLocalStorage } from '../../utilities/localStorage';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: #f5f5f5;
  padding: 50px 0;
  border-right: 1px solid #e8eaf6;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 50px;
`;

const StyledLi = styled.li`
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: #BDBDBD;
  font-size: 16px;
  line-height: 48px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 6px;
  transition: all ease-out .5s;

  &:hover {
    color: #212121;
    background-color: #e8eaf6;
  }

  &.active {
    color: #212121;
    background-color: #e8eaf6;
  }
`;

export const StyledNavButton = styled(StyledButton)`
  font-size: 16px;
  line-height: 48px; 
  margin-top: auto;
  cursor: pointer;
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
        <StyledNavButton type="button" onClick={this.handleClick}>Delete all notes</StyledNavButton>
      </StyledNav>
    );
  }
}

export default Navigation;
