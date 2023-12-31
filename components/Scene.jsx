import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/scene.gltf')
  const [rotateXY, setRotateXY] = useState(0.01)
  useFrame(() => {
    groupRef.current.rotation.x += rotateXY;
    groupRef.current.rotation.y += rotateXY;
  });

  if (props.theme === 'dark') {
    materials.star.color = { r: 0.5, g: 0.5, b: 0.5 }
  } else {
    materials.star.color = { r: 1, g: 1, b: 1 }
  }

  useEffect(() => {
    setTimeout(() => {
      setRotateXY(0.001)
    }, 3000)
  }, [])
  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.star} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
