import React, { useState, createContext, useCallback, ReactNode } from "react";
import gsap from "gsap";

interface PageTransitionContextType {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  background: string;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  timeline: gsap.timeline({ paused: true }),
  setTimeline: () => {},
  background: "#000",
  setBackground: () => {},
});

interface PageTransitionProviderProps {
  children: ReactNode;
}

const PageTransitionProvider: React.FC<PageTransitionProviderProps> = ({ children }) => {
  const [timeline, setTimeline] = useState(() =>
    gsap.timeline({ paused: true })
  );

  const [background, setBackground] = useState("#000");

  return (
    <PageTransitionContext.Provider
      value={{
        timeline,
        setTimeline,
        background,
        setBackground,
      }}
    >
      {children}
    </PageTransitionContext.Provider>
  );
};

export { PageTransitionContext, PageTransitionProvider };
