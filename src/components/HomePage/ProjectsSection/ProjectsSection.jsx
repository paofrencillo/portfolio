import FavProjects from "./FavProjects";

export default function ProjectsSection() {
  return (
    <div className="bg-slate-50 shadow-2xl flex flex-wrap justify-between px-[12vw] py-16 my-48 lg:gap-44 lg:flex-nowrap md:px-[16vw] sm:gap-5">
      <h1 className="group text-cyan-800 font-bold text-base w-fit xl:text-xl">
        Projects
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-500"></span>
      </h1>
      <FavProjects />
    </div>
  );
}
