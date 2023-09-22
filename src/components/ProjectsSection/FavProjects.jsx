import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";
import favProjects from "../../data/favProjects";
import MoreProjectsBtn from "../Buttons/MoreProjectsBtn";
import s1 from "../../assets/images/sit1.jpg";

export default function FavProjects() {
  const favs = favProjects();

  useEffect(() => {
    aosConfig;
  }, []);

  return (
    <div className="flex flex-col gap-14">
      {favs.map((fav) => {
        return (
          <div
            key={fav.id}
            data-aos="fade-up"
            className="shadow-2xl bg-gray-100 border-2 border-slate-200  shadow-sky-900 w-full rounded-md flex flex-wrap gap-10 p-5 lg:flex-nowrap"
          >
            <div className="bg-gray-800 rounded-lg w-full md:w-[1000px] md:h-[300px]">
              <img
                src={s1}
                alt={fav.title}
                className="rounded-lg w-full h-[200px] md:w-[750px] md:h-[300px]"
              />
            </div>
            <div className="text-base xl:text-xl">
              <h3 className="text-yellow-600 font-bold mb-3">{fav.title}</h3>
              <p className="text-gray-800 text-justify leading-8">
                {fav.description}&nbsp;
              </p>
              <div className="flex flex-wrap gap-3 my-3">
                {fav.tech.map((tech, index) => {
                  return (
                    <div
                      key={index}
                      className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-cyan-100 text-cyan-800"
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <div data-aos="fade-up">
        <MoreProjectsBtn />
      </div>
    </div>
  );
}
