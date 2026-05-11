import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import UnitsSection from "./components/UnitsSection";
import ValuesSection from "./components/ValuesSection";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <UnitsSection />
          <ValuesSection />
          <LocationSection />
          <FinalCTA />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  );
}
