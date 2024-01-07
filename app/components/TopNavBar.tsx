"use client";

import { usePathname } from "next/navigation";
import { cx } from "../lib/cx";
import Link from "next/link";
import ThemeSwitch from "./theme-toggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const TopNavBar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={cx(
        "nav sticky top-0  w-full justify-center  backdrop-blur-lg py-4",
        isHomePage && "bg-dot"
      )}
    >
      <div className="z-99 mx-auto flex w-full max-w-7xl flex-row justify-between px-6 py-2 md:items-center md:px-12 lg:px-32">
        <div className=" flex flex-row items-center justify-between">
          <Link
            className=" text-xl font-semibold  text-gray-800 dark:text-zinc-200  "
            href="/"
          >
            Swwift
            <span className="from-zinc-100 to-zinc-700  font-normal text-zinc-600  dark:bg-gradient-to-br dark:bg-clip-text dark:text-transparent ">
              {" "}
              CV
            </span>
          </Link>
        </div>

        <div className="flex gap-4 items-center ">
          <nav
            aria-label="Site Nav Bar"
            className="sm:flex items-center gap-6 text-sm md:text-md hidden"
          >
            {[
              ["/resume-builder", "Builder"],
              ["/resume-parser", "Parser"],
              ["/blogs", "Blogs"],
            ].map(([href, text]) => (
              <Link
                key={text}
                className=" text-zinc-700 dark:text-zinc-400 font-medium hover:text-orange-500 duration-300"
                href={href}
              >
                {text}
              </Link>
            ))}
          </nav>
          <ThemeSwitch />

          <Sheet >
            <SheetTrigger className="sm:hidden">
              {" "}
              <HamburgerMenuIcon className=" hover:text-orange-500 duration-300 cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <div
                aria-label="Site Nav Bar"
                className=" items-center justify-center h-full mx-auto flex flex-col gap-6 text-2xl"
              >
                {[
                  ["/resume-builder", "Builder"],
                  ["/resume-parser", "Parser"],
                  ["/blogs", "Blogs"],
                ].map(([href, text]) => (
                  <Link
                    key={text}
                    className=" text-zinc-700 dark:text-zinc-400 font-medium hover:text-orange-500 duration-300"
                    href={href}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
