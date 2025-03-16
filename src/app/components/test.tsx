import { useState } from "react";
import { User } from "@supabase/auth-helpers-nextjs";
import { createClient } from "@supabase/supabase-js";

const TestComponent = () => {
  const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)
  const [user, setUser] = useState<User | null>(null);

    const firstSupabaseLoading = ()=>{
      supabaseClient.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user || null);
        console.log(session);
      });
    
      const { data: authListener } = supabaseClient.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
      });
    
      return () => {
        authListener?.subscription.unsubscribe();
      };
    }

    firstSupabaseLoading();

    return (
      <>
        <div>{user ? `ログイン中: ${user.email}` : "未ログイン"}</div>
      </>

    );
};

export default TestComponent;