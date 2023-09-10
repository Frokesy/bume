import Header from "@/components/Header";
import Modes from "@/components/Modes";
import React from "react";

const Login = () => {
  return (
    <div>
      <Header toggleTheme={() => {}} />
      <Modes theme="dark">
        <h1 className="text-[#fff]">Hello</h1>
      </Modes>
    </div>
  );
};

export default Login;
