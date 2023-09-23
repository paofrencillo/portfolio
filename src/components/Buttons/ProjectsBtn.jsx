export default function ProjectsBtn() {
  return (
    <>
      <a href="#projects">
        <button
          className="flex gap-2 justify-center items-center w-fit select-none rounded-lg bg-cyan-500 py-3 px-6 text-sm font-bold uppercase text-white shadow-md shadow-cyan-500/30 transition-all hover:shadow-lg  hover:bg-cyan-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          My Projects
        </button>
      </a>
    </>
  );
}
