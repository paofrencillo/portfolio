import Navbar from "../components/Navbar/Navbar";
import HeroSec from "../components/HomePage/HeroSec/HeroSec";
import AboutSec from "../components/HomePage/AboutSec/AboutSec";
import ProjectsSec from "../components/HomePage/ProjectsSec/ProjectSec";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <AboutSec />
      <ProjectsSec />
      <Footer />
    </>
  );
}
