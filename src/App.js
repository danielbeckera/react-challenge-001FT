// Components

import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// Styles
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <ContentSection />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
