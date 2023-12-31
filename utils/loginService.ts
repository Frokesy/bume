import { toast } from "react-toastify";
import { supabase } from "./supabaseClient";

export async function handleLogin(
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  validateField: (value: any) => boolean,
  userData: { email: string; password: string; fullName: string },
  validatePassword: (password: string) => boolean,
  setError: React.Dispatch<
    React.SetStateAction<{ email: string; password: string; fullName: string }>
  >,
  router: any
) {
  setLoading(true);
  const isEmailValid = validateField(userData.email);
  const isPasswordValid = validatePassword(userData.password);

  setError({
    email: isEmailValid ? "" : "Email is required",
    password: isPasswordValid ? "" : "Password must be at least 6 characters",
    fullName: "",
  });

  if (isEmailValid && isPasswordValid) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      if (error) {
        setLoading(false);
        throw error.message;
      }
      const id = data.user?.id;
      toast.success("Login successful, you'll be redirected shortly...", {
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      setTimeout(() => {
        router.push(`/home`);
      }, 2000);
      setLoading(false);
    } catch (error: any) {
      toast.error(error, {
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
        hideProgressBar: true,
        draggable: true,
      });
      setLoading(false);
    }
  } else {
    setLoading(false);
    if (!isEmailValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, email: "" }));
      }, 3000);
    }
    if (!isPasswordValid) {
      setTimeout(() => {
        setError((prevState) => ({ ...prevState, password: "" }));
      }, 3000);
    }
  }
}
