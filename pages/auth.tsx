import InputField from "@/components/InputField";
import { gsap } from "gsap";
import React, { FC, useEffect, useState } from "react";

interface ComponentProps {
  onClick: Function;
}
const Auth: FC<ComponentProps> = ({ onClick }) => {
  const [activeTab, setActiveTab] = useState("signup");

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
  // setCurrentScreen("login");
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
        <InputField type="text" label="full name" />
      </div>
      <div className="otherInput">
        <InputField type="text" label="email" />
        <InputField type="password" label="password" />
        <div className="mt-[5vh]">
          {activeTab === "login" ? (
            <button
              onClick={() => onClick("home")}
              className="bg-[#2ba6d8] btn py-1 px-4 -skew-x-12 rounded-lg lg:text-[20px] text-[16px] font-bold text-[#fff]"
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => onClick("home")}
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
