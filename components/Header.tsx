import React, { FC, useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  toggleTheme: (theme: string) => void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [animationClass, setAnimationClass] = useState("fade-in");

  useEffect(() => {
    toggleTheme(darkMode ? "dark" : "light");
  }, [darkMode, toggleTheme]);

  const toggleDarkMode = () => {
    setAnimationClass("fade-out");
    setTimeout(() => {
      setDarkMode(!darkMode);
      setAnimationClass("fade-in");
    }, 300);
  };

  return (
    <div className="bg-[#0e6e97] text-[#fff] h-[8vh] max-h-[8vh]">
      <div className="w-[80vw] mx-auto flex justify-between items-center py-3">
        <h2 className="sofia text-[24px] font-semibold">Bume</h2>
        <div className="flex items-center px-4 py-2 space-x-4 rounded-lg">
          {darkMode ? (
            <div
              onClick={toggleDarkMode}
              className={`flex cursor-pointer items-center space-x-3 ${animationClass}`}
            >
              <FaSun />
              <span className="text-[14px] font-semibold">Light</span>
            </div>
          ) : (
            <div
              onClick={toggleDarkMode}
              className={`flex cursor-pointer items-center space-x-3 ${animationClass}`}
            >
              <FaMoon />
              <span className="text-[14px] font-semibold">Dark</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
