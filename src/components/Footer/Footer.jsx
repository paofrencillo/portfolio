import Copyright from "./Copyright";
import Brand from "../Brand/Brand";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="flex justify-between items-center flex-col-reverse gap-5 shadow-gray-200 bg-slate-50 shadow-sm border-t-2 py-12 px-[12vw] md:flex-row md:px-[16vw] w-full">
      <Copyright />
      <Brand />
      <Socials />
    </div>
  );
}
