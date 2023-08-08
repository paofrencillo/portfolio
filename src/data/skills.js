import pythonImg from "../assets/images/python.png";
import jsImg from "../assets/images/js.png";
import phpImg from "../assets/images/php.png";
import htmlImg from "../assets/images/html.png";
import cssImg from "../assets/images/css.png";
import djangoImg from "../assets/images/django.png";
import mysqlImg from "../assets/images/mysql.png";
import bootstrapImg from "../assets/images/bootstrap.png";
import tailwindImg from "../assets/images/tailwind.png";
import gitImg from "../assets/images/git.png";

export default function skills() {
  const skillsList = [
    {
      id: 1,
      name: "Python",
      img: pythonImg,
      expertise: "proficient",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 2,
      name: "JavaScript",
      img: jsImg,
      expertise: "competent",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 3,
      name: "PHP",
      img: phpImg,
      expertise: "novice",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 4,
      name: "HTML",
      img: htmlImg,
      expertise: "expert",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 5,
      name: "CSS",
      img: cssImg,
      expertise: "competent",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 6,
      name: "Django",
      img: djangoImg,
      expertise: "proficient",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 7,
      name: "MySQL",
      img: mysqlImg,
      expertise: "competent",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 8,
      name: "Bootstrap",
      img: bootstrapImg,
      expertise: "proficient",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 9,
      name: "Tailwind CSS",
      img: tailwindImg,
      expertise: "advance beginner",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
    {
      id: 10,
      name: "Git",
      img: gitImg,
      expertise: "competent",
      classDiv:
        "relative bg-white rounded-xl p-4 hover:bg-[gray] hover:transition-colors hover:ease-in-out delay-150 md:text-base",
    },
  ];

  return skillsList;
}
