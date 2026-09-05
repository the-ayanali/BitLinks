"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
        setUrl("");
        setShorturl("");
        console.log(result);
        alert(result.message);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-8">
      {/* Heading */}
      <div className="text-black text-center font-bold font-serif pt-8 sm:pt-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight">
          BitLinks - "Smaller links, bigger impact."
        </h1>
      </div>

      {/* Main Card */}
      <div
        className="
          w-full
          max-w-lg
          mx-auto
          bg-gray-200
          my-10 sm:my-16
          p-5 sm:p-8
          rounded-xl sm:rounded-2xl
          flex flex-col
          gap-4
          font-serif
        "
      >
        <h2 className="font-bold text-xl sm:text-2xl">
          Generate your short URLs
        </h2>

        {/* Form */}
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={url}
            className="
              w-full
              bg-white
              p-3 sm:p-4
              text-sm sm:text-base
              rounded-xl
              mt-2
              focus:outline-none
              focus:ring-2
              focus:ring-gray-600
            "
            placeholder="Enter your URL"
            onChange={(e) => setUrl(e.target.value)}
          />

          <input
            type="text"
            value={shorturl}
            className="
              w-full
              bg-white
              p-3 sm:p-4
              text-sm sm:text-base
              rounded-xl
              mt-2
              focus:outline-none
              focus:ring-2
              focus:ring-gray-600
            "
            placeholder="Enter your preferred short URL text"
            onChange={(e) => setShorturl(e.target.value)}
          />

          <button
            onClick={generate}
            className="
              w-full
              bg-black
              text-white
              rounded-xl
              mt-2
              p-3
              sm:p-4
              text-base
              sm:text-xl
              font-semibold
              transition
              hover:bg-gray-800
              active:scale-[0.98]
            "
          >
            Generate short URL
          </button>
        </div>

        {/* Generated URL */}
        {generated && (
          <div className="mt-3 w-full overflow-hidden">
            <span className="block font-bold text-lg sm:text-xl mb-1">
              Your Link:
            </span>

            <code className="block w-full break-all text-sm sm:text-base bg-white p-3 rounded-lg">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={generated}
                className="text-blue-600 hover:underline"
              >
                {generated}
              </Link>
            </code>
          </div>
        )}

        {/* Image */}
        <div className="relative w-full mt-2">
          <Image
            className="w-full h-auto mix-blend-darken rounded-2xl"
            alt="An image"
            src="/vector3.png"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default Shorten;
