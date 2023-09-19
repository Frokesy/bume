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
    flex h-[100vh] max-h-[100vh]
    ${theme === "dark" ? `bg-[#000] text-[#fff]` : `bg-[#fff] text-[#000]`}`}
    >
      <div className="w-[10%]"></div>
      <div className="w-[90%]">{children}</div>
    </div>
  );
};

export default Container;
