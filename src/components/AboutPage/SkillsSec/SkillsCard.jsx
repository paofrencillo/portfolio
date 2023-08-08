import skills from "../../../data/skills";

export default function SkillsCard() {
  const skillsList = skills();
  return (
    <>
      {skillsList.map((skill) => {
        return (
          <div
            key={skill.id}
            className="relative w-32 h-32 lg:w-44 lg:h-44 shadow-xl border-gray-100 border-2"
          >
            <div className="group p-2">
              <div className="overflow-hidden flex flex-col justify-center items-center">
                <img className="w-2/3" src={skill.img} alt={skill.name} />
                <h2 className="mt-3 text-sm font-semibold md:text-base text-center">
                  {skill.name}
                </h2>
                <div className="absolute h-full w-full bg-white flex items-center justify-center -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h2 className="uppercase text-sm font-semibold md:text-base text-center">
                    {skill.expertise}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
