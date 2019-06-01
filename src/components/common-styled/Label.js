import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: block;
  margin: 25px 0 5px 10px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.color.lightBlack};
`;
