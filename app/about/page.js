import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="text-lg">
      <div className="mb-14">
        <h1 className="mb-10 text-3xl font-medium text-accent-400 xl:text-4xl">
          Welcome to The Wild Oasis
        </h1>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[2fr_1fr] xl:grid-rows-1 xl:gap-10">
          <div className="space-y-8">
            <p>
              Where nature&rsquo;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&rsquo;s not just
              about the luxury cabins. It&rsquo;s about the experience of
              reconnecting with nature and enjoying simple pleasures with
              family.
            </p>
            <p>
              Our {cabins.length} luxury cabins provide a cozy base, but the
              real freedom and peace you&rsquo;ll find in the surrounding
              mountains. Wander through lush forests, breathe in the fresh air,
              and watch the stars twinkle above from the warmth of a campfire or
              your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by
              nature&rsquo;s splendor. It&rsquo;s a place to slow down, relax,
              and feel the joy of being together in a beautiful setting.
            </p>
          </div>

          <div className="relative mx-auto h-80 w-80">
            <Image
              src={image1}
              alt="Family sitting around a fire pit in front of cabin"
              placeholder="blur"
              className="object-cover"
              fill
              quality={80}
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-10 text-3xl font-medium text-accent-400 xl:text-4xl">
          Managed by our family since 1962
        </h2>

        <div className="grid grid-cols-1 grid-rows-[auto_auto] gap-4 xl:grid-cols-[1fr_2fr] xl:grid-rows-1 xl:gap-10">
          <div className="relative mx-auto h-80 w-80">
            <Image
              fill
              className="object-cover"
              src="/about-2.jpg"
              alt="Family that manages The Wild Oasis"
            />
          </div>

          <div className="space-y-8">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&rsquo;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here,
              you&rsquo;re not just a guest; you&rsquo;re part of our extended
              family. So join us at The Wild Oasis soon, where tradition meets
              tranquility, and every visit is like coming home.
            </p>

            <div>
              <Link
                href="/cabins"
                className="mt-4 inline-block bg-accent-500 px-4 py-2 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600 md:px-8 md:py-5"
              >
                Explore our luxury cabins
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
