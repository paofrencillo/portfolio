import Bio from "./Bio";
import ProfilePic from "./ProfilePic";

export default function BioSec() {
  return (
    <div className="py-32">
      <div className="bg-slate-50 w-full shadow-md flex flex-wrap justify-center items-center  px-[12vw] md:px-[16vw] gap-[5%]">
        <div className="lg:w-[30%]">
          <ProfilePic />
        </div>

        <div className="lg:w-[65%]">
          <Bio />
        </div>
      </div>
    </div>
  );
}
