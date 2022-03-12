import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 855px) {
    flex-direction: column;
  }

  input {
    width: 328px;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: 0 1.5rem;
    height: 48px;
    border-radius: 4px;
    border: 0;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
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
    font-weight: 600;
    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 855px) {
      width: 328px;
    }
  }
`;
