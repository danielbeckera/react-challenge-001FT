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
        transition: filter 0.2s ease;

        &:hover {
          filter: brightness(0.3);
        }

        &:nth-child(2),
        &:nth-child(4) {
          margin-left: 2rem;
          margin-right: 1rem;
        }

        @media (max-width: 875px) {
          margin-bottom: 1rem;
        }
      }
    }

    /* Segunda div (div dos icones de redes sociais) */
    .icons {
      img {
        margin-right: 1rem;
        @media (max-width: 875px) {
          margin-top: 1rem;
        }
      }
    }
  }

  p {
    margin-right: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    opacity: 0.6;
    @media (max-width: 875px) {
      margin-right: 0rem;
    }
  }
`;

export const Divider = styled.div`
  margin: 0 auto;
  width: 784px;
  border: 2px solid #dfdfdf;
  margin-top: 1rem;
  display: none;
  @media (max-width: 875px) {
    width: 328px;
    display: block;
  }
`;
