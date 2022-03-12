import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 6.5rem;

  @media (max-width: 850px) {
    padding: 1rem 2rem;
  }

  /* Section esquerda */
  section:nth-of-type(1) {
    max-width: 35rem;
    h1 {
      font-weight: 500;
      font-size: 40px;
      color: var(--white);
      line-height: 48px;
      letter-spacing: -1px;

      @media (max-width: 850px) {
        text-align: center;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0;
      }
    }

    p {
      padding: 2rem 0;
      line-height: 24px;
      color: var(--white);
      font-size: 18px;
      font-weight: 400;

      @media (max-width: 850px) {
        text-align: center;
        font-size: 16px;
        line-height: 28px;
      }
    }

    a {
      color: var(--white);
      text-decoration: underline;
    }

    @media (max-width: 850px) {
      width: 100%;
    }
  }

  /* Section direita */
  section:nth-of-type(2) {
    display: flex;
    justify-content: center;

    max-width: 35rem;

    margin-top: 3rem;
    margin-left: 12em;

    @media (max-width: 850px) {
      display: none;
    }
  }
`;

/* Container pra alinhamento do Play button com texto */
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1rem;
  }
`;
