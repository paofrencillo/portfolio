import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div>
      <h5 className="font-semibold md:text-3xl text-gray-500 text-xl">
        Hi there, I&#39;m
      </h5>
      <h1 className="font-bold md:text-6xl text-gray-800 text-3xl">
        Paolo Frencillo
      </h1>
      <h1 className="font-extrabold md:text-5xl text-yellow-600 text-2xl">
        <Typewriter
          options={{
            strings: ["Programmer.", "Web Developer.", "Tech Savvy."],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}
