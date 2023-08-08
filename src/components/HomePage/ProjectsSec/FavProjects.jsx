import MoreProjectsBtn from "../../Buttons/MoreProjectsBtn";

export default function FavProjects() {
  const favProjects = [
    {
      id: 1,
      title: "ValueMed Inventory System",
      pic: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vitae veniam repudiandae at saepe atque sunt nulla consequatur culpa.",
    },
    {
      id: 2,
      title: "Tool Keeper System",
      pic: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vitae veniam repudiandae at saepe atque sunt nulla consequatur culpa.",
    },
    {
      id: 3,
      title: "Motion Detector with openCV",
      pic: "",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vitae veniam repudiandae at saepe atque sunt nulla consequatur culpa.",
    },
  ];
  return (
    <div className="flex flex-col gap-10">
      {favProjects.map((favProject) => {
        return (
          <div
            key={favProject.id}
            className="shadow-xl bg-slate-100 w-full rounded-md flex gap-5 p-5"
          >
            <div className="w-1/3 bg-gray-800">{favProject.pic}</div>
            <div className="w-2/3 text-base xl:text-lg">
              <h3 className="text-yellow-600 font-semibold mb-3">
                {favProject.title}
              </h3>
              <p className="text-gray-600 text-justify">
                {favProject.description}
              </p>
            </div>
          </div>
        );
      })}
      <MoreProjectsBtn />
    </div>
  );
}
