import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Links() {
  const links = [
    {
      id: 1,
      linkName: "Home",
      link: "/",
    },
    {
      id: 2,
      linkName: "About",
      link: "/about",
    },
    {
      id: 3,
      linkName: "Projects",
      link: "/projects",
    },
    {
      id: 4,
      linkName: "Contact",
      link: "/contact",
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
      <div className="hidden md:flex justify-end items-center gap-10">
        {links.map(function (link) {
          return (
            <div key={link.id}>
              <NavLink
                to={link.link}
                className="group cursor-pointer border-transparent text-sm"
              >
                {link.linkName}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-cyan-500"></span>
              </NavLink>
            </div>
          );
        })}
      </div>

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
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center gap-10 bg-gradient-to-b from-cyan-950 to-cyan-800 w-full h-screen">
          {links.map(function (link) {
            return (
              <div key={link.id}>
                <NavLink
                  to={link.link}
                  className="text-white cursor-pointer border-b-2 border-transparent hover:border-cyan-500 hover:transition-colors hover:ease-in-out delay-150"
                >
                  {link.linkName}
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
