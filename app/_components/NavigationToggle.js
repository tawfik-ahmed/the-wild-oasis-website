"use client";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { useState } from "react";
import { Bars3Icon, Bars3CenterLeftIcon } from "@heroicons/react/24/solid";

function NavToggle({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <span
        onClick={handleToggle}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 top-0 z-30 h-screen w-screen bg-black/20 md:hidden`}
      />
      <button
        title="Menu"
        onClick={handleToggle}
        className="relative z-50 flex size-12 cursor-pointer select-none items-center justify-center rounded-full p-2 text-slate-200 shadow-lg md:hidden"
      >
        {isOpen ? <Bars3CenterLeftIcon /> : <Bars3Icon />}
      </button>

      <div
        className={`${
          isOpen ? "top-0" : "-top-full"
        } absolute right-0 z-40 mx-auto flex h-fit w-screen max-w-7xl flex-col items-center justify-between bg-accent-500 py-8 shadow-lg transition-all md:relative md:h-auto md:w-auto md:flex-row md:bg-transparent md:p-0 md:shadow-none`}
      >
        <Logo handleToggle={handleToggle} />
        <Navigation handleToggle={handleToggle} session={session} />
      </div>
    </>
  );
}

export default NavToggle;
