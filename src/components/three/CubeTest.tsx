'use client';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'


export default function CubeTest() {

  

  return (

    <>
      <Canvas>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Text
          position={[0, 0, 0]}
          fontSize={2.5}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Contact
        </Text>
      </Canvas>

    
    </>
  )
}