"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabaseClientInstance } from "../lib/supabaseClient";
import Layout from "../components/Layout";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); // ログイン or 新規登録の切り替え
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (isLogin) {
      // ✅ ログイン処理
      const { error } = await supabaseClientInstance.auth.signInWithPassword({ email, password });

      if (error) {
        setError(error.message);
      } else {
        // ログイン成功時にゲストモードのフラグをクリア
        sessionStorage.removeItem('guestMode');
        router.push("/mypage"); // ログイン成功時にマイページへ遷移
      }
    } else {
      // ✅ 新規登録処理
      const { error } = await supabaseClientInstance.auth.signUp({ email, password });

      if (error) {
        setError(error.message);
      } else {
        alert("確認メールを送信しました！メールを確認してください。");
      }
    }

    setLoading(false);
  };

  // ゲストとして閲覧する処理
  const handleGuestAccess = () => {
    // ゲストモードのフラグをセッションストレージに保存
    sessionStorage.setItem('guestMode', 'true');
    router.push("/"); // TOPページへ遷移
  };

  // ログインページのロゴは常に白色で表示（グラデーション背景上）

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 flex min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
            <div className="flex justify-center mb-2">
              <div className="h-8 w-auto text-white">
                <Image 
                  src="/images/logo.svg" 
                  alt="Jicoca" 
                  width={97} 
                  height={19} 
                  className="h-full w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-white">{isLogin ? "ログイン" : "新規登録"}</h2>
          </div>
          
          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">メールアドレス</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">パスワード</label>
                <input
                  type="password"
                  placeholder="8文字以上のパスワード"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-md"
                >
                  {loading ? "処理中..." : isLogin ? "ログイン" : "新規登録"}
                </button>
              </div>
              
              <div className="text-center pt-2">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {isLogin ? "アカウントがないですか？" : "すでにアカウントをお持ちですか？"}{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium hover:underline"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "新規登録はこちら" : "ログインはこちら"}
                  </button>
                </p>
              </div>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleGuestAccess}
                className="w-full px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                ゲストとして閲覧する
              </button>
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                ※ゲストモードではTOPページのみ閲覧できます
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}