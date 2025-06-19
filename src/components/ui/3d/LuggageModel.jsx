import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Note: This is a simplified 3D model component
// In a production environment, you would use actual 3D models loaded from files

const LuggageModel = (props) => {
  const mesh = useRef();
  
  // Animate the model on each frame
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group {...props} ref={mesh}>
      {/* Main suitcase body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 1.6, 0.6]} />
        <meshStandardMaterial color={'#008080'} metalness={0.3} roughness={0.7} />
      </mesh>
      
      {/* Handle */}
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.1]} />
        <meshStandardMaterial color={'#333333'} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wheels */}
      <mesh position={[-0.4, -0.9, 0.2]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={'#333333'} metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.4, -0.9, 0.2]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color={'#333333'} metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Details */}
      <mesh position={[0, 0, 0.32]}>
        <boxGeometry args={[0.8, 0.8, 0.01]} />
        <meshStandardMaterial color={'#D22B2B'} metalness={0.3} roughness={0.7} />
      </mesh>
    </group>
  );
};

export default LuggageModel;