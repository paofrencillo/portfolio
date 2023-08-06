import Avatar from "./Avatar";
import Profile from "./Profile";
import ProfileLinks from "./ProfileLinks";
import ProjectsBtn from "./ProjectsBtn";
import ResumeBtn from "./ResumeBtn";

export default function HeroSec() {
  return (
    <div className="py-20 min-h-[100vh] flex flex-wrap justify-center items-center gap-20 px-[12vw] md:px-[16vw] relative">
      <Avatar />
      <div>
        <div>
          <Profile />
          <ProfileLinks />
        </div>
        <div className="flex gap-4 mt-7">
          <ProjectsBtn />
          <ResumeBtn />
        </div>
      </div>
    </div>
  );
}
