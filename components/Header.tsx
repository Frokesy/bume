import React, { FC, useEffect, useState } from "react";
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";

interface Props {
  toggleTheme: (theme: string) => void;
}

const Header: FC<Props> = ({ toggleTheme }) => {
  const [darkMode, setDarkMode] = useState(true);
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
    <div className={`${darkMode ? `bg-[#000]` : `bg-[#0e6e97]`} text-[#fff] max-h-[8vh] h-[8vh]`}>
      <div className="lg:w-[80vw] w-[90vw] mx-auto flex justify-between items-center py-3">
        <h2 className="text-[24px] font-semibold">Bume</h2>
        <div className="flex items-center space-x-6">
          {darkMode ? (
            <div
              onClick={toggleDarkMode}
              className={`flex cursor-pointer items-center space-x-3 ${animationClass}`}
            >
              <FaSun size={20} />
            </div>
          ) : (
            <div
              onClick={toggleDarkMode}
              className={`flex cursor-pointer items-center space-x-3 ${animationClass}`}
            >
              <FaMoon size={20} />
            </div>
          )}
          <FaUserAlt size={20} />
        </div>
      </div>
    </div>
  );
};

export default Header;
