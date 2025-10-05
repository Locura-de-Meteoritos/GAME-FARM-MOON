import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function LunarRover({ position = [0, 0, 0], ...props }) {
  const roverRef = useRef()
  const wheelRefs = useRef([])
  
  useFrame(({ clock }) => {
    // Rotación muy lenta de las ruedas
    const time = clock.getElapsedTime()
    wheelRefs.current.forEach((wheel) => {
      if (wheel) {
        wheel.rotation.x = time * 0.2
      }
    })
    
    // Ligero balanceo del rover
    if (roverRef.current) {
      roverRef.current.rotation.z = Math.sin(time * 0.5) * 0.02
    }
  })

  return (
    <group ref={roverRef} position={position} {...props}>
      {/* Cuerpo principal del rover */}
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[2.5, 0.8, 1.8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Panel solar superior */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[2.8, 0.1, 2]} />
        <meshStandardMaterial color="#191970" />
      </mesh>
      
      {/* Ruedas */}
      {[
        [-1, 0.3, -0.8],
        [1, 0.3, -0.8],
        [-1, 0.3, 0.8],
        [1, 0.3, 0.8],
        [-0.5, 0.3, -0.8],
        [0.5, 0.3, -0.8]
      ].map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (wheelRefs.current[i] = el)}
          position={pos}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.4, 0.4, 0.3, 12]} />
          <meshStandardMaterial color="#2f2f2f" />
        </mesh>
      ))}
      
      {/* Suspensión de las ruedas */}
      {[
        [-1, 0.6, -0.8],
        [1, 0.6, -0.8],
        [-1, 0.6, 0.8],
        [1, 0.6, 0.8],
        [-0.5, 0.6, -0.8],
        [0.5, 0.6, -0.8]
      ].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.6, 8]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
      ))}
      
      {/* Antena de comunicaciones */}
      <mesh position={[0.8, 1.3, 0.6]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.8, 8]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Plato de antena */}
      <mesh position={[0.8, 1.8, 0.6]} castShadow>
        <cylinderGeometry args={[0.2, 0.15, 0.05, 16]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      
      {/* Cámara frontal */}
      <mesh position={[0, 1, 1]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 12]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Lente de la cámara */}
      <mesh position={[0, 1, 1.15]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 12]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
      
      {/* Brazo robótico */}
      <group position={[-0.8, 1, 0.8]}>
        <mesh position={[0, 0, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
          <meshStandardMaterial color="#ff6600" />
        </mesh>
        <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 8]} />
          <meshStandardMaterial color="#ff6600" />
        </mesh>
        <mesh position={[0.2, 0.7, 0]} castShadow>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
      </group>
      
      {/* Luces LED */}
      <mesh position={[-0.5, 0.9, 1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[0.5, 0.9, 1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.1, 8]} />
        <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Tanques de combustible laterales */}
      <mesh position={[-1.5, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 12]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      <mesh position={[1.5, 0.8, 0]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 12]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
      
      {/* Instrumentos científicos */}
      <mesh position={[0, 1.1, -0.8]} castShadow>
        <boxGeometry args={[0.3, 0.2, 0.3]} />
        <meshStandardMaterial color="#800080" />
      </mesh>
      
      {/* Luz de trabajo del rover */}
      <spotLight
        position={[0, 1.2, 1.2]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.3}
        color="#ffffff"
        distance={8}
        castShadow
      />
    </group>
  )
}