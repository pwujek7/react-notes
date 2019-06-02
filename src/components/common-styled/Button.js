import styled from 'styled-components';

export const StyledButtonPrimary = styled.button`
  color: ${({ theme }) => theme.color.blueGray};
  background-color: ${({ theme }) => theme.color.lightBlue};
  border: none;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all ease-out .5s;

  &:hover {
    background-color: ${({ theme }) => theme.color.blue};
  }
`;

export const StyledButtonSecondary = styled.button`
  color: ${({ theme }) => theme.color.lightBlue};
  background-color: ${({ theme }) => theme.color.gray};
  border: 1px solid ${({ theme }) => theme.color.lightBlue};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all ease-out .5s;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.blue};
  }
`;
