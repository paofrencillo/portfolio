export default function Brand() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="cursor-pointer" onClick={scrollToTop}>
      <h1 className="font-brand font-extrabold text-2xl text-cyan-700">
        paoCodes.
      </h1>
    </div>
  );
}
