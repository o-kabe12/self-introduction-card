"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { supabaseClientInstance } from "./lib/supabaseClient";
import "./globals.css";
import Layout from "./components/Layout";

// ユーザーデータの型定義
interface UserData {
  id: string;
  name: string;
  job: string;
  language: string;
  hobby: string;
  bio: string;
  x_link: string;
  github_link: string;
  icon_url: string;
}

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserData[]>([]);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      // セッション情報を取得
      const { data: { session } } = await supabaseClientInstance.auth.getSession();
      
      // ログイン済みの場合はゲストモードを無効化
      if (session) {
        sessionStorage.removeItem('guestMode');
        setIsGuest(false);
      } else {
        // ゲストモードかどうかをチェック
        const guestMode = sessionStorage.getItem('guestMode') === 'true';
        setIsGuest(guestMode);
        
        // 未ログインかつゲストモードでもない場合はログインページへリダイレクト
        if (!guestMode && window.location.pathname !== "/login") {
          console.log("🔄 クライアント側でリダイレクト: /login");
          router.replace("/login"); // ✅ クライアント側リダイレクト
          return;
        }
      }
      
      setLoading(false);
      fetchUsers();
    };

    checkSession();
  }, [router]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabaseClientInstance
        .from('users')
        .select('*');

      if (error) {
        console.error('ユーザーデータの取得エラー:', error);
        return;
      }

      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error('データ取得中にエラーが発生しました:', error);
    }
  };

  if (loading) return <div className="flex h-screen justify-center items-center text-lg">Loading...</div>;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center">自己紹介カード一覧</h1>
          {isGuest && (
            <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 px-4 py-2 rounded-md text-sm flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              ゲストモードで閲覧中
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 duration-300 border border-gray-200 dark:border-gray-700">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
                <div className="flex items-center justify-center">
                  {user.icon_url ? (
                    <Image 
                      src={user.icon_url} 
                      alt={`${user.name}のアイコン`} 
                      width={100} 
                      height={100} 
                      className="rounded-full border-4 border-white dark:border-gray-800 object-cover h-24 w-24"
                    />
                  ) : (
                    <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-24 w-24 flex items-center justify-center">
                      <span className="text-2xl text-gray-600 dark:text-gray-300">
                        {user.name ? user.name.charAt(0).toUpperCase() : "?"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">{user.name || "名前未設定"}</h2>
                
                <div className="space-y-3 mb-4">
                  {user.job && (
                    <div className="flex">
                      <span className="text-gray-600 dark:text-gray-400 font-medium w-24">職業・職種:</span>
                      <span className="text-gray-800 dark:text-gray-200">{user.job}</span>
                    </div>
                  )}
                  
                  {user.language && (
                    <div className="flex">
                      <span className="text-gray-600 dark:text-gray-400 font-medium w-24">得意な言語:</span>
                      <span className="text-gray-800 dark:text-gray-200">{user.language}</span>
                    </div>
                  )}
                  
                  {user.hobby && (
                    <div className="flex">
                      <span className="text-gray-600 dark:text-gray-400 font-medium w-24">趣味:</span>
                      <span className="text-gray-800 dark:text-gray-200">{user.hobby}</span>
                    </div>
                  )}
                </div>
                
                {user.bio && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">自己紹介</h3>
                    <p className="text-gray-800 dark:text-gray-200 text-sm">{user.bio}</p>
                  </div>
                )}
                
                <div className="flex justify-center space-x-4 mt-4">
                  {user.x_link && (
                    <a href={user.x_link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                      </svg>
                    </a>
                  )}
                  
                  {user.github_link && (
                    <a href={user.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
