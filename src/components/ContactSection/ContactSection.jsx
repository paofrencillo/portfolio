import { useEffect } from "react";
import aosConfig from "../../utils/aosConfig";
import ContactDetails from "./ContactDetails";

import ContactForm from "./ContactForm";

export default function ContactSection() {
  useEffect(() => {
    aosConfig;
  }, []);

  return (
    <div className="py-20 px-[12vw] md:px-[14vw]">
      <h1
        data-aos="fade-down"
        className="text-center text-xl text-gray-100 font-extrabold md:text-3xl"
      >
        Contact Me
      </h1>
      <h3
        data-aos="fade-down"
        className="text-sm text-center text-gray-300 mb-10 md:text-base"
      >
        Any questions? Just write me a message!
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md bg-white ">
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
