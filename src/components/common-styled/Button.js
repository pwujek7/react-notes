import styled from 'styled-components';

export const StyledButton = styled.button`
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
