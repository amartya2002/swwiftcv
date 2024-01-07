"use client";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Wait until mounted to avoid initial mismatch
  if (!mounted) return null;

  return (
    <button
      className=" cursor-pointer border-none text-xl outline-none duration-300 hover:scale-110 hover:text-orange-400"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <SunIcon
          className="hover:animate-spin active:animate-ping  "
          height={20}
          width={20}
        />
      ) : (
        <MoonIcon height={17} width={17} className="active:animate-ping" />
      )}
    </button>
  );
}