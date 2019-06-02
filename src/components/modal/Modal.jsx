import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledFlexRow } from '../common-styled/FlexRow';
import { StyledButtonPrimary, StyledButtonSecondary } from '../common-styled/Button';

const ROOT = document.getElementById('root');

export const StyledModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(33, 33, 33, 0.33);
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.gray};
  border: 1px solid ${({ theme }) => theme.color.blueGray};
  padding: 0 25px 25px 25px;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.lightBlue};
  display: block;
  text-align: center;
  margin: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.blueGray};
`;

export const StyledModalRow = styled(StyledFlexRow)`
  justify-content: space-around;
  margin: 50px 0 0 0;
`;

export const StyledButtonCancel = styled(StyledButtonSecondary)`
  padding: 10px 20px;
`;

export const StyledButtonAccept = styled(StyledButtonPrimary)`
  padding: 10px 20px;
`;

class Modal extends Component {
  render() {
    const { isOpened, onAccept, onCancel } = this.props;

    return (
      isOpened
      && ReactDOM.createPortal(
        <StyledModalContainer>
          <StyledModal>
            <StyledTitle>Are you sure you want to delete all notes ?</StyledTitle>
            <StyledModalRow>
              <StyledButtonCancel type="button" onClick={onCancel}>Cancel</StyledButtonCancel>
              <StyledButtonAccept type="button" onClick={onAccept}>Delete</StyledButtonAccept>
            </StyledModalRow>
          </StyledModal>
        </StyledModalContainer>,
        ROOT
      )
    );
  }
}

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default Modal;
