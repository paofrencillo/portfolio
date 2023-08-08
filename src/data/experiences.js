import s1 from "../assets/images/sit1.jpg";
import s2 from "../assets/images/sit2.jpg";
import s3 from "../assets/images/sit3.jpg";
import s4 from "../assets/images/sit4.jpeg";
import t1 from "../assets/images/thesis1.jpg";
import t2 from "../assets/images/thesis2.jpeg";
import t3 from "../assets/images/thesis3.jpg";
import t4 from "../assets/images/thesis4.jpg";

export default function experiences() {
  const expList = [
    {
      id: 1,
      title: "IT Intern",
      company: "ValueMed Generics Pharmacy",
      desc: "As an IT Intern at ValueMed generics Pharmacy, I learned about the pharmaceutical product delivery process and the infrastructure that supports it. The CEO need a web application that keeps track of their goods inventory. We developed a web-based inventory system using PHP as the backend and MySQL as the database. It was a fantastic experience working on the system with my coding partner and co-interns. So far, the executives have loved it and have given us their approval for the application.",
      img: [
        { id: 1, alt: "s1", src: s1 },
        { id: 2, alt: "s2", src: s2 },
        { id: 3, alt: "s3", src: s3 },
        { id: 4, alt: "s4", src: s4 },
      ],
      classDiv: "",
    },
    {
      id: 2,
      title: "Programmer",
      company: "TUP - Cavite",
      desc: "I learned a lot about programming and electronics over my four years at TUP - Cavite. I used this to construct projects that improve my technological capabilities and expertise. Though programming is difficult to master at first, I enjoyed it as I gained more understanding. For our thesis, we created a tool keeper system that tracks who borrows a specific tool and a device built with Raspberry Pi that automatically accesses a tool storage upon certain user input from the system.",
      img: [
        { id: 1, alt: "t1", src: t1 },
        { id: 2, alt: "t2", src: t2 },
        { id: 3, alt: "t3", src: t3 },
        { id: 4, alt: "t4", src: t4 },
      ],
      classDiv: "",
    },
  ];

  return expList;
}
