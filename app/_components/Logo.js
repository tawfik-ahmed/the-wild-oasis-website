import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo({ handleToggle, noTitle = false }) {
  return (
    <Link
      onClick={handleToggle}
      href="/"
      className="z-10 flex items-center gap-8 md:mb-0 md:flex-row"
    >
      <Image
        src={logo}
        height="50"
        width="50"
        alt="The Wild Oasis logo"
        className={`${noTitle && "md:hidden"}`}
      />
      {!noTitle && (
        <span className="text-2xl font-semibold text-slate-200 transition-colors hover:text-black">
          The Wild Oasis
        </span>
      )}
    </Link>
  );
}

export default Logo;
