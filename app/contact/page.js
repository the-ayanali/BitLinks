import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="bg-gray-200 min-h-[80vh] px-4 py-10 sm:px-8 md:px-12 lg:px-20">

      {/* Contact Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
        <div className="flex justify-center">
          <Image
            className="mix-blend-darken rounded-2xl w-full max-w-[500px] h-auto"
            src="/contact.avif"
            alt="contact_img"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-800 font-black">
            Contact Us
          </h1>

          <p className="px-2 sm:px-6 md:px-10 lg:px-20 font-serif text-sm sm:text-base md:text-lg">
            Thank you for visiting BitLinks! We’re here to help you make the
            most of our URL shortening service.
          </p>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">

        {/* Mobile image */}
        <div className="flex md:hidden justify-center">
          <Image
            className="mix-blend-darken rounded-2xl w-full max-w-[500px] h-auto"
            src="/support.avif"
            alt="support_img"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-800 font-black">
            Get in Touch
          </h1>

          <p className="px-2 sm:px-6 md:px-10 lg:px-20 font-serif text-sm sm:text-base md:text-lg">
            <span className="font-bold">Email:</span> For general inquiries,
            please contact us at ayaan20041017@gmail.com.
          </p>

          <p className="px-2 sm:px-6 md:px-10 lg:px-20 font-serif text-sm sm:text-base md:text-lg">
            <span className="font-bold">Support:</span> If you need help with
            using BitLinks or have a technical issue, please reach out to our
            support team at ayaan20041017@bitlinks.com.
          </p>
        </div>

        {/* Desktop image */}
        <div className="hidden md:flex justify-center">
          <Image
            className="mix-blend-darken rounded-2xl w-full max-w-[500px] h-auto"
            src="/support.avif"
            alt="support_img"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Social Media */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-10">
        <div className="flex justify-center">
          <Image
            className="mix-blend-darken rounded-2xl w-full max-w-[500px] h-auto"
            src="/social_media.avif"
            alt="social_media_img"
            width={500}
            height={500}
          />
        </div>

        <div className="flex flex-col gap-4 items-center justify-center text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-purple-800 font-black">
            Social Media
          </h1>

          <p className="px-2 sm:px-6 md:px-10 lg:px-20 font-serif text-sm sm:text-base md:text-lg">
            Follow us on social media for updates, tips, and community
            engagement.
          </p>

          <ul className="list-disc text-left font-semibold text-sm sm:text-base md:text-lg">
            <li>Github: github.com/the-ayanali</li>
            
            <li>LinkedIn: www.linkedin.com/in/the-ayanali</li>
          </ul>
        </div>
      </section>

      {/* Footer Message */}
      <div className="text-center text-base sm:text-lg md:text-2xl font-bold font-serif mt-8">
        Thank you for visiting BitLinks!
      </div>

    </div>
  )
}

export default Contact
