import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  section {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;

    .nannyAvailable {
      text-align: center;
      max-width: 75%;
    }

    img {
      margin-right: 1.5rem;
    }

    a {
      margin-right: 0.4rem;
      line-height: 24px;
      font-size: 16px;
      font-weight: 500;
      text-decoration: underline;
      color: var(--secondary);
    }

    p {
      text-align: center;

      @media (max-width: 855px) {
        margin-top: 1rem;
      }
    }

    @media (max-width: 855px) {
      flex-direction: column;
    }
  }
`;
