import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* Primeira div (div do navbar) */
  div:nth-of-type(1) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 855px) {
      flex-direction: column;
    }

    img {
      @media (max-width: 855px) {
        margin-bottom: 2rem;
      }
    }
    .navBar {
      display: flex;
      justify-content: center;

      @media (max-width: 855px) {
        flex-direction: row;
        flex-wrap: wrap;
      }

      a {
        font-size: 14px;
        font-weight: 500;
        margin-left: 3.5rem;

        @media (max-width: 855px) {
          margin-bottom: 1rem;
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
    margin-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    opacity: 0.6;
    @media (max-width: 855px) {
      margin-right: 0;
    }
  }
`;
