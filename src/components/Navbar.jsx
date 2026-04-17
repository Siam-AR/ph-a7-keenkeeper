"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {

  const pathname = usePathname();

  const getClass = (path) =>
    pathname === path
      ? "btn btn-sm bg-[#244D3F] text-white border-none"
      : "btn btn-ghost btn-sm text-gray-500 hover:scale-110 transition";

  return (
    <div className="navbar bg-base-500 px-6">

      {/* Left side */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold text-[#08172c]">
          Keen<span className="text-[#244D3F] font-semibold">Keeper</span>
        </Link>
      </div>

      {/* Right side */}
      <div className="flex gap-2">

        <Link href="/home" className={getClass("/home")}>
          <AiOutlineHome className="text-lg" />
          Home
        </Link>

        <Link href="/timeLine" className={getClass("/timeLine")}>
          <IoTimeOutline className="text-lg" />
          Timeline
        </Link>

        <Link href="/stats" className={getClass("/stats")}>
          <TfiStatsUp className="text-lg" />
          Stats
        </Link>

      </div>

    </div>
  );
};

export default Navbar;