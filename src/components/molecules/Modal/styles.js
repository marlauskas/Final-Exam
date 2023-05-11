import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledModal = styled.div`
  width: min(80%, 600px);
  padding: 1em;
  border-radius: 0.375em;
  border: 5px solid #393646;
  background-color: #88a096;
`;

export const StyledCloseButtonContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 2em;

  i {
    color: #f4eee0;
    border-radius: 100%;
    cursor: pointer;
  }
`;
