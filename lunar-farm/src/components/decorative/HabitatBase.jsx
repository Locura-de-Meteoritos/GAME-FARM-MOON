import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function HabitatBase({ position = [0, 0, 0], ...props }) {
  const lightsRef = useRef([])
  
  useFrame(({ clock }) => {
    // Parpadeo de luces internas
    const time = clock.getElapsedTime()
    lightsRef.current.forEach((light, i) => {
      if (light) {
        light.intensity = 0.3 + Math.sin(time * 2 + i) * 0.1
      }
    })
  })

  return (
    <group position={position} {...props}>
      {/* Módulo principal habitacional */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[3, 3, 3, 16]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Techo/Cúpula */}
      <mesh position={[0, 3.2, 0]} castShadow>
        <sphereGeometry args={[3, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>
      
      {/* Ventanas principales */}
      {Array.from({ length: 6 }, (_, i) => {
        const angle = (i / 6) * Math.PI * 2
        const x = Math.cos(angle) * 3.1
        const z = Math.sin(angle) * 3.1
        
        return (
          <mesh
            key={i}
            position={[x, 2, z]}
            rotation={[0, angle, 0]}
            castShadow
          >
            <cylinderGeometry args={[0.8, 0.8, 0.2, 12]} />
            <meshStandardMaterial
              color="#87CEEB"
              transparent
              opacity={0.7}
              emissive="#4169E1"
              emissiveIntensity={0.1}
            />
          </mesh>
        )
      })}
      
      {/* Puerta de entrada */}
      <mesh position={[0, 1, 3.2]} castShadow>
        <boxGeometry args={[1.2, 2, 0.3]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Ventana de la puerta */}
      <mesh position={[0, 1.5, 3.35]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.05]} />
        <meshStandardMaterial
          color="#87CEEB"
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Esclusa de aire */}
      <mesh position={[0, 1, 4]} castShadow>
        <cylinderGeometry args={[1, 1, 2, 12]} />
        <meshStandardMaterial color="#999999" />
      </mesh>
      
      {/* Base de la estructura */}
      <mesh position={[0, 0.2, 0]} receiveShadow>
        <cylinderGeometry args={[3.5, 3.5, 0.4, 16]} />
        <meshStandardMaterial color="#808080" />
      </mesh>
      
      {/* Sistema de soporte */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 2.8
        const z = Math.sin(angle) * 2.8
        
        return (
          <mesh key={i} position={[x, 1.5, z]} castShadow>
            <cylinderGeometry args={[0.15, 0.15, 3, 8]} />
            <meshStandardMaterial color="#555555" />
          </mesh>
        )
      })}
      
      {/* Antenas de comunicación */}
      <mesh position={[2, 4.5, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      <mesh position={[-2, 4.5, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Platos de antena */}
      <mesh position={[2, 5.7, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      
      {/* Tanques de oxígeno externos */}
      <mesh position={[3.5, 1.5, 1]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 2, 12]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>
      <mesh position={[3.5, 1.5, -1]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 2, 12]} />
        <meshStandardMaterial color="#4169E1" />
      </mesh>
      
      {/* Generador de energía */}
      <mesh position={[-3.8, 0.8, 0]} castShadow>
        <boxGeometry args={[1, 1.6, 1.5]} />
        <meshStandardMaterial color="#ffaa00" />
      </mesh>
      
      {/* Escape del generador */}
      <mesh position={[-3.8, 2, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Luces exteriores */}
      {Array.from({ length: 4 }, (_, i) => {
        const angle = (i / 4) * Math.PI * 2 + Math.PI / 4
        const x = Math.cos(angle) * 4
        const z = Math.sin(angle) * 4
        
        return (
          <mesh
            key={i}
            position={[x, 3, z]}
            castShadow
          >
            <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
            <meshStandardMaterial
              color="#ffff00"
              emissive="#ffff00"
              emissiveIntensity={0.3}
            />
          </mesh>
        )
      })}
      
      {/* Luces interiores (visibles a través de las ventanas) */}
      {Array.from({ length: 3 }, (_, i) => (
        <pointLight
          key={i}
          ref={(el) => (lightsRef.current[i] = el)}
          position={[
            Math.cos(i * 2) * 1.5,
            2,
            Math.sin(i * 2) * 1.5
          ]}
          intensity={0.3}
          color="#ffffaa"
          distance={4}
        />
      ))}
      
      {/* Luz principal exterior */}
      <spotLight
        position={[0, 6, 0]}
        angle={0.5}
        penumbra={0.3}
        intensity={0.4}
        color="#ffffff"
        distance={15}
        castShadow
      />
      
      {/* Rampa de acceso */}
      <mesh position={[0, 0.3, 5]} receiveShadow>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Barandillas de la rampa */}
      <mesh position={[1, 0.6, 5]} castShadow>
        <boxGeometry args={[0.1, 0.6, 2]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[-1, 0.6, 5]} castShadow>
        <boxGeometry args={[0.1, 0.6, 2]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  )
}