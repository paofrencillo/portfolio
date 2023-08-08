import experiences from "../../../data/experiences";

export default function ExpCard() {
  const expList = experiences();
  return (
    <>
      {expList.map((exp) => {
        return (
          <div
            key={exp.id}
            className="flex flex-col justify-center gap-4 rounded-lg shadow-lg border-2 border-gray-200"
          >
            <div className="p-5">
              <h2 className="text-gray-800 font-bold">{exp.title}</h2>
              <h3 className="text-gray-800 font-bold mb-4">{exp.company}</h3>
              <p className="text-justify w-[275px] md:w-full">{exp.desc}</p>
            </div>

            <div className="grid row-cols-12  md:grid-cols-2 gap-1">
              {exp.img.map((img) => {
                return (
                  <div key={img.id} className="h-[150px] w-full md:h-[350px]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
