import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactSec() {
  return (
    <div className="bg-white pt-16 px-[12vw] md:px-[16vw]">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl text-cyan-700 font-extrabold md:text-3xl">
          Contact Me
        </h1>
        <h3 className="text-sm text-cyan-900 mb-10 md:text-base">
          Any questions? Just write me a message!
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-md shadow-md ">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
