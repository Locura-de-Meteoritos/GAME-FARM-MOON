import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Greenhouse({ position = [0, 0, 0], ...props }) {
  const groupRef = useRef()
  
  useFrame(({ clock }) => {
    // Efecto de respiración muy sutil en el domo
    if (groupRef.current) {
      const time = clock.getElapsedTime()
      groupRef.current.children[0].scale.y = 1 + Math.sin(time * 0.5) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={position} {...props}>
      {/* Domo transparente */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <sphereGeometry args={[4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color="#e6f3ff"
          transparent
          opacity={0.3}
          metalness={0.1}
          roughness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Base del invernadero */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <cylinderGeometry args={[4, 4, 0.2, 16]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      
      {/* Estructura de soporte del domo */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 3.8
        const z = Math.sin(angle) * 3.8
        return (
          <mesh
            key={i}
            position={[x, 2, z]}
            rotation={[0, angle + Math.PI / 2, 0]}
            castShadow
          >
            <boxGeometry args={[0.1, 4, 0.1]} />
            <meshStandardMaterial color="#888888" />
          </mesh>
        )
      })}
      
      {/* Plantas dentro del invernadero */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 2.5 + 0.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const height = Math.random() * 0.8 + 0.5
        
        return (
          <group key={i} position={[x, 0.2, z]}>
            {/* Maceta */}
            <mesh position={[0, 0.2, 0]} castShadow>
              <cylinderGeometry args={[0.3, 0.25, 0.4, 8]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            
            {/* Planta */}
            <mesh position={[0, 0.4 + height / 2, 0]} castShadow>
              <boxGeometry args={[0.2, height, 0.2]} />
              <meshStandardMaterial color="#22aa22" />
            </mesh>
            
            {/* Hojas */}
            <mesh position={[0, 0.4 + height, 0]} castShadow>
              <sphereGeometry args={[0.3, 8, 6]} />
              <meshStandardMaterial color="#44cc44" />
            </mesh>
          </group>
        )
      })}
      
      {/* Sistema de ventilación */}
      <mesh position={[0, 4.2, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Luces internas del invernadero */}
      <pointLight
        position={[0, 3, 0]}
        intensity={0.5}
        color="#ffff88"
        distance={6}
      />
    </group>
  )
}