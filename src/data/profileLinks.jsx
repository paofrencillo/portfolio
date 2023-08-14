import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function links() {
  const profileLinks = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/paofrencillo/",
      classDiv:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#0A66C2] hover:transition-colors hover:ease-in-out delay-150",
      icon: <FaLinkedinIn />,
    },
    {
      id: 2,
      link: "https://github.com/paofrencillo",
      classDiv:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#333] hover:transition-colors hover:ease-in-out delay-150",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://www.facebook.com/paopaolopaoloo/",
      classDiv:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#4267B2] hover:transition-colors hover:ease-in-out delay-150",
      icon: <FaFacebookF />,
    },
    {
      id: 4,
      link: "https://www.instagram.com/paopaolopaoloo/",
      classDiv:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#bc2a8d] hover:transition-colors hover:ease-in-out delay-150",
      icon: <FaInstagram />,
    },
  ];

  return profileLinks;
}
