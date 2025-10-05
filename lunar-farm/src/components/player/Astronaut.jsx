import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Astronaut({ position = [0, 0, 0], ...props }) {
  const groupRef = useRef()

  useFrame(() => {
    if (groupRef.current) {
      // Sincronizar la posición visual si es necesario
      // groupRef.current.position.copy(position)
    }
  })

  return (
    <group ref={groupRef} position={position} {...props}>
      {/* Cuerpo principal */}
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[0.6, 1.2, 0.4]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Casco */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <sphereGeometry args={[0.35, 12, 8]} />
        <meshStandardMaterial 
          color="#f0f0f0" 
          transparent 
          opacity={0.8}
          metalness={0.3}
          roughness={0.1}
        />
      </mesh>
      
      {/* Visor del casco */}
      <mesh position={[0, 0.8, 0.32]} castShadow>
        <sphereGeometry args={[0.3, 12, 8]} />
        <meshStandardMaterial 
          color="#001122" 
          transparent 
          opacity={0.7}
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      
      {/* Mochila de oxígeno */}
      <mesh position={[0, 0.2, -0.35]} castShadow>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Brazos */}
      <mesh position={[-0.4, 0.3, 0]} castShadow>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[0.4, 0.3, 0]} castShadow>
        <boxGeometry args={[0.15, 0.8, 0.15]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Piernas */}
      <mesh position={[-0.15, -0.8, 0]} castShadow>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      <mesh position={[0.15, -0.8, 0]} castShadow>
        <boxGeometry args={[0.2, 0.8, 0.2]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Botas */}
      <mesh position={[-0.15, -1.3, 0.1]} castShadow>
        <boxGeometry args={[0.25, 0.2, 0.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      <mesh position={[0.15, -1.3, 0.1]} castShadow>
        <boxGeometry args={[0.25, 0.2, 0.4]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Detalles del traje */}
      <mesh position={[0, 0.4, 0.25]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.05]} />
        <meshStandardMaterial color="#ff4444" />
      </mesh>
      
      {/* Antena del casco */}
      <mesh position={[0.2, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  )
}