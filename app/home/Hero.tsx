import Link from "next/link";
import Image from "next/image";
import { AutoTypingResume } from "./AutoTypingResume";

export const Hero = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl pt-14 md:pt-20  ">
        <div className="px-8  md:px-12 lg:px-32 ">
          <div className="mb-10 text-cnter">
            <h1 className="text-3xl leading-tight tracking-tighter text-gray-800 dark:text-zinc-200 sm:text-5xl md:text-5xl lg:text-5xl">
            Level Up Your Job Hunt

            </h1>
            <h1 className="from-zinc-700  to-zinc-200 text-blue-500 dark:bg-gradient-to-t dark:bg-clip-text dark:text-transparent lg:block sm:text-5xl md:text-5xl lg:text-5xl text-3xl">
                {" "}
                Craft Resumes that win.
              </h1>
            <h2 className="mt-3 text-zinc-500 dark:text-zinc-400 md:text-md">
              Elevate your design with a handpicked
              <span className="sm:block">
                {" "}
                selection of vibrant color combinations.{" "}
              </span>
            </h2>

            <div className="mt-8  gap-6 md:flex items-baseline">
              <div className="flex h-10  items-center mb-6">
                <Link href={"/resume-builder"} className=" animate-border rounded-xl bg-white bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 bg-[length:400%_400%] p-[1.5px] [animation-duration:_6s]">
                  <span className="inline-flex rounded-[10.5px] bg-zinc-800 px-6 py-2 font-medium justify-center w-full text-zinc-300 ">
                    {" "}
                    Get Started
                  </span>
                </Link>

              </div>

              <Link
                className=" text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-orange-400 duration-300"
                href="/resume-parser"
              >
                Check your ATS score &#10137;
              </Link>
            </div>
          </div>

          <img
            src="/assets/dashboard2.png"
            alt="hero-image"
            className=" borderi border-yellow-200 dark:borderi-zinc-700 roundedi-[25px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
