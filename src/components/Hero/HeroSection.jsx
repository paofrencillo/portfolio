import Avatar from "./Avatar";
import Profile from "./Profile";
import ProfileLinks from "./ProfileLinks";
import ProjectsBtn from "./ProjectsBtn";
import ResumeBtn from "./ResumeBtn";

export default function HeroSection() {
  return (
    <div className="bg-[url('/src/assets/images/patterns.png')] p-14 min-h-[100vh] bg-center flex flex-wrap justify-center items-center gap-10">
      <div className="mt-10">
        <Avatar />
      </div>
      <div>
        <div className="mt-10">
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
