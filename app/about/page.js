import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-6 md:py-10">
      {/* Hero / About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 font-extrabold font-serif text-center md:text-left mb-2">
            About BitLinks
          </h1>

          {/* Mission */}
          <div className="bg-purple-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Our Mission
            </h3>

            <p className="font-serif mt-3 text-base sm:text-lg lg:text-xl leading-relaxed">
              At BitLinks, our mission is to simplify your online experience
              by providing quick, easy, and efficient URL shortening services.
              We believe that sharing links should be seamless, regardless of
              where you are on the internet.
            </p>
          </div>

          {/* Who We Are */}
          <div className="bg-purple-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Who We Are
            </h3>

            <p className="font-serif mt-3 text-base sm:text-lg lg:text-xl leading-relaxed">
              BitLinks is a dedicated team of tech enthusiasts passionate
              about streamlining the digital landscape. Founded in 2025, we
              set out to create a user-friendly platform that caters to
              businesses, influencers, and everyday users who need to share
              links without hassle.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-purple-600 text-white rounded-3xl p-5 sm:p-6 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold">
              What We Do
            </h3>

            <p className="font-serif mt-3 text-base sm:text-lg lg:text-xl leading-relaxed">
              Our core service revolves around link shortening. With BitLinks,
              you can:
            </p>

            <ul className="list-disc pl-6 sm:pl-8 mt-3 space-y-3">
              <li>
                <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Shorten URLs:
                </span>
                <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                  Turn long and cumbersome URLs into short, manageable links
                  that are easy to share.
                </p>
              </li>

              <li>
                <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Track Clicks:
                </span>
                <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                  Gain insights into how many times your links have been
                  clicked, enabling you to measure engagement and effectiveness.
                </p>
              </li>

              <li>
                <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Custom Links:
                </span>
                <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                  Personalize your shortened links with custom aliases to
                  reflect your brand or content.
                </p>
              </li>

              <li>
                <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Secure Links:
                </span>
                <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                  Enjoy peace of mind with our secure link management system.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-full md:min-h-[700px] rounded-3xl overflow-hidden">
          <Image
            src="/About.jpg"
            alt="About BitLinks"
            fill
            priority
            className="object-cover mix-blend-darken"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto mt-10 md:mt-16">

        {/* Why Choose */}
        <div className="bg-green-400 rounded-3xl p-5 sm:p-6 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose BitLinks?
          </h3>

          <ul className="list-disc pl-6 sm:pl-8 space-y-4">
            <li>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                User-Friendly Interface:
              </span>
              <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                Our easy-to-navigate platform is designed for users of all
                skill levels, making link shortening a breeze.
              </p>
            </li>

            <li>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Fast and Reliable:
              </span>
              <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                We prioritize speed and reliability, ensuring that your links
                are generated and redirected without delay.
              </p>
            </li>

            <li>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Privacy Protection:
              </span>
              <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                We respect your privacy and ensure your data remains secure. We
                don't collect unnecessary personal information.
              </p>
            </li>

            <li>
              <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
                Supportive Community:
              </span>
              <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
                Our commitment to our users extends beyond our platform. We're
                here to help with prompt customer support and a community of
                like-minded individuals.
              </p>
            </li>
          </ul>
        </div>

        {/* Join + Contact */}
        <div className="flex flex-col gap-6">
          
          {/* Join Us */}
          <div className="bg-green-400 rounded-3xl p-5 sm:p-6 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Join Us
            </h3>

            <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
              Whether you're a business owner looking to streamline your
              marketing efforts or an individual wanting to share links
              effortlessly, BitLinks is here for you. Join the thousands of
              users who trust us to manage their online links and experience
              the difference.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-green-400 rounded-3xl p-5 sm:p-6 shadow-md">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Contact Us
            </h3>

            <p className="font-serif text-base sm:text-lg lg:text-xl leading-relaxed">
              Have questions or feedback? We'd love to hear from you! Reach out
              to us at{" "}
              <a
                href="mailto:BitLinks123@gmail.com"
                className="text-blue-700 underline break-words"
              >
                ayaan20041017@gmail.com
              </a>{" "}
              or visit our{" "}
              <a
                href="/contact"
                className="text-blue-700 underline"
              >
                Contact Page
              </a>
              .
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
