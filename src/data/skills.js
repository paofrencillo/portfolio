import pythonImg from "../assets/images/python.png";
import jsImg from "../assets/images/js.png";
import phpImg from "../assets/images/php.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import djangoImg from "../assets/images/django.png";
import mysqlImg from "../assets/images/mysql.png";
import bootstrapImg from "../assets/images/bootstrap.png";
import tailwindImg from "../assets/images/tailwind.png";
import reactImg from "../assets/images/react.png";
import gitImg from "../assets/images/git.png";

export default function skills() {
  const skillsList = [
    {
      id: 1,
      name: "Python",
      img: pythonImg,
      expertise: "proficient",
    },
    {
      id: 2,
      name: "JavaScript",
      img: jsImg,
      expertise: "competent",
    },
    {
      id: 3,
      name: "PHP",
      img: phpImg,
      expertise: "novice",
    },
    {
      id: 4,
      name: "HTML",
      img: htmlImg,
      expertise: "expert",
    },
    {
      id: 5,
      name: "CSS",
      img: cssImg,
      expertise: "competent",
    },
    {
      id: 6,
      name: "Django",
      img: djangoImg,
      expertise: "proficient",
    },
    {
      id: 7,
      name: "MySQL",
      img: mysqlImg,
      expertise: "competent",
    },
    {
      id: 8,
      name: "Bootstrap",
      img: bootstrapImg,
      expertise: "proficient",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      img: tailwindImg,
      expertise: "advance beginner",
    },
    {
      id: 10,
      name: "ReactJS",
      img: reactImg,
      expertise: "advance beginner",
    },
    {
      id: 11,
      name: "Git",
      img: gitImg,
      expertise: "competent",
    },
  ];

  return skillsList;
}
