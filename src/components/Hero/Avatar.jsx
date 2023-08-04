import avatar from "../../assets/images/pao-avatar.jpg";

export default function Avatar() {
  return (
    <div className="gradient-border rounded w-60 md:w-72">
      <img
        src={avatar}
        alt="pao-avatar"
        className="rounded-full border-2 border-white"
      />
    </div>
  );
}