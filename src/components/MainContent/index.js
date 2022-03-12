import { Container, Section1 } from "./styles";

import imageSection1 from "../../assets/images/ImageSection1.svg";

export function MainContent() {
  return (
    <Container>
      <Section1>
        <div>
          <h2>
            Share your home,
            <br /> nanny and costs
          </h2>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <a href="/">Hapu means tribe</a> and it’s our foundational 3
            tribal principles that empowers you to create and manage your own
            tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
          <a className="getStarted" href="/">
            Ready to get started?
          </a>
        </div>
        <div>
          <img
            src={imageSection1}
            alt="Notebook with a babysitter location and cost per week"
            loading="lazy"
            className="mf-img-size"
          />
        </div>
      </Section1>
    </Container>
  );
}
