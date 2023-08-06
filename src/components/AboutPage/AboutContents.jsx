import AboutHeader from "./AboutHeader/AboutHeader";

export default function AboutContents() {
  return (
    <div className="py-20">
      <div className="bg-slate-50 flex flex-wrap justify-start items-center gap-20 py-20 px-[12vw] md:px-[16vw] relative">
        <AboutHeader />
      </div>
    </div>
  );
}
