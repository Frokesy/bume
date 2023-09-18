import React, { useState } from "react";
import Header from "@/components/Header";
import Modes from "@/components/Modes";
import Home from "@/components/Home";
import { gsap } from "gsap";
import Auth from "./auth";
import { useRouter } from "next/router";

const Bume = () => {
  const [theme, setTheme] = useState("dark");
  const [currentScreen, setCurrentScreen] = useState("home");
  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  const handleScreenChange = (screen: string) => {
    const tl = gsap.timeline();
    tl.to(".transitionDiv", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentScreen(screen);
      },
    });
  };

  const router = useRouter()

  return (
    <div className="select-none">
      <Header toggleTheme={toggleTheme} />
      <Modes theme={theme}>
        {currentScreen === "home" ? (
          <div className="transitionDiv">
            <Home theme={theme} onClick={handleScreenChange} />
          </div>
        ) : (
          <Auth router={router} />
        )}
      </Modes>
    </div>
  );
};
export default Bume;
