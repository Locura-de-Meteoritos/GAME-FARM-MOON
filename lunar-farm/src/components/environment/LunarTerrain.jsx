import { useMemo } from 'react'

export default function LunarTerrain() {
  // Generar cráteres aleatorios
  const craters = useMemo(() => {
    const craterArray = []
    for (let i = 0; i < 15; i++) {
      const x = (Math.random() - 0.5) * 80
      const z = (Math.random() - 0.5) * 80
      const radius = Math.random() * 3 + 1
      const depth = Math.random() * 0.5 + 0.2
      
      craterArray.push(
        <mesh
          key={i}
          position={[x, -0.4, z]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[radius, radius * 0.8, depth, 16]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>
      )
    }
    return craterArray
  }, [])

  // Generar rocas lunares
  const rocks = useMemo(() => {
    const rockArray = []
    for (let i = 0; i < 20; i++) {
      const x = (Math.random() - 0.5) * 60
      const z = (Math.random() - 0.5) * 60
      const scale = Math.random() * 0.5 + 0.3
      
      rockArray.push(
        <mesh
          key={i}
          position={[x, scale / 2, z]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ]}
          scale={[scale, scale, scale]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4a4a4a" />
        </mesh>
      )
    }
    return rockArray
  }, [])

  return (
    <group>
      {/* Superficie lunar principal */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 32, 32]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshStandardMaterial 
          color="#6a6a6a"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>
      
      {/* Cráteres */}
      {craters}
      
      {/* Rocas lunares */}
      {rocks}
      
      {/* Grid de referencia para debugging */}
      <gridHelper 
        args={[100, 50, '#333333', '#222222']} 
        position={[0, -0.45, 0]} 
      />
    </group>
  )
}