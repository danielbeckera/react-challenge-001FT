import styled from "styled-components";

export const Container = styled.div`
  margin-top: 7rem;
`;

export const Divider = styled.div`
  margin: 0 auto;
  width: 784px;
  border: 2px solid #dfdfdf;
  margin-bottom: 6rem;
  margin-top: 6rem;
  @media (max-width: 855px) {
    width: 328px;
  }
`;

export const Section1 = styled.section`
  display: flex;
  justify-content: center;

  /* Primeira div do section */
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

    p {
      max-width: 444px;
      @media (max-width: 855px) {
        max-width: 328px;
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
      font-size: 22px;
    }
  }

  p {
    margin-bottom: 1rem;
    max-width: 29rem;
    font-weight: 400;
    line-height: 28px;
    font-size: 16px;
    color: var(--gray-24);

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

  /* Segunda div da section (imagem) */
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
  div:nth-of-type(1) {
    @media (max-width: 855px) {
      max-width: 22rem;
      margin: 0 auto;
    }
  }

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    color: var(--gray-24);
    line-height: 32px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--gray-24);
    @media (max-width: 855px) {
      font-size: 16px;
    }
  }
`;

export const Section3 = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;

  @media (max-width: 855px) {
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-right: 1.5rem;
    height: 336px;
    width: 456px;

    @media (max-width: 855px) {
      width: 300px;
      height: 250px;
      margin-bottom: 2rem;
    }
  }

  /* Segunda div (div do texto) */
  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;

    margin-left: 2rem;
    @media (max-width: 855px) {
      align-items: center;
      margin-left: 0;
    }
  }

  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: var(--gray-24);
    margin-bottom: 2.5rem;
    @media (max-width: 855px) {
      text-align: center;
      font-size: 22px;
      max-width: 226px;
    }
  }

  p {
    color: var(--gray-24);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    max-width: 484px;
    @media (max-width: 855px) {
      text-align: center;
      max-width: 328px;
    }
  }

  a {
    font-size: 16px;
    display: inline-block;
    margin-top: 2.5rem;
    font-weight: 500;
    text-decoration: underline;
    color: var(--secondary);
    @media (max-width: 855px) {
      text-align: center;
    }
  }
`;

export const Section4 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: var(--gray-24);
    margin-bottom: 2.5rem;
    text-align: center;
    @media (max-width: 855px) {
      font-size: 22px;
      max-width: 226px;
    }
  }

  p {
    color: var(--gray-24);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    max-width: 784px;
    @media (max-width: 855px) {
      max-width: 328px;
    }
  }

  a {
    font-size: 16px;
    display: inline-block;
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    font-weight: 500;
    text-decoration: underline;
    color: var(--secondary);
    text-align: center;
    @media (max-width: 855px) {
      max-width: 280px;
    }
  }

  img {
    height: 392px;
    width: 984px;

    @media (max-width: 855px) {
      display: none;
    }
  }
`;

export const Section5 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
  }

  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: var(--gray-24);
    margin-bottom: 2.5rem;
    text-align: center;
    margin-top: 2rem;
    @media (max-width: 855px) {
      font-size: 22px;
      max-width: 300px;
    }
  }

  p {
    color: var(--gray-24);
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    max-width: 784px;
    margin-bottom: 10rem;
    @media (max-width: 855px) {
      max-width: 328px;
    }
  }
`;

export const Section6 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 32px;
    color: var(--gray-24);
    margin-bottom: 1rem;
    text-align: center;
    margin-top: 2rem;
    @media (max-width: 855px) {
      font-size: 22px;
      max-width: 300px;
      margin-bottom: 0;
    }
  }

  p {
    color: var(--gray-24);
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    max-width: 342px;
    margin-bottom: 1rem;
    @media (max-width: 855px) {
      max-width: 304px;
      font-size: 16px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 4px;
    border: 0;
    background-color: var(--secondary);
    height: 68px;
    width: 304px;
    margin-bottom: 2rem;
    margin-top: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .buttonHelperText {
      font-size: 12px;
    }

    p {
      font-size: 16px;
      color: var(--white);
      font-weight: 400;
      margin-bottom: 0;
    }
  }
  a {
    font-size: 16px;
    display: inline-block;
    margin-bottom: 5rem;
    font-weight: 500;
    text-decoration: underline;
    color: var(--secondary);
    text-align: center;
    @media (max-width: 855px) {
      max-width: 280px;
    }
  }
`;
