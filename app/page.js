import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-200">
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[91vh]">
        
        {/* Left Content */}
        <div className="flex flex-col gap-3 items-center justify-center px-6 sm:px-10 md:px-12 lg:px-20 py-12 md:py-0 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-black font-serif">
            "Smarter Links for a Faster Web"
          </p>

          <p className="font-serif font-semibold text-base sm:text-lg lg:text-xl text-center max-w-2xl">
            Tired of long and messy links? Our URL shortener helps you
            convert lengthy URLs into short, easy-to-share links in just
            seconds. Whether you're sharing on social media, in emails, or
            anywhere else, our tool makes your links cleaner and more
            user-friendly. Simply paste your long URL, click shorten, and
            you're ready to go!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/shorten">
              <button className="w-32 bg-black shadow-lg shadow-gray-900 rounded-lg px-4 py-2 font-bold font-serif text-white hover:bg-gray-800 transition">
                Try Now
              </button>
            </Link>

            <Link href="https://github.com/the-ayanali">
              <button className="w-32 bg-black shadow-lg shadow-gray-900 rounded-lg px-4 py-2 font-bold font-serif text-white hover:bg-gray-800 transition">
                Github
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-auto min-h-[350px]">
          <Image
            src="/vector1.jpg"
            alt="URL shortener illustration"
            fill
            priority
            className="object-cover md:object-contain mix-blend-darken rounded-2xl"
          />
        </div>

      </section>
    </main>
  );
}

