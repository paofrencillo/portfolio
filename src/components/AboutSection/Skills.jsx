import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";
import skills from "../../data/skills";

export default function Skills() {
  useEffect(() => {
    aosConfig;
  }, []);

  const skillsList = skills();

  return (
    <>
      <h3
        className="text-center text-2xl font-semibold text-gray-200 mb-6"
        data-aos="fade-up"
      >
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-8 justify-center" data-aos="fade-left">
        {skillsList.map((skill) => {
          return (
            <div
              key={skill.id}
              className="relative w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-md shadow-lg shadow-sky-900 border-gray-100 border-2 bg-gray-100"
            >
              <div className="group p-2">
                <div className="overflow-hidden flex flex-col justify-center items-center">
                  <img className="w-2/3" src={skill.img} alt={skill.name} />
                  <h2 className="mt-3 text-xs md:text-base font-semibold text-center">
                    {skill.name}
                  </h2>
                  <div className="absolute rounded-md h-full w-full bg-white flex items-center justify-center -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h2 className="uppercase text-sm font-semibold lg:text-base text-center text-cyan-500">
                      {skill.expertise}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
