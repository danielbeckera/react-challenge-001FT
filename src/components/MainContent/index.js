import { Container, Section1, Section2, Section3, Section4 } from "./styles";

import imageSection1 from "../../assets/images/ImageSection1.svg";
import imageSection3 from "../../assets/images/ImageSection3.svg";
import { NewsletterForm } from "../NewsletterForm";

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
          <a href="/">Ready to get started?</a>
        </div>
        <div>
          <img
            src={imageSection1}
            alt="a notebook showing the platform overview"
          />
        </div>
      </Section1>
      <Section2>
        <div>
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
          <NewsletterForm />
        </div>
      </Section2>
      <Section3>
        <img src={imageSection3} alt="platform overview" />
        <div>
          <h2>Shared payments made simple</h2>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </Section3>
      <Section4>
        <h2>A framework built for the long term</h2>
        <p>
          Childcare is for the long term. And you need a framework you can count
          on that gives your share long term viability and success. That’s why
          we’ve defined Hapu around our three tribal principles; clearly defined
          process, transparency over money and equality of participation.
        </p>
        <a href="/">Read how Hapu’s tribal background defines our app</a>
      </Section4>
    </Container>
  );
}
