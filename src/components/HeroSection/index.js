import { useRef } from "react";

import { Container, FlexContainer } from "./styles";

import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test";

import playButton from "../../assets/icons/playButton.svg";
import imageHeader from "../../assets/images/ImageHeader.svg";

// Enables debugger on browser for easily changing between scenarios.
experimentDebugger.enable();
emitter.defineVariants("Changing hero title experiment", ["A", "B"], [50, 50]);

export function HeroSection() {
  const experimentRef = useRef();

  return (
    <Experiment ref={experimentRef} name="Changing hero title experiment">
      <Variant name="A">
        <Container>
          <section className="leftSection">
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </p>
            <a href="/">
              <FlexContainer>
                <img src={playButton} alt="play button" />
                See hapu in action (27 seconds)
              </FlexContainer>
            </a>
          </section>
          <section className="rightSection">
            <img
              src={imageHeader}
              alt="showing a congratulation demo message as the plataform user got a new client"
            />
          </section>
        </Container>
      </Variant>
      <Variant name="B">
        <Container>
          <section className="leftSection">
            <h1>Create the childcare you need at a price you can afford</h1>
            <p>
              Connect with other local families to share a nanny from as low as
              $10.00/hr each. Create your family profile today to get started.
            </p>
            <a href="/">
              <FlexContainer>
                <img src={playButton} alt="play button" />
                See hapu in action (27 seconds)
              </FlexContainer>
            </a>
          </section>
          <section className="rightSection">
            <img
              src={imageHeader}
              alt="showing a congratulation demo message as the plataform user got a new client"
            />
          </section>
        </Container>
      </Variant>
    </Experiment>
  );
}
