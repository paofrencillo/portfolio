import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FavProjects from "./FavProjects";

export default function ProjectsSec() {
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
    <div className="py-12 min-h-screen flex flex-col justify-center px-[12vw] md:px-[16vw]">
      <h1 className="w-fit text-cyan-800 font-extrabold text-xl mb-10 md:text-2xl xl:text-4xl 2xl:text-6xl">
        Projects
        <span
          data-aos="fade-right"
          className="rounded mt-2 block h-1 bg-yellow-500"
        ></span>
      </h1>
      <FavProjects />
    </div>
  );
}
