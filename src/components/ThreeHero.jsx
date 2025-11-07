import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';

// 3D floating text component
function FloatingText() {
  const textRef = useRef();
  
  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={textRef}
          font="/fonts/Inter_Bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          DEVELOPER
          <meshStandardMaterial 
            color="#6366f1" 
            transparent 
            opacity={0.8}
            roughness={0.1}
            metalness={0.8}
          />
        </Text3D>
      </Center>
    </Float>
  );
}

// Interactive 3D hero section
export const ThreeHero = () => {
  return (
    <div className="h-40 w-full relative">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#8b5cf6" />
        
        <FloatingText />
      </Canvas>
    </div>
  );
};