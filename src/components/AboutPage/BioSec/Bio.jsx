import ResumeBtn from "../../Buttons/ResumeBtn";

export default function Bio() {
  return (
    <div className="py-10">
      <div className="w-20 h-1 mb-4 bg-yellow-600 rounded"></div>
      <h1 className="text-cyan-700 font-bold text-xl w-fit mb-5 md:text-3xl">
        About Me
      </h1>
      <p className="text-sm text-gray-600 text-justify xl:text-base mb-2">
        I&apos;m a graduating student taking up Bachelor of Engineering
        Technology major in Computer Engineering Technology at TUP-Cavite.
        Throughout my time at my school, I&apos;ve acquired a diverse set of
        skills that have equipped me for real-world challenges.
      </p>
      <p className="text-sm text-gray-600 text-justify mb-5 xl:text-base">
        I&apos;m excited to embark on the next chapter of my journey, leveraging
        the skills and knowledge I&apos;ve gained to make a positive impact in
        the field of programming and web development.
      </p>
      <ResumeBtn />
    </div>
  );
}
