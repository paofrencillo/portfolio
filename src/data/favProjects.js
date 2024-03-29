import tzy from "../assets/images/tzy.png";
import vis from "../assets/images/vis.png";
import tks from "../assets/images/tks.png";
import pw from "../assets/images/pw.png";
import cvd from "../assets/images/cvd.png";
import fmd from "../assets/images/fmd.png";
import rml from "../assets/images/rentme.png";

export default function favProjects() {
  //
  const favProjects = [
    {
      id: 1,
      title: "Taskizy",
      pic: tzy,
      description:
        "Task management system with 'rooms' for exclusive task creation, better for team tasks.",
      tech: [
        "Django Rest Framework",
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Material Tailwind",
      ],
      githubLink: "https://github.com/paofrencillo/taskizy",
      demoLink: "https://taskizy.vercel.app",
    },
    {
      id: 2,
      title: "ValueMed Inventory System",
      pic: vis,
      description:
        "Web-based inventory system that keep tracks company's products as well as the order processing and dispatching of items.",
      tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS", "Bootstrap"],
      githubLink: "https://github.com/paofrencillo/bfc-inventory-system",
      demoLink: "https://vmginventory.000webhostapp.com/",
    },
    {
      id: 3,
      title: "RentMe Landing Page",
      pic: rml,
      description: "RentMe Landing Page for car rental services.",
      tech: ["JavaScript", "HTML", "CSS", "Sass"],
      githubLink: "https://github.com/paofrencillo/rentme-landing",
      demoLink: "https://paofrencillo.github.io/rentme-landing/",
    },
    {
      id: 4,
      title: "Tool Keeper System",
      pic: tks,
      description:
        "A web-based tool tracking system with Raspberry Pi 4 integration for the tool storages.",
      tech: [
        "Django",
        "Raspberry Pi 4 Model B",
        "JavaScript",
        "MySQL",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      githubLink: "https://github.com/paofrencillo/tool-keeper-system",
      demoLink: "#",
    },
    {
      id: 5,
      title: "Portfolio Website",
      pic: pw,
      description: "My portfolio website designed in ReactJS and TailwindCSS",
      tech: ["ReactJS", "Tailwind CSS", "JavaScript", "Vite"],
      githubLink: "https://github.com/paofrencillo/portfolio",
      demoLink: "https://paofrencillo-portfolio.vercel.app/",
    },
    {
      id: 6,
      title: "COVID VAC Distribution w/ Python",
      pic: cvd,
      description:
        "This is a Brgy. Sampaloc IV Covid Vaccine Distribution List Program made with Python and using CLI.",
      tech: ["Python"],
      githubLink: "https://github.com/paofrencillo/covid_vac_dist",
      demoLink:
        "https://drive.google.com/file/d/1YEYlWlteVMMxnid5NXyMKBybapTG5nVo/view",
    },
    {
      id: 7,
      title: "Motion Detector with openCV",
      pic: fmd,
      description:
        "Simple web app that detects motion on camera using OpenCV technology.",
      tech: [
        "OpenCV",
        "Python",
        "Flask",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      githubLink: "https://github.com/paofrencillo/flask-motion-detector",
      demoLink: "#",
    },
  ];

  return favProjects;
}
