import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";
import Bio from "./Bio";
import Skills from "./Skills";

export default function AboutSection() {
  useEffect(() => {
    aosConfig;
  }, []);

  return (
    <div className="py-20 px-[12vw] md:px-[14vw]">
      <div
        className="w-16 h-1.5 mb-4 bg-yellow-500 rounded"
        data-aos="fade-down"
      ></div>
      <h1
        className="text-gray-100 font-bold text-xl w-fit mb-10 md:text-3xl"
        data-aos="fade-down"
      >
        About Me
      </h1>

      <Bio />
      <Skills />
    </div>
  );
}
