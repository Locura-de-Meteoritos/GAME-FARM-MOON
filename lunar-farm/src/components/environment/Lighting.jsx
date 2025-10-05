import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Lighting() {
  const sunRef = useRef()
  
  useFrame(({ clock }) => {
    if (sunRef.current) {
      // Simular rotación del sol para efecto día/noche
      const time = clock.getElapsedTime() * 0.1
      sunRef.current.position.x = Math.cos(time) * 20
      sunRef.current.position.y = Math.sin(time) * 10 + 10
      sunRef.current.position.z = Math.sin(time) * 20
    }
  })

  return (
    <>
      {/* Luz ambiental tenue (espacio) */}
      <ambientLight intensity={0.2} color="#4060ff" />
      
      {/* Luz direccional del sol */}
      <directionalLight
        ref={sunRef}
        position={[10, 15, 10]}
        intensity={1.2}
        color="#ffeb99"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      
      {/* Luz puntual para iluminar estructuras */}
      <pointLight
        position={[0, 8, 0]}
        intensity={0.3}
        color="#ffffff"
        distance={15}
      />
    </>
  )
}