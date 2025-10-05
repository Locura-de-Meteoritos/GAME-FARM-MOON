import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function WaterTank({ position = [0, 0, 0], ...props }) {
  const waterRef = useRef()
  
  useFrame(({ clock }) => {
    if (waterRef.current) {
      // Efecto de ondas en el agua
      const time = clock.getElapsedTime()
      waterRef.current.position.y = 1.5 + Math.sin(time * 2) * 0.02
    }
  })

  return (
    <group position={position} {...props}>
      {/* Tanque principal */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2, 2, 2, 16]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      
      {/* Agua dentro del tanque */}
      <mesh ref={waterRef} position={[0, 1.5, 0]}>
        <cylinderGeometry args={[1.9, 1.9, 0.1, 16]} />
        <meshStandardMaterial
          color="#4169E1"
          transparent
          opacity={0.7}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>
      
      {/* Base del tanque */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <cylinderGeometry args={[2.2, 2.2, 0.2, 16]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Soportes del tanque */}
      {Array.from({ length: 4 }, (_, i) => {
        const angle = (i / 4) * Math.PI * 2
        const x = Math.cos(angle) * 1.8
        const z = Math.sin(angle) * 1.8
        return (
          <mesh key={i} position={[x, 1, z]} castShadow>
            <boxGeometry args={[0.2, 2, 0.2]} />
            <meshStandardMaterial color="#666666" />
          </mesh>
        )
      })}
      
      {/* Tuberías de conexión */}
      <mesh position={[2.5, 0.5, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Válvula */}
      <mesh position={[2.5, 0.3, 0]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.3]} />
        <meshStandardMaterial color="#ff4444" />
      </mesh>
      
      {/* Medidor de nivel */}
      <mesh position={[0, 1, 2.1]} castShadow>
        <boxGeometry args={[0.3, 1.5, 0.1]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Indicador de nivel del agua */}
      <mesh position={[0, 1.3, 2.15]} castShadow>
        <boxGeometry args={[0.2, 0.1, 0.05]} />
        <meshStandardMaterial color="#00ff00" />
      </mesh>
      
      {/* Escalera de acceso */}
      {Array.from({ length: 5 }, (_, i) => (
        <mesh key={i} position={[-2.1, 0.4 + i * 0.3, 0]} castShadow>
          <boxGeometry args={[0.1, 0.05, 0.6]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
      ))}
      
      {/* Rieles de la escalera */}
      <mesh position={[-2.1, 1, 0.25]} castShadow>
        <boxGeometry args={[0.05, 2, 0.1]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      <mesh position={[-2.1, 1, -0.25]} castShadow>
        <boxGeometry args={[0.05, 2, 0.1]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Luz de trabajo */}
      <pointLight
        position={[0, 3, 0]}
        intensity={0.3}
        color="#ffffff"
        distance={8}
      />
    </group>
  )
}