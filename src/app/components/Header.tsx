"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors relative">
      <nav className="flex justify-between items-center w-4/5 md:w-11/12 mx-auto">
        {pathname === "/" && 
          <>
            <h1>Home</h1>
            <Link href="/mypage/" className="bg-blue-500 text-white p-2 rounded hover:opacity-70">
              マイページへ
            </Link>
          </>
        }
        {pathname === "/mypage" && 
          <>
            <h1>マイページ</h1>
            <Link href="/" className="bg-blue-500 text-white p-2 rounded hover:opacity-70">← 戻る</Link>
          </>
        }
        <ThemeToggle />
      </nav>
    </header>
  );
}