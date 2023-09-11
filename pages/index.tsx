import React, { useState } from "react";
import Header from "@/components/Header";
import Modes from "@/components/Modes";
import Home from "@/components/Home";
import Login from "./login";
import { gsap } from "gsap";

const Bume = () => {
  const [theme, setTheme] = useState("dark");
  const [currentScreen, setCurrentScreen] = useState("home");
  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };

  //add a fade in and fade out animation respectively when the screens are switched
  const handleScreenChange = (screen: string) => {
    const tl = gsap.timeline();
    //exit animation
    tl.to(".transitionDiv", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentScreen(screen);
      },
    });
    console.log(screen);
  };

  return (
    <div className="select-none">
      <Header toggleTheme={toggleTheme} />
      <Modes theme={theme}>
        {currentScreen === "home" ? (
          <div className="transitionDiv">
            <Home theme={theme} onClick={handleScreenChange} />
          </div>
        ) : (
          <Login onClick={handleScreenChange} />
        )}
      </Modes>
    </div>
  );
};
export default Bume;
