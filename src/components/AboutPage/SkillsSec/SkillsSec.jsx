import SkillsCard from "./SkillsCard";

export default function SkillsSec() {
  return (
    <div className="my-22 shadow-md">
      <div className="bg-slate-50 w-full shadow-md justify-center items-center py-10 px-[12vw] md:px-[16vw]">
        <h1 className="group w-fit text-cyan-700 text-lg md:text-2xl font-bold">
          Skills
          <span>
            <div className="rounded max-w-0 transition-all duration-500 h-1 mb-4 group-hover:bg-yellow-600 group-hover:max-w-full"></div>
          </span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10 py-6">
          <SkillsCard />
        </div>
      </div>
    </div>
  );
}
