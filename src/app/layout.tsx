import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jicoca - エンジニア向け自己紹介カードアプリ",
  description: "Jicocaはエンジニア向け自己紹介カードアプリです。エンジニアの交流のきっかけになれば嬉しいです。",
  keywords: ["エンジニア", "自己紹介", "アプリ"],
  openGraph: {
    title: "Jicoca - エンジニア向け自己紹介カードアプリ",
    description: "Jicocaはエンジニア向け自己紹介カードアプリです。エンジニアの交流のきっかけになれば嬉しいです。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jicoca - エンジニア向け自己紹介カードアプリ",
    description: "Jicocaはエンジニア向け自己紹介カードアプリです。エンジニアの交流のきっかけになれば嬉しいです。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
