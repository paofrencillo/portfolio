import avatar from "../assets/images/pao-animated.jpg";

export default function ProfilePic() {
  return (
    <div className="rounded-3xl w-40">
      <img
        src={avatar}
        alt="pao-avatar"
        className="rounded-3xl border-4 border-yellow-500"
      />
    </div>
  );
}
