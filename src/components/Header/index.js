import logo from "../../assets/images/logo.svg";
import { HeroSection } from "../HeroSection";
import { Container, GradiantLayer } from "./styles";

export function Header() {
  return (
    <GradiantLayer>
      <Container>
        <header>
          <img src={logo} alt="Hapu logo" className="logo" />
          <nav>
            <a href="/">Create Your Nanny Share</a>
            <a href="/">Browse Shares</a>
            <a href="/">Our Story</a>
          </nav>
          <nav>
            <button type="button">Become a Nanny Share Host</button>
            <a href="/">Sign In</a>
          </nav>
        </header>
        <HeroSection />
      </Container>
    </GradiantLayer>
  );
}
