import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { StyledButtonPrimary } from '../common-styled/Button';
import Modal from '../modal/Modal';

import { clearLocalStorage } from '../../utilities/localStorage';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.color.gray};
  padding: 50px 0;
  border-right: 1px solid ${({ theme }) => theme.color.blueGray};
`;

const StyledUl = styled.ul`
  list-style-type: none;
  margin-bottom: 50px;
`;

const StyledLi = styled.li`
`;

export const StyledLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.color.lightBlack};
  font-size: ${({ theme }) => theme.font.size.m};
  line-height: 48px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 6px;
  transition: all ease-out .5s;

  &:hover {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.blueGray};
  }

  &.active {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.blueGray};
  }
`;

export const StyledNavButton = styled(StyledButtonPrimary)`
  font-size: ${({ theme }) => theme.font.size.m};
  line-height: 48px; 
  margin-top: auto;
  cursor: pointer;
`;

class Navigation extends Component {
  state = {
    isModalOpened: false
  }

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpened: !prevState.isModalOpened }));
  }

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
        <Modal
          isOpened={this.state.isModalOpened}
          onAccept={this.handleClick}
          onCancel={this.toggleModal}
        />
        <StyledNavButton type="button" onClick={this.toggleModal}>Delete all notes</StyledNavButton>
      </StyledNav>
    );
  }
}

export default Navigation;
