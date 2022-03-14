import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* Primeira div (div do navbar) */
  div:nth-of-type(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 3rem;

    @media (max-width: 875px) {
      flex-direction: column;
      margin-left: 0;
    }

    img {
      @media (max-width: 875px) {
        margin-bottom: 2rem;
      }
    }
    .navBar {
      display: flex;
      justify-content: center;

      @media (max-width: 875px) {
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 250px;
      }

      a {
        font-size: 14px;
        font-weight: 500;

        @media (max-width: 875px) {
          margin-bottom: 1rem;
          margin-left: 1rem;
        }
      }
    }

    /* Segunda div (div dos icones de redes sociais) */
    div:nth-of-type(2) {
      img {
        margin-right: 1rem;
      }
    }
  }

  p {
    margin-right: 0rem;
    margin-top: 4rem;
    margin-bottom: 3rem;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    opacity: 0.6;
    @media (max-width: 875px) {
      margin-right: 0;
    }
  }
`;
