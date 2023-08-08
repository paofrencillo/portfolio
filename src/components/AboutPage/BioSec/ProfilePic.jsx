import profilePic from "../../../assets/images/pao-animated.jpg";

export default function ProfilePic() {
  return (
    <div>
      <img src={profilePic} alt="pao-profle" className="object-contain" />
    </div>
  );
}
