import { createSClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createSClient(cookieStore);
  const {data} = await supabase.auth.getUser();
  const session = await supabase.auth.getSession();

  console.log('User:', data);
  console.log('Session:', session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
