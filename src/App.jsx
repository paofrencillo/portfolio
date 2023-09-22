import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <div className="min-h-screen bg-sky-700">
        <HeroSection />
      </div>
      <div className="min-h-screen bg-sky-700">
        <AboutSection />
      </div>
      <div className="min-h-screen bg-sky-700">
        <ProjectsSection />
      </div>
      <div className="min-h-screen grid place-content-center bg-sky-700">
        <ContactSection />
      </div>
      <div className=" bg-sky-700">
        <Footer />
      </div>
    </div>
  );
}
