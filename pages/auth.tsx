import InputField from "@/components/InputField";
import { handleLogin, handleSignup } from "@/utils/authFunc";
import { supabase } from "@/utils/supabaseClient";
import { gsap } from "gsap";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ComponentProps {
  onClick: Function;
}
const Auth: FC<ComponentProps> = ({ onClick }) => {
  const [activeTab, setActiveTab] = useState("signup");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    fullName: "",
  });

  const [loading, setLoading] = useState(false);

  // const router = useRouter()

  const validateField = (value: any) => {
    if (value === "") {
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/;
    return passwordRegex.test(password);
  };

  const tabs = ["login", "signup"];

  const handleToggle = (tab: string) => {
    const tl = gsap.timeline();
    if (tab === "signup") {
      tl.to(".otherInput", {
        y: 10,
        ease: "ease-in",
        duration: 0.5,
        onComplete: () => {
          setActiveTab(tab);
        },
      });
      tl.fromTo(
        ".fadeInInput",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: "power2.inOut" }
      );
    }

    if (tab === "login") {
      tl.fromTo(
        ".fadeInInput",
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setActiveTab(tab);
          },
        }
      );

      tl.to(".otherInput", {
        y: -50,
        ease: "ease-in",
        duration: 0.5,
        delay: 0.5,
      });
    }
  };

  const handleSubmit = async (activeTab: string) => {
    if (activeTab === "login") {
      setLoading(true);
      const isEmailValid = validateField(userData.email);
      const isPasswordValid = userData.password.length >= 6;

      setError({
        email: isEmailValid ? "" : "Email is required",
        password: isPasswordValid
          ? ""
          : "Password must be at least 6 characters",
        fullName: "",
      });

      if (isEmailValid && isPasswordValid) {
        return true;
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
    } else if (activeTab === "signup") {
      setLoading(true);

      const isFullnameValid = validateField(userData.fullName);
      const isEmailValid = validateField(userData.email);
      const isPasswordValid = validatePassword(userData.password);

      setError({
        fullName: isFullnameValid ? "" : "fullname is required",
        email: isEmailValid ? "" : "Email is required",
        password: isPasswordValid
          ? ""
          : "Password must be at least 6 character with at least 1 lowercase, 1 uppercase, 1 digit and 1 special case",
      });

      if (isFullnameValid && isEmailValid && isPasswordValid) {
        return true
      } else {
        setLoading(false);
        if (!isFullnameValid) {
          setTimeout(() => {
            setError((prevState) => ({ ...prevState, fullName: "" }));
          }, 3000);
        }
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
  };
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".transitionDiv", {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "ease-in",
    });
  }, []);
  return (
    <div className="transitionDiv text-[#000] lg:w-[30vw] w-[90vw] mx-auto flex flex-col justify-center text-center">
      <div className="flex justify-between -skew-x-12">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`text-[#fff] cursor-pointer justify-center w-[50%] border-b border-[#808080] py-2 lg:text-[20px] text-[16px] my-4 font-mono ${
              activeTab === tab ? "font-bold bg-[#2ba6d8]" : "font-normal"
            }`}
            onClick={() => handleToggle(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="fadeInInput">
        <InputField
          type="text"
          label="full name"
          value={userData.fullName}
          onChange={(e) =>
            setUserData({ ...userData, fullName: e.target.value })
          }
          nameErr={error.fullName}
        />
      </div>
      <div className="otherInput">
        <InputField
          type="text"
          label="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          emailErr={error.email}
        />
        <InputField
          type="password"
          label="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          passwordErr={error.password}
        />
        <div className="mt-[5vh]">
          {activeTab === "login" ? (
            <button
              onClick={() => handleSubmit("login")}
              className="bg-[#2ba6d8] btn py-1 px-4 -skew-x-12 rounded-lg lg:text-[20px] text-[16px] font-bold text-[#fff]"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => handleSubmit("signup")}
              className="bg-[#2ba6d8] btn py-1 px-4 -skew-x-12 rounded-lg lg:text-[20px] text-[16px] font-bold text-[#fff]"
            >
              Signup
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
