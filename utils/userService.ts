import { supabase } from "./supabaseClient";

interface UserProfile {
  id: string;
  created_at: string;
  name: string;
  email: string;
  userId: string;
}

export async function getUser(
  setProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>,
  router: any
) {
  const { data: user } = await supabase.auth.getUser();

  if (user) {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("userId", user.user?.id);
      if (error) {
        throw new Error(error.message);
      } else {
        setProfile(data[0] || null);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    router.push("/");
  }
}
