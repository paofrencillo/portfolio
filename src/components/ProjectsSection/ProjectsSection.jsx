import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";
import FavProjects from "./FavProjects";

export default function ProjectsSection() {
  useEffect(() => {
    aosConfig;
  }, []);

  return (
    <div className="py-14 px-[12vw] md:px-[16vw]">
      <div
        className="w-16 h-1.5 mb-4 bg-yellow-500 rounded"
        data-aos="fade-down"
      ></div>
      <h1
        className="text-gray-100 font-bold text-xl w-fit mb-10 md:text-3xl"
        data-aos="fade-down"
      >
        My Projects
      </h1>

      <FavProjects />
    </div>
  );
}
