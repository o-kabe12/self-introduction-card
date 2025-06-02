"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabaseClientInstance } from "../lib/supabaseClient";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isGuest, setIsGuest] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkSessionAndTheme = async () => {
      // セッション情報を取得
      const { data: { session } } = await supabaseClientInstance.auth.getSession();
      
      if (session) {
        // ログイン済みの場合はゲストモードを無効化
        sessionStorage.removeItem('guestMode');
        setIsGuest(false);
      } else {
        // ゲストモードかどうかをチェック
        const guestMode = sessionStorage.getItem('guestMode') === 'true';
        setIsGuest(guestMode);
      }

      // ダークモードの検出
      const checkDarkMode = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
      };

      // 初期チェック
      checkDarkMode();

      // MutationObserverでdarkクラスの変更を監視
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            checkDarkMode();
          }
        });
      });

      observer.observe(document.documentElement, { attributes: true });

      return () => observer.disconnect();
    };

    checkSessionAndTheme();
  }, [pathname]); // パスが変わるたびにセッションをチェック

  const handleMyPageClick = (e: React.MouseEvent) => {
    if (isGuest) {
      e.preventDefault();
      router.push('/login');
    }
  };

  const logoStyle = isDarkMode ? { filter: 'invert(1)' } : {};

  return (
    <header className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors relative">
      <nav className="flex md:justify-between gap-x-6 md:gap-x-0 items-center w-full md:w-11/12 mx-auto">
        {pathname === "/" && 
          <>
            <Link href="/" className="text-black dark:text-white">
              <div className="h-8 w-auto">
                <Image 
                  src="/images/logo.svg" 
                  alt="Jicoca" 
                  width={97} 
                  height={19} 
                  className="h-full w-auto"
                  style={logoStyle}
                />
              </div>
            </Link>
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
            <Link href="/" className="text-black dark:text-white">
              <div className="h-8 w-auto">
                <Image 
                  src="/images/logo.svg" 
                  alt="Jicoca" 
                  width={97} 
                  height={19} 
                  className="h-full w-auto"
                  style={logoStyle}
                />
              </div>
            </Link>
            <Link href="/" className="bg-blue-500 text-white p-2 rounded hover:opacity-70">← 戻る</Link>
          </>
        }
        <ThemeToggle />
      </nav>
    </header>
  );
}