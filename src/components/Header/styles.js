import styled from "styled-components";
import headerBackgroundImage from "../../assets/images/header-background.svg";

export const GradiantLayer = styled.div`
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(
    314.72deg,
    #c86dd7 -1.5%,
    #7e49c3 39.43%,
    #5912ac 86.02%
  );
  background-repeat: no-repeat;
`;

export const Container = styled.header`
  width: 100%;
  height: 40rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${headerBackgroundImage});

  header {
    display: flex;
    align-items: center;

    /* All header links */
    a {
      font-size: 14px;
      color: var(--white);
      margin-left: 2.5rem;
      transition: filter 0.2s ease;
      &:hover {
        filter: brightness(0.8);
      }
    }

    /* Logo image */
    .logo {
      margin-left: 1.25rem;
    }

    /* First nav section */
    nav:nth-of-type(1) {
      @media (max-width: 850px) {
        display: none;
      }
    }

    /* Become a Nanny/Sign In button section */
    nav:nth-of-type(2) {
      margin-left: auto;

      /* Sign In Button */
      a {
        margin-right: 2rem;
        @media (max-width: 850px) {
          display: none;
        }
      }

      /* Become a Nanny Share Host Button */
      button {
        @media (max-width: 850px) {
          margin-right: 1em;
        }
        width: 234px;
        color: var(--white);
        background-color: var(--primary);
        border: 0;
        border-radius: 0.25rem;
        height: 2.5rem;
        transition: filter 0.2s ease;
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
