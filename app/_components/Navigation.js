import Image from "next/image";
import Link from "next/link";

export default function Navigation({ handleToggle, session }) {
  return (
    <nav className="z-10 text-xl">
      <ul className="mt-7 flex items-center justify-center gap-5 md:mt-0 md:flex-row md:gap-16">
        <li>
          <Link
            onClick={handleToggle}
            href="/cabins"
            className="text-slate-300 transition-colors hover:text-black"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            onClick={handleToggle}
            href="/about"
            className="text-slate-300 transition-colors hover:text-black"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              onClick={handleToggle}
              href="/account"
              className="flex flex-col-reverse items-center gap-4 text-slate-300 transition-colors hover:text-black md:flex-row"
            >
              <div className="relative">
                <Image
                  fill
                  className="hidden rounded-full object-cover md:block"
                  src={session.user.image}
                  alt={session.user.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="mt-4 md:mt-0">Guest area</span>
            </Link>
          ) : (
            <Link
              onClick={handleToggle}
              href="/account"
              className="text-slate-300 transition-colors hover:text-black"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
