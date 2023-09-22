import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <>
      <h5 className="font-semibold md:text-3xl text-gray-300 text-xl">
        Hi there, I&#39;m
      </h5>
      <h1 className="font-extrabold md:text-6xl text-gray-100 text-3xl">
        Paolo Frencillo
      </h1>
      <h1 className="font-extrabold md:text-5xl text-yellow-500 text-2xl">
        <Typewriter
          options={{
            strings: ["Programmer.", "Web Developer.", "Tech Savvy."],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </>
  );
}
