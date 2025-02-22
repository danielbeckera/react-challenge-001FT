import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  border-bottom: 1px solid #dfdfdf;
  margin-bottom: 3rem;

  section {
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
      color: var(--gray-00);
      font-weight: 500;

      @media (max-width: 875px) {
        margin-top: 1rem;
        font-size: 14px;
      }
    }

    @media (max-width: 875px) {
      flex-direction: column;
    }
  }
`;
