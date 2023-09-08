import { Canvas } from "@react-three/fiber";
import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import Model from "@/components/Scene";
import { Html, OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";

interface Props {
  theme: string;
}

const Modes:FC<Props> = ({ theme }) => {

  return (
    <div className={`${theme === "light" ? `bg-[#fff]` : `bg-[#000] text-white`} h-[92vh] min-h-[92vh] w-[100vw]` }>
      <Canvas>
        <OrbitControls />
        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <Html>
          <div className="absolute -top-[30vh] left-0 w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center">
              <h2 className="text-[24px] font-semibold">Bume</h2>
              <p className="text-[14px]">3D Model</p>
            </div>
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default Modes;
