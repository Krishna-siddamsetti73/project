import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Note: This is a simplified 3D model component
// In a production environment, you would use actual 3D models loaded from files

const AirplaneModel = (props) => {
  const mesh = useRef();
  
  // Animate the model on each frame
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
    >
      <cylinderGeometry args={[0.1, 0.5, 3, 8]} />
      <meshStandardMaterial color={'#D22B2B'} metalness={0.8} roughness={0.2} />
      
      {/* Wings */}
      <group position={[0, 0, 0.5]}>
        <mesh>
          <boxGeometry args={[3, 0.1, 0.8]} />
          <meshStandardMaterial color={'#D22B2B'} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Tail */}
      <group position={[0, 0.4, -1]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.1]} />
          <meshStandardMaterial color={'#D22B2B'} metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </mesh>
  );
};

export default AirplaneModel;