import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";
import favProjects from "../../data/favProjects";
import MoreProjectsBtn from "../Buttons/MoreProjectsBtn";
import { HiExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

export default function FavProjects() {
  const favs = favProjects();

  useEffect(() => {
    aosConfig;
  }, []);

  return (
    <>
      <div
        className="flex flex-wrap gap-8 mb-16 justify-center"
        data-aos="fade-up"
      >
        {favs.map((fav) => {
          return (
            <div
              key={fav.id}
              className="group relative shadow-2xl bg-gray-100 shadow-sky-900 w-[350px] rounded-md p-5 pb-20"
            >
              <div className="transition-opacity ease-in-out duration-500 opacity-100 group-hover:opacity-0">
                <div className="bg-gray-800 rounded-lg w-full mb-4">
                  <img
                    src={fav.pic}
                    alt={fav.title}
                    className="rounded-lg w-full h-[150px]"
                  />
                </div>
                <h3 className="text-base xl:text-xl text-yellow-600 text-center font-bold mb-3">
                  {fav.title}
                </h3>
              </div>

              <div className="transition-opacity ease-in duration-500 opacity-0 group-hover:opacity-100 absolute top-0 left-0 z-10 text-base xl:text-xl p-5">
                <p className="text-gray-800 text-justify text-sm leading-8">
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
              <div className="rounded-b-md absolute bottom-0 left-0 w-full flex justify-around h-14 bg-yellow-100 text-3xl text-yellow-500 font-bold">
                <a
                  href={fav.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition delay-150 duration-300 ease-in-out rounded-bl-md grid place-content-center hover:bg-yellow-500 w-full h-full hover:text-gray-200 cursor-pointer"
                >
                  <HiExternalLink />
                </a>
                <a
                  href={fav.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition delay-150 duration-300 ease-in-out rounded-br-md grid place-content-center hover:bg-yellow-500 w-full h-full hover:text-gray-200 cursor-pointer"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {/* IF THERE ARE More projects then uncomment this */}
      {/* <div data-aos="fade-up">
        <MoreProjectsBtn />
      </div> */}
    </>
  );
}
