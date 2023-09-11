import { gsap } from "gsap";
import React, { FC, useEffect } from "react";

interface ComponentProps {
  onClick: Function;
}
const Login: FC<ComponentProps> = ({ onClick }) => {
  // setCurrentScreen("login");
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".transitionDiv", {
      opacity: 0,
      y: 100,
      duration: 2,
      ease: "ease-in",
    });
  }, [])
  return (
    <div className="transitionDiv">
        login
        <button onClick={() => onClick("home")}>
          Go back
        </button>
    </div>
  );
};

export default Login;
