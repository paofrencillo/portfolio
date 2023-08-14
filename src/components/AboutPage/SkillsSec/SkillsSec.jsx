import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillsCard from "./SkillsCard";

export default function SkillsSec() {
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
    <div className="flex flex-col justify-center py-12 min-h-screen px-[12vw] md:px-[16vw]">
      <h1 className="w-fit text-cyan-700 text-lg md:text-2xl font-bold mb-10">
        Skills
        <span
          data-aos="fade-right"
          className="rounded mt-2 block h-1 bg-yellow-500"
        ></span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-10 py-6">
        <SkillsCard />
      </div>
    </div>
  );
}
