import React from 'react';
import styled from 'styled-components';

export const StyledOuterContainer = styled.div`
  position: relative;
  height: 100%;
`;

export const StyledInnerContainer = styled.div`
  width: 450px;
  height: 200px;
  background-color: #f5f5f5;
  border: 1px solid #e8eaf6;
  padding: 0 25px 25px 25px;
  box-shadow: 3px 3px 3px 0px rgba(224,224,224,1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledTitle = styled.h1`
  color: #7986cb;
  display: block;
  text-align: center;
  margin: 10px 0;
  border-bottom: 1px solid #e8eaf6;
`;

const Home = () => (
  <StyledOuterContainer>
    <StyledInnerContainer>
      <StyledTitle>ReactNotes</StyledTitle>
    </StyledInnerContainer>
  </StyledOuterContainer>
);

export default Home;
