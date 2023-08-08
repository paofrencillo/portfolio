import { FaAngleDoubleRight } from "react-icons/fa";

export default function MoreProjectsBtn() {
  return (
    <>
      <button className="text-slate-800 rounded-md shadow-lg py-2 bg-cyan-300 font-bold flex justify-center items-center gap-2 hover:bg-cyan-400 hover:text-slate-100 hover:transition-colors hover:ease-in-out delay-150">
        View More
        <FaAngleDoubleRight />
      </button>
    </>
  );
}
