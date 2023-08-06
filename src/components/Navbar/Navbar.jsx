import Brand from "../Brand/Brand";
import Links from "./Links";

export default function Navbar() {
  return (
    <div className="fixed flex justify-between items-center shadow-gray-200 bg-slate-50 shadow-sm border-b-2 py-4 px-[12vw] md:px-[16vw] w-full h-14 z-20">
      <Brand />
      <Links />
    </div>
  );
}
