import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
      />

      <div className="relative z-10 translate-y-1/2 transform text-center md:transform-none">
        <h1 className="mb-10 text-4xl font-normal tracking-tight text-primary-50 md:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600 md:px-8"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}
