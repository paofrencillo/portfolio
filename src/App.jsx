import { BiHomeAlt2 } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

export default function App() {
  const [showMenus, setShowMenus] = useState(false);

  function handleHamburgerOnClick() {
    setShowMenus(!showMenus);
  }

  return (
    <div className="overflow-x-hidden">
      <div className="z-30 fixed top-0 left-0 text-2xl text-gray-200">
        <div
          className="p-4 cursor-pointer transition delay-150 duration-300 ease-in-out"
          onClick={handleHamburgerOnClick}
        >
          <GiHamburgerMenu />
        </div>
        {showMenus && (
          <div className="fixed bottom-0 w-full h-fit justify-around left-0 flex gap-8  bg-sky-900 p-4 sm:bottom-1/2  sm:w-fit  sm:translate-y-1/2 sm:flex-col  sm:rounded-r-xl">
            <a href="#hero">
              <div
                id="hero-link"
                className="flex flex-col items-center hover:text-yellow-500 cursor-pointer transition delay-150 duration-300 ease-in-out"
              >
                <BiHomeAlt2 />
                <div className="text-xs sm:hidden">Home</div>
              </div>
            </a>
            <a href="#about">
              <div
                id="about-link"
                className="flex flex-col items-center hover:text-yellow-500 cursor-pointer transition delay-150 duration-300 ease-in-out"
              >
                <IoPersonOutline />
                <div className="text-xs sm:hidden">About</div>
              </div>
            </a>
            <a href="#projects">
              <div
                id="projects-link"
                className="flex flex-col items-center hover:text-yellow-500 cursor-pointer transition delay-150 duration-300 ease-in-out"
              >
                <LiaProjectDiagramSolid />
                <div className="text-xs sm:hidden">Projects</div>
              </div>
            </a>

            <a href="#contact">
              <div
                id="contact-link"
                className="flex flex-col items-center hover:text-yellow-500 cursor-pointer transition delay-150 duration-300 ease-in-out"
              >
                <BsTelephone />
                <div className="text-xs sm:hidden">Contact</div>
              </div>
            </a>
          </div>
        )}
      </div>
      <div
        id="hero"
        className="min-h-screen grid place-content-center bg-sky-700"
      >
        <HeroSection />
      </div>
      <div id="about" className="min-h-screen bg-sky-700">
        <AboutSection />
      </div>
      <div id="projects" className="min-h-screen bg-sky-700">
        <ProjectsSection />
      </div>
      <div id="contact" className="min-h-screen bg-sky-700">
        <ContactSection />
      </div>
      <div className=" bg-sky-700">
        <Footer />
      </div>
    </div>
  );
}
