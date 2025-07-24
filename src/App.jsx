import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import GoogleGeminiEffect from "./components/GoogleGeminiEffectDemo";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import MacbookScroll from "./components/MacbookScrollDemo";
import HeroParallax from "./components/HeroParallaxDemo";
import Pincontainer from "./components/AnimatedPinDemo";
import Intro from "./components/intro";
import ContainerScroll from "./components/HeroScrollDemo";
import Tabs from "./components/TabsDemo";
import FeatureContext from "./components/FeatureContext";
import { Routes, Route } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage";
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="pt-[4.75em] lg:pt-[5.25rem] overflow-hidden">
              <Header />
              <Intro />
              <FeatureContext />
              <Pincontainer />
              <ContainerScroll />
              <Roadmap />
              <Hero />
              <Collaboration />
              <Tabs />
              <MacbookScroll />
              <HeroParallax />
              <GoogleGeminiEffect />
              <Footer />
            </div>
          }
        />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
      <ButtonGradient />
      <Analytics />
    </>
  );
};

export default App;
