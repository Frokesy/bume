import React, { FC, useContext, useEffect } from "react";
import { gsap } from "gsap";

interface HomeProps {
  theme: string;
  onClick: Function;
}

const Home: FC<HomeProps> = ({ theme, onClick }) => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".text",
      { y: -20, opacity: 1 },
      {
        y: 20,
        opacity: 0.5,
        duration: 2,
        delay: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.4,
      }
    );
    tl.from(".body", {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "ease-in",
    });
  }, []);

  return (
    <div className="lg:w-[40vw] w-[90vw] mx-auto flex flex-col body justify-center text-center">
      <h2 className="text-[#2ba6d8] lg:text-[52px] text-[30px] font-mono text">
        A simple build tool,{" "}
        <span className={theme === "light" ? `text-[#000]` : `text-[#fff]`}>
          to craft your resume
        </span>
      </h2>

      <div className="mt-[5vh]">
          <button onClick={() => onClick("login")} className="bg-[#2ba6d8] btn py-2 px-6 -skew-x-12 rounded-lg lg:text-[24px] text-[16px] font-bold text-[#fff]">
            Get Started
          </button>
      </div>
    </div>
  );
};

export default Home;
