import { Container, FlexContainer } from "./styles";

import playButton from "../../assets/icons/playButton.svg";
import imageHeader from "../../assets/images/ImageHeader.svg";

export function HeroSection() {
  return (
    <Container>
      <section>
        <h1>Easily create or join a local nanny share with Hapu</h1>
        <p>
          Hapu is Airbnb for nanny share. Share your home, nanny and costs and
          create new flexible, affordable solutions in childcare.
        </p>
        <a href="/">
          <FlexContainer>
            <img src={playButton} alt="play button" loading="lazy" />
            See hapu in action (27 seconds)
          </FlexContainer>
        </a>
      </section>
      <section>
        <img
          src={imageHeader}
          alt="showing a demo congratulation message as the plataform user got a new client"
        />
      </section>
    </Container>
  );
}
