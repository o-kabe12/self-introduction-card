'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
// import { createClient } from "@supabase/supabase-js";
import { supabaseClientInstance } from '../lib/supabaseClient';

export default function MyPage() {
  const [userData, setUserData] = useState({
    name: "",
    job: "",
    language: "",
    hobby: "",
    bio: "",
    x_link: "",
    github_link: "",
    icon_url: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  
  const supabaseClient = supabaseClientInstance;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setLoading(true);
    const { data: { user } } = await supabaseClient.auth.getUser();
  
    if (!user) {
      alert("ログインしてください");
      setLoading(false);
      return;
    }
  
    let uploadedImageUrl = userData.icon_url;
  
    // 画像をアップロード（file が存在する場合のみ）
    if (file) {
      const fileExt = file.name.split('.').pop();
      const filePath = `${user.id}/icon.${fileExt}`;
  
      const { error: uploadError } = await supabaseClient.storage
        .from("icons")
        .upload(filePath, file, { upsert: true });
  
      if (uploadError) {
        console.error("アップロードエラー:", uploadError.message);
        alert("アイコンのアップロードに失敗しました");
        setLoading(false);
        return;
      }
  
      // 公開URLを生成
      uploadedImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/icons/${filePath}`;
    }
  
    // ユーザーデータを更新
    const { error } = await supabaseClient
      .from("users")
      .upsert({ id: user.id, ...userData, icon_url: uploadedImageUrl }, { onConflict: "id" });
  
    if (error) {
      console.error("更新エラー:", error.message);
      alert("データ更新に失敗しました");
    } else {
      alert("データを保存しました！");
      setUserData((prev) => ({ ...prev, icon_url: uploadedImageUrl })); // 最新のURLを反映
    }
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setFile(selectedFile); // ファイルを保持する
  };
  
  const fetchUserData = async () => {
    const { data, error } = await supabaseClient
      .from('users')
      .select('*')
      .single();

    if (error) {
      return;
    }

    console.log(data)

    setUserData((prev) => ({ ...prev, ...data }));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">マイプロフィール編集</h1>
        
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700">
            <div className="flex items-center justify-center">
              {userData.icon_url ? (
                <Image 
                  src={userData.icon_url} 
                  width={100} 
                  height={100} 
                  alt="プロフィール画像" 
                  className="rounded-full border-4 border-white dark:border-gray-800 object-cover h-24 w-24"
                />
              ) : (
                <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-24 w-24 flex items-center justify-center">
                  <span className="text-2xl text-gray-600 dark:text-gray-300">
                    {userData.name ? userData.name.charAt(0).toUpperCase() : "?"}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">名前</label>
                <input 
                  name="name" 
                  value={userData.name} 
                  onChange={handleChange} 
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">アイコン</label>
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 dark:file:bg-blue-900 dark:file:text-blue-200 hover:file:bg-blue-100 dark:hover:file:bg-blue-800" 
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">職業・職種</label>
                <input 
                  name="job" 
                  value={userData.job} 
                  onChange={handleChange} 
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">得意な言語</label>
                <input 
                  name="language" 
                  value={userData.language} 
                  onChange={handleChange} 
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">趣味</label>
                <input 
                  name="hobby" 
                  value={userData.hobby} 
                  onChange={handleChange} 
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                />
              </div>
              
              <div>
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">自己紹介文</label>
                <textarea 
                  name="bio" 
                  value={userData.bio} 
                  onChange={handleChange} 
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  rows={3} 
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-medium text-gray-700 dark:text-gray-300 mb-1">SNSアカウント</label>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                  <input 
                    name="x_link" 
                    value={userData.x_link} 
                    placeholder="Xのリンク" 
                    onChange={handleChange} 
                    className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                  <input 
                    name="github_link" 
                    value={userData.github_link} 
                    placeholder="GitHubのリンク" 
                    onChange={handleChange} 
                    className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <button 
                onClick={handleUpdate} 
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-md"
              >
                {loading ? "更新中..." : "プロフィールを更新"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}