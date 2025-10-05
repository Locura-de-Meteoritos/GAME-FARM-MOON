import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function LunarFlag({ position = [0, 0, 0], ...props }) {
  const flagRef = useRef()
  
  useFrame(({ clock }) => {
    if (flagRef.current) {
      // Simular ondeo de bandera en el viento (aunque no hay viento en la luna!)
      const time = clock.getElapsedTime()
      const vertices = flagRef.current.geometry.attributes.position
      
      for (let i = 0; i < vertices.count; i++) {
        const x = vertices.getX(i)
        
        // Crear ondas en la bandera
        const wave = Math.sin(x * 3 + time * 2) * 0.1 * x
        vertices.setZ(i, wave)
      }
      
      vertices.needsUpdate = true
    }
  })

  return (
    <group position={position} {...props}>
      {/* Asta de la bandera */}
      <mesh position={[0, 2, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 4, 8]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>
      
      {/* Base del asta */}
      <mesh position={[0, 0.2, 0]} receiveShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 8]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Bandera */}
      <mesh
        ref={flagRef}
        position={[1, 3, 0]}
        castShadow
      >
        <planeGeometry args={[2, 1.2, 20, 12]} />
        <meshStandardMaterial
          color="#ff0000"
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Símbolo en la bandera (estrella simple) */}
      <mesh position={[0.8, 3, 0.02]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.02, 5]} />
        <meshStandardMaterial color="#ffff00" />
      </mesh>
      
      {/* Soporte horizontal de la bandera */}
      <mesh position={[1, 3.5, 0]} castShadow>
        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
        <meshStandardMaterial color="#c0c0c0" />
      </mesh>
      
      {/* Placa conmemorativa */}
      <mesh position={[0, 0.8, 0.4]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.1]} />
        <meshStandardMaterial color="#gold" />
      </mesh>
      
      {/* Texto en la placa (simulado con geometría) */}
      <mesh position={[0, 0.9, 0.45]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.02]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
      <mesh position={[0, 0.8, 0.45]} castShadow>
        <boxGeometry args={[0.5, 0.08, 0.02]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
      <mesh position={[0, 0.7, 0.45]} castShadow>
        <boxGeometry args={[0.4, 0.06, 0.02]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
      
      {/* Rocas decorativas alrededor */}
      {Array.from({ length: 5 }, (_, i) => {
        const angle = (i / 5) * Math.PI * 2
        const radius = 1.5 + Math.random() * 0.5
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const scale = Math.random() * 0.3 + 0.2
        
        return (
          <mesh
            key={i}
            position={[x, scale / 2, z]}
            rotation={[
              Math.random() * Math.PI,
              Math.random() * Math.PI,
              Math.random() * Math.PI
            ]}
            scale={[scale, scale, scale]}
            castShadow
          >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#555555" />
          </mesh>
        )
      })}
      
      {/* Luz para resaltar la bandera */}
      <spotLight
        position={[3, 5, 3]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.5}
        color="#ffffff"
        target-position={[0, 2, 0]}
        castShadow
      />
    </group>
  )
}