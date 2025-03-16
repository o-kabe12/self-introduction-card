"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // クライアントサイドでのみ実行
    const guestMode = sessionStorage.getItem('guestMode') === 'true';
    setIsGuest(guestMode);
  }, []);

  const handleMyPageClick = (e: React.MouseEvent) => {
    if (isGuest) {
      e.preventDefault();
      router.push('/login');
    }
  };

  return (
    <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors relative">
      <nav className="flex justify-between items-center w-4/5 md:w-11/12 mx-auto">
        {pathname === "/" && 
          <>
            <h1>TOP</h1>
            <Link 
              href="/mypage/" 
              onClick={handleMyPageClick}
              className="bg-blue-500 text-white p-2 rounded hover:opacity-70 flex items-center"
            >
              {isGuest && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              )}
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