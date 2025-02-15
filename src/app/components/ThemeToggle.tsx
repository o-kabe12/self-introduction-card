"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // SSR時はレンダリングしない

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:opacity-70 duration-300 absolute right-4 top-1/2 transform -translate-y-1/2"
    >
      {theme === "dark" ? <Image src="/icon_light_mode.svg" alt="Light mode icon" width={24} height={24}/> : <Image src="/icon_dark_mode.svg" alt="Dark mode icon" width={24} height={24}/>}
    </button>
  );
}
