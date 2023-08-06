import { FaRegCopyright } from "react-icons/fa";

export default function Copyright() {
  return (
    <div className="flex items-center gap-1 text-xs md:text-base text-slate-600">
      <FaRegCopyright />
      <span>Paolo Frencillo. 2023</span>
    </div>
  );
}
