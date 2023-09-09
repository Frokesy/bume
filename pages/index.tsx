import React, { useState } from "react";
import Header from "@/components/Header";
import Modes from "@/components/Modes";
import Home from "@/components/Home";

const Bume = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
      <div className="select-none">
        <Header toggleTheme={toggleTheme} />
        <Modes theme={theme}>
          <Home theme={theme} />
        </Modes>
      </div>
  );
};
export default Bume;
