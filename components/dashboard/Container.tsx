import React, { FC, ReactNode, useEffect, useState } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);
  return (
    <div
      className={`
    flex min-h-[100vh]
    ${theme === "dark" ? `bg-[#000] text-[#fff]` : `bg-[#fff] text-[#000]`}`}
    >
      <div className="w-[5%]"></div>
      <div className="lg:w-[95%] w-[100%] lg:pr-4">{children}</div>
    </div>
  );
};

export default Container;
