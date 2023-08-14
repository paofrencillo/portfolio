import Bio from "./Bio";
import ProfilePic from "./ProfilePic";

export default function BioSec() {
  return (
    <div className="pt-20 pb-12 min-h-screen flex flex-wrap md:flex-nowrap justify-center items-center gap-10 px-[12vw] md:px-[16vw]">
      <ProfilePic />
      <Bio />
    </div>
  );
}
