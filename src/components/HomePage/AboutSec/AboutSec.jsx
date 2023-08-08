import ShortDesc from "./ShortDesc";

export default function AboutSec() {
  return (
    <div className="bg-slate-50 flex flex-wrap shadow-2xl px-[12vw] py-16 mb-24 md:gap-48 md:flex-nowrap md:px-[16vw] sm:gap-5">
      <h1 className="group text-cyan-800 font-bold text-base md:text-lg xl:text-xl">
        About
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-yellow-500"></span>
      </h1>
      <ShortDesc />
    </div>
  );
}
