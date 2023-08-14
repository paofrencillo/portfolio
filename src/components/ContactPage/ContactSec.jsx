import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactSec() {
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
    <div className="min-h-screen flex flex-col justify-center items-center pt-20 px-[12vw] md:px-[16vw] overflow-hidden">
      <h1
        data-aos="fade-down"
        className="text-xl text-cyan-700 font-extrabold md:text-3xl"
      >
        Contact Me
      </h1>
      <h3
        data-aos="fade-down"
        className="text-sm text-cyan-900 mb-10 md:text-base"
      >
        Any questions? Just write me a message!
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md ">
        <div data-aos="fade-right">
          <ContactDetails />
        </div>
        <div data-aos="fade-left">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
