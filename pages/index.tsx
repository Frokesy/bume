import React, { useState } from "react";
import Header from "@/components/Header";
import Modes from "@/components/Modes";

const Home = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };
  return (
    <div>
      <div>
        <Header toggleTheme={toggleTheme} />
        <Modes theme={theme} />
      </div>
    </div>
  );
};
export default Home;
