import { Stars } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Skybox() {
  const earthRef = useRef()
  
  useFrame(({ clock }) => {
    if (earthRef.current) {
      // Rotación lenta de la Tierra
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <>
      {/* Fondo del espacio */}
      <color attach="background" args={["#000011"]} />
      
      {/* Campo de estrellas */}
      <Stars
        radius={300}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
      
      {/* La Tierra en la distancia */}
      <mesh ref={earthRef} position={[-50, 20, -80]} scale={[3, 3, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#4a90e2"
          emissive="#1a3a5c"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Atmósfera de la Tierra */}
      <mesh position={[-50, 20, -80]} scale={[3.2, 3.2, 3.2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#87ceeb"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
    </>
  )
}