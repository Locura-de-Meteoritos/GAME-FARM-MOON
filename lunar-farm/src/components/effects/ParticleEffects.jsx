import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleEffects() {
  const dustParticlesRef = useRef()
  const stardust1Ref = useRef()
  
  // Crear partículas de polvo lunar
  const dustParticles = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      // Posiciones aleatorias en un área grande
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = Math.random() * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      // Velocidades muy lentas
      velocities[i * 3] = (Math.random() - 0.5) * 0.01
      velocities[i * 3 + 1] = Math.random() * 0.005
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.01
    }
    
    return { positions, velocities, count }
  }, [])
  
  // Crear partículas de polvo estelar
  const stardustParticles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200
      positions[i * 3 + 1] = Math.random() * 50 + 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
    }
    
    return { positions, velocities, count }
  }, [])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    // Animar partículas de polvo lunar
    if (dustParticlesRef.current) {
      const positions = dustParticlesRef.current.attributes.position.array
      
      for (let i = 0; i < dustParticles.count; i++) {
        // Movimiento flotante del polvo
        positions[i * 3] += dustParticles.velocities[i * 3]
        positions[i * 3 + 1] += Math.sin(time + i) * 0.001
        positions[i * 3 + 2] += dustParticles.velocities[i * 3 + 2]
        
        // Reiniciar partículas que se alejan mucho
        if (Math.abs(positions[i * 3]) > 50) {
          positions[i * 3] = (Math.random() - 0.5) * 100
        }
        if (Math.abs(positions[i * 3 + 2]) > 50) {
          positions[i * 3 + 2] = (Math.random() - 0.5) * 100
        }
        if (positions[i * 3 + 1] > 5) {
          positions[i * 3 + 1] = 0
        }
      }
      
      dustParticlesRef.current.attributes.position.needsUpdate = true
    }
    
    // Animar polvo estelar
    if (stardust1Ref.current) {
      const positions = stardust1Ref.current.attributes.position.array
      
      for (let i = 0; i < stardustParticles.count; i++) {
        positions[i * 3] += stardustParticles.velocities[i * 3]
        positions[i * 3 + 1] += stardustParticles.velocities[i * 3 + 1]
        positions[i * 3 + 2] += stardustParticles.velocities[i * 3 + 2]
        
        // Reiniciar partículas lejanas
        if (Math.abs(positions[i * 3]) > 100) {
          positions[i * 3] = (Math.random() - 0.5) * 200
        }
        if (Math.abs(positions[i * 3 + 2]) > 100) {
          positions[i * 3 + 2] = (Math.random() - 0.5) * 200
        }
        if (positions[i * 3 + 1] > 60 || positions[i * 3 + 1] < 0) {
          positions[i * 3 + 1] = Math.random() * 50 + 10
        }
      }
      
      stardust1Ref.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <group>
      {/* Partículas de polvo lunar */}
      <points>
        <bufferGeometry ref={dustParticlesRef}>
          <bufferAttribute
            attach="attributes-position"
            count={dustParticles.count}
            array={dustParticles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#cccccc"
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>
      
      {/* Polvo estelar brillante */}
      <points>
        <bufferGeometry ref={stardust1Ref}>
          <bufferAttribute
            attach="attributes-position"
            count={stardustParticles.count}
            array={stardustParticles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#ffffff"
          transparent
          opacity={0.8}
          sizeAttenuation={true}
        />
      </points>
      
      {/* Efectos de respiración del astronauta (simulado) */}
      <group position={[0, 2, 5]}>
        {Array.from({ length: 5 }, (_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 2) * 0.2,
              Math.cos(i * 2) * 0.1,
              Math.sin(i * 3) * 0.2
            ]}
          >
            <sphereGeometry args={[0.02, 6, 4]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.3 - i * 0.05}
            />
          </mesh>
        ))}
      </group>
    </group>
  )
}