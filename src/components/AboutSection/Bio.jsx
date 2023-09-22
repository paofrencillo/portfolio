import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";

export default function Bio() {
  useEffect(() => {
    aosConfig;
  }, []);

  return (
    <div className="mb-24" data-aos="fade-right">
      <p className="text-gray-200 text-justify leading-loose xl:text-[22px] mb-4">
        I&apos;m a graduate student with a degree of Bachelor of Engineering
        Technology major in Computer Engineering Technology at TUP-Cavite.
        Throughout my time at my school, I&apos;ve acquired a diverse set of
        skills that have equipped me for real-world challenges.
      </p>
      <p className="text-gray-200 text-justify leading-loose xl:text-[22px]">
        I&apos;m excited to embark on the next chapter of my journey, leveraging
        the skills and knowledge I&apos;ve gained to make a positive impact in
        the field of programming and web development.
      </p>
    </div>
  );
}
