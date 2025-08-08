import Image from "next/image";
import { ArrowDownIcon } from "./icons/ArrowDown";

export const HeroSection = () => {
  return (
    <main className="pt-8 md:pt-32 mx-5 md:mx-0">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 md:mb-16">
        <div className="md:w-1/2 md:space-y-8 flex flex-col animate-fade-in-up delay-100">
          <div className="md:space-y-6">
            <div className="flex items-center gap-4 mb-1 md:mb-6 justify-center md:justify-start">
              <div className="hidden md:block w-16 h-0.5 bg-gray-800"></div>
              <span className="text-sm text-gray-500 uppercase tracking-wider">
                Hello, I'm
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight text-center md:text-left">
                <span className="">Smriti</span> <br className="md:hidden" />
                <span className="font-bold">Aryal</span>
              </h1>
            </div>
          </div>

          <div className="relative block md:hidden my-6 self-center">
            <div
              className="absolute inset-0 transform -translate-x-4 -translate-y-4"
              style={{
                background:
                  "linear-gradient(90deg, rgb(44 162 193 / 51%), rgba(230, 73, 26, 0))",
              }}
            ></div>
            <div className="relative bg-white p-6 border-2 border-gray-800">
              <Image
                src="/assets/qt.jpg"
                alt="Smriti Aryal"
                width={300}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-start my-4">
            <h2
              className="text-2xl md:text-3xl text-gray-700 font-light w-fit text-center md:text-left"
              style={{
                background:
                  "linear-gradient(90deg, rgb(44 162 193 / 51%), rgba(230, 73, 26, 0))",
              }}
            >
              Software Developer
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl text-center md:text-left">
            Passionate developer specializing in React, Next.js, TypeScript,
            Tailwind CSS and modern web technologies. I create scalable
            applications with clean code and intuitive user experiences.
          </p>
        </div>

        <div className="relative hidden md:block md:w-1/2">
          <div
            className="absolute inset-0 transform -translate-x-4 -translate-y-4"
            style={{
              background:
                "linear-gradient(90deg, rgb(44 162 193 / 51%), rgba(230, 73, 26, 0))",
            }}
          ></div>
          <div className="relative bg-white p-6 border-2 border-gray-800">
            <Image
              src="/assets/qt.jpg"
              alt="Smriti Aryal"
              width={400}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="text-gray-600 flex items-center justify-center mt-5 md:mt-0 md:justify-between">
        <span className="animate-bounce-down cursor-pointer">
          <ArrowDownIcon />
        </span>
        <div className="hidden md:flex items-center gap-10 text-sm">
          <span>2+ years of experience</span>
          <span>Based in Kathmandu, Nepal</span>
        </div>
      </div>
    </main>
  );
};
