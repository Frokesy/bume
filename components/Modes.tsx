import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import Model from "@/components/Scene";
import { Html, OrbitControls } from "@react-three/drei";

interface Props {
  theme: string;
  children: React.ReactNode;
}

const Modes: FC<Props> = ({ theme, children }) => {
  const [cursorBehaviour, setCursorBehaviour] = useState("grab");
  return (
    <div
      className={`${
        theme === "light" ? `bg-[#bee1ee]` : `bg-[#000] text-white`
      } h-[92vh] min-h-[92vh] w-[100vw] ${cursorBehaviour}`}
      onMouseDown={() => setCursorBehaviour("cursor-grabbing")}
      onMouseUp={() => setCursorBehaviour("cursor-grab")}
    >
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Model theme={theme} />
        </Suspense>

        <Html className="absolute inset-0 flex justify-center items-center -mt-[20vh]">
          <div>
            {children}
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default Modes;
