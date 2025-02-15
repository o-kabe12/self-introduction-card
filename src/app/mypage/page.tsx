'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';


// import { createClient } from '@supabase/supabase-js';
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

export default function MyPage() {
  const [userData, setUserData] = useState({
    name: '',
    job: '',
    language: '',
    hobby: '',
    bio: '',
    x_link: '',
    github_link: '',
    icon_url: ''
  });
  const [file, setFile] = useState<File | null>(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     const { data, error } = await supabase.from('users').select('*').single();
  //     if (data) setUserData(data);
  //   };
  //   fetchUserData();
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  // const uploadImage = async () => {
  //   if (!file) return;
  //   const { data, error } = await supabase.storage
  //     .from('avatars')
  //     .upload(`public/${file.name}`, file, { upsert: true });
  //   if (data) {
  //     const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${data.path}`;
  //     setUserData({ ...userData, icon_url: url });
  //   }
  // };

  const handleUpdate = async () => {
    // await uploadImage();
    // const { error } = await supabase.from('users').upsert(userData);
    // if (!error) alert('更新しました！');
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-6">
        <header className="mb-4">
          <Link href="/" className="text-blue-500">← 戻る</Link>
        </header>
        <main>
          <h1 className="text-xl font-bold mb-4">マイページ</h1>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">名前</label>
              <input name="name" value={userData.name} onChange={handleChange} className="border p-2 w-full" />
            </div>
            <div>
              <label className="block font-medium">アイコン</label>
              <input type="file" onChange={handleFileChange} className="border p-2 w-full" />
              {userData.icon_url && <Image src={userData.icon_url} width={50} height={50} alt="icon" />}
            </div>
            <div>
              <label className="block font-medium">職業・職種</label>
              <input name="job" value={userData.job} onChange={handleChange} className="border p-2 w-full" />
            </div>
            <div>
              <label className="block font-medium">得意な言語</label>
              <input name="language" value={userData.language} onChange={handleChange} className="border p-2 w-full" />
            </div>
            <div>
              <label className="block font-medium">趣味</label>
              <input name="hobby" value={userData.hobby} onChange={handleChange} className="border p-2 w-full" />
            </div>
            <div>
              <label className="block font-medium">自己紹介文</label>
              <input name="bio" value={userData.bio} onChange={handleChange} className="border p-2 w-full" />
            </div>
            <div>
              <label className="block font-medium">SNSアカウント</label>
              <input name="x_link" value={userData.x_link} placeholder="Xのリンク" onChange={handleChange} className="border p-2 w-full" />
              <input name="github_link" value={userData.github_link} placeholder="GitHubのリンク" onChange={handleChange} className="border p-2 w-full mt-2" />
            </div>
            <div>
              <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded hover:opacity-70 duration-300">更新</button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
