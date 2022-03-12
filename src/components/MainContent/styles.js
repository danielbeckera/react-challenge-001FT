import styled from "styled-components";

export const Container = styled.div`
  margin-top: 7rem;
`;

export const Section1 = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;

  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;

    @media (max-width: 855px) {
      align-items: center;
    }

    a {
      align-self: flex-start;
      @media (max-width: 855px) {
        align-self: center;
      }
    }
  }

  h2 {
    margin-bottom: 2rem;
    color: var(--gray-24);
    font-size: 28px;
    font-weight: 500;

    @media (max-width: 855px) {
      text-align: center;
    }
  }

  p {
    margin-bottom: 1rem;
    max-width: 29rem;
    font-weight: 400;
    line-height: 28px;
    font-size: 16px;

    @media (max-width: 855px) {
      text-align: center;
      max-width: 21rem;
    }
  }

  .getStarted {
    text-align: center;
  }

  a {
    line-height: 24px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: underline;
    color: var(--secondary);
  }

  /* Div da imagem */
  div:nth-of-type(2) {
    display: flex;
    justify-content: center;
  }

  img {
    height: 392px;
    width: 520px;

    @media (max-width: 855px) {
      width: 300px;
      height: 250px;
    }
  }

  @media (max-width: 855px) {
    flex-direction: column-reverse;
  }
`;

export const Section2 = styled.section`
  h3 {
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
