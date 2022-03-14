import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 875px) {
    flex-direction: column;
  }

  input {
    width: 328px;
    margin-top: 1rem;
    margin-right: 1rem;
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
