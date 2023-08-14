export default function ResumeBtn() {
  return (
    <div>
      <a
        href="/FRENCILLO-PAOLO-RESUME.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="flex gap-2 justify-center items-center w-fit select-none rounded-lg bg-white text-gray-700 py-3 px-6 text-sm font-bold uppercase shadow-md shadow-gray-500/30 transition-all hover:shadow-lg hover:text-cyan-700 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          See my Resume
        </button>
      </a>
    </div>
  );
}
