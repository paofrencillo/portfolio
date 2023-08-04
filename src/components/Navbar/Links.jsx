import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Links() {
  const links = [
    {
      id: 1,
      link: "About",
    },
    {
      id: 2,
      link: "Skills",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  const [nav, setNav] = useState(false);
  const [clientWidth, setClientWidth] = useState(true);

  // eslint-disable-next-line no-unused-vars
  window.addEventListener("resize", function (event) {
    if (document.body.offsetWidth <= 768) {
      setNav(false);
      setClientWidth(true);
    } else {
      setClientWidth(false);
    }
  });

  return (
    <div>
      {/* navbar */}
      <ul className="hidden md:flex justify-end items-center gap-10">
        {links.map(function (link) {
          return (
            <li
              key={link.id}
              className="cursor-pointer border-b-2 border-transparent text-sm hover:border-cyan-500 hover:transition-colors hover:ease-in-out delay-150"
            >
              {link.link}
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer relative z-10 md:hidden"
      >
        {nav ? (
          <FaTimes size={25} className="text-white" />
        ) : (
          <FaBars size={25} className="text-cyan-700" />
        )}
      </div>

      {/* navbar responsive */}
      {/* if nav responsive is true and clientWidth <= 768 */}
      {nav && clientWidth && (
        <ul className="absolute top-0 left-0 flex flex-col justify-center items-center gap-10 bg-gradient-to-b from-cyan-950 to-cyan-800 w-full h-screen">
          {links.map(function (link) {
            return (
              <li
                key={link.id}
                className="text-white cursor-pointer border-b-2 border-transparent hover:border-cyan-500 hover:transition-colors hover:ease-in-out delay-150"
              >
                {link.link}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
