import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSec() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 750,
      easing: "ease",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="py-12 min-h-screen px-[12vw] md:px-[16vw] flex flex-col justify-center">
      <h1 className="w-fit text-cyan-800 font-extrabold text-xl mb-10 md:text-2xl xl:text-4xl 2xl:text-6xl">
        About
        <span
          data-aos="fade-right"
          className="rounded mt-2 block h-1 bg-yellow-500"
        ></span>
      </h1>
      <p
        data-aos="fade-down"
        className="text-gray-600 text-justify text-lg md:text-xl xl:text-2xl 2xl:text-4xl"
      >
        I&apos;m a tech enthusiast with a passion for&nbsp;
        <span className="text-yellow-600">Python</span> programming and&nbsp;
        <span className="text-yellow-600">web development</span>. I enjoy
        crafting dynamic websites using&nbsp;
        <span className="text-yellow-600">HTML</span>,&nbsp;
        <span className="text-yellow-600">CSS</span>, and&nbsp;
        <span className="text-yellow-600">JavaScript</span>. Passionate in
        computers and technology. Eager to make a positive impact in the tech
        world, I&apos;m always exploring new possibilities and pushing the
        boundaries of what technology can achieve.&nbsp;
        <a
          href="/about"
          target="_self"
          rel="noopener noreferrer"
          className="text-cyan-600 hover:text-cyan-800 text-base md:text-lg xl:text-xl 2xl:text-2xl"
        >
          Read more →
        </a>
      </p>
    </div>
  );
}
