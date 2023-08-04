import Brand from "./Brand";
import Links from "./Links";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center shadow-gray-200 bg-white shadow-sm py-4 px-10 fixed w-full h-14 z-10">
      <Brand />
      <Links />
    </div>
  );
}
