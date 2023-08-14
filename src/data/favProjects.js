import s1 from "../assets/images/sit1.jpg";

export default function favProjects() {
  const favProjects = [
    {
      id: 1,
      title: "ValueMed Inventory System",
      pic: s1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vitae veniam repudiandae at saepe atque sunt nulla consequatur culpa.",
      tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap"],
    },
    {
      id: 2,
      title: "Tool Keeper System",
      pic: s1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vitae veniam repudiandae at saepe atque sunt nulla consequatur culpa.",
      tech: [
        "Python",
        "Django",
        "Raspberry Pi 4 Model B",
        "JavaScript",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
    },
    {
      id: 3,
      title: "Motion Detector with openCV",
      pic: s1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti eius vitae veniam repudiandae at saepe atque sunt nulla consequatur culpa.",
      tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Bootstrap"],
    },
  ];

  return favProjects;
}
