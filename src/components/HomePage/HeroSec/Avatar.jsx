import avatar from "../../../assets/images/pao-avatar.jpg";

export default function Avatar() {
  return (
    <div className="gradient-border w-60 md:w-75 xl:w-96">
      <img
        src={avatar}
        alt="pao-avatar"
        className="rounded-full border-2 border-white"
      />
    </div>
  );
}
