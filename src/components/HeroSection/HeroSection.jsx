import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Avatar from "./Avatar";
import Profile from "./Profile";
import ProfileLinks from "./ProfileLinks";
import ProjectsBtn from "../Buttons/ProjectsBtn";
import ResumeBtn from "../Buttons/ResumeBtn";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 750,
      easing: "ease",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="py-10 flex flex-wrap justify-center items-center gap-5 md:gap-20 px-[12vw] md:px-[14vw]">
      <div data-aos="fade-right">
        <Avatar />
      </div>
      <div data-aos="fade-left">
        <Profile />
        <ProfileLinks />
        <div className="flex gap-4 mt-7">
          <ProjectsBtn />
          <ResumeBtn />
        </div>
      </div>
    </div>
  );
}
