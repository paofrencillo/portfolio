import { MdMap, MdPhone, MdEmail } from "react-icons/md";
import progImg from "../../assets/images/prog.jpg";

export default function ContactDetails() {
  return (
    <div className="relative w-full">
      <div className="rounded-l-md w-full h-full bg-gray-900">
        <div className="p-6">
          <h4 className="text-white text-2xl font-bold mb-2">
            Contact Information
          </h4>
          <p className="text-white text-base font-extralight">
            Fill up the form and I respond to you as soon as possible.
          </p>
          <div className="text-white my-16 break-all">
            <p className="flex items-center mb-10 gap-4">
              <MdMap className="text-lg text-yellow-600" />
              Sampaloc IV, Dasmariñas City, Cavite, PH
            </p>
            <p className="flex items-center whitespace-pre-wrap mb-10 gap-4">
              <MdPhone className="text-lg text-yellow-600" />
              +63 998-9029155
            </p>
            <p className="flex items-center mb-10 gap-4">
              <MdEmail className="text-lg text-yellow-600" />
              paolofrencillo07@gmail.com
            </p>
          </div>
          <img
            src={progImg}
            alt="progImg"
            className="absolute top-0 left-0 w-full h-full rounded-md grayscale opacity-10 "
          />
        </div>
      </div>
    </div>
  );
}
