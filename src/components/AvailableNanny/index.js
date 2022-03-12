import profileImage from "../../assets/images/ProfileImage.svg";
import { Container } from "./styles";

export default function AvailableNanny() {
  return (
    <>
      <Container>
        <section>
          <img src={profileImage} alt="nanny avaialble for hiring" />
          <div className="nannyAvailable">
            <a href="/">Sarah’s day care available now in North Sydney</a>
          </div>
          <p>
            <strong>Wednesday, Thursday, Friday - 7:30 - 5:30</strong>
          </p>
        </section>
      </Container>
    </>
  );
}
