import me from "../../assets/me.png";

export default function Avatar() {
  return (
    <div className="bg-yellow-500 rounded-3xl w-60 md:w-75 xl:w-96">
      <img src={me} alt="pao-avatar" className="w-full h-full" />
    </div>
  );
}
