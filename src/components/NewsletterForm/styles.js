import styled, { keyframes } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 875px) {
    flex-direction: column;
  }

  input {
    width: 328px;
    margin-top: 1rem;
    padding: 0 1.5rem;
    height: 48px;
    border-radius: 4px;
    border: 1px solid var(--gray-88);
    font-weight: 400;
    font-size: 1rem;
    @media (max-width: 875px) {
      margin-right: 0;
    }
  }

  button[type="submit"] {
    width: 96px;
    padding: 0 1.5rem;
    height: 48px;
    background: var(--primary);
    color: #ffffff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1rem;
    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 875px) {
      width: 328px;
    }
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorMsg = styled.p`
  color: red !important;
  font-size: 14px !important;
`;

export const SuccessMsg = styled.p`
  color: green !important;
  font-size: 16px !important;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
