import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../../../assets/images/pao-animated.jpg";

export default function ProfilePic() {
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
    <div data-aos="fade-right" className="w-[200px] md:w-[768px] lg:w-[900px]">
      <img
        src={profilePic}
        alt="pao-profle"
        className="object-contain rounded-md shadow-md shadow-gray-500"
      />
    </div>
  );
}
