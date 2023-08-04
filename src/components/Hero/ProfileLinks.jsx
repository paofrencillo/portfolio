import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function ProfileLinks() {
  const profileLinks = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/paofrencillo/",
      icon: <FaLinkedinIn />,
      class:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#0A66C2] hover:transition-colors hover:ease-in-out delay-150",
    },
    {
      id: 2,
      link: "https://github.com/paopaolopaoloo",
      icon: <FaGithub />,
      class:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#333] hover:transition-colors hover:ease-in-out delay-150",
    },
    {
      id: 3,
      link: "https://www.facebook.com/paopaolopaoloo/",
      icon: <FaFacebookF />,
      class:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#4267B2] hover:transition-colors hover:ease-in-out delay-150",
    },
    {
      id: 4,
      link: "https://www.instagram.com/paopaolopaoloo/",
      icon: <FaInstagram />,
      class:
        "rounded-full shadow-xl bg-white text-md border-2 p-3 hover:bg-[#bc2a8d] hover:transition-colors hover:ease-in-out delay-150",
    },
  ];

  return (
    <div className="flex justify-start items-center gap-4">
      {profileLinks.map((plink) => {
        return (
          <a
            href={plink.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 cursor-pointer hover:text-white"
            key={plink.id}
          >
            <div className={plink.class}>{plink.icon}</div>
          </a>
        );
      })}
    </div>
  );
}
