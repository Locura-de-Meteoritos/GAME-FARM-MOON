import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function SolarPanels({ position = [0, 0, 0], ...props }) {
  const panelRefs = useRef([])
  
  useFrame(({ clock }) => {
    // Rotación lenta de los paneles siguiendo el sol
    const time = clock.getElapsedTime()
    panelRefs.current.forEach((panel, i) => {
      if (panel) {
        panel.rotation.y = Math.sin(time * 0.1 + i) * 0.3
        panel.rotation.x = Math.cos(time * 0.1 + i) * 0.1
      }
    })
  })

  return (
    <group position={position} {...props}>
      {/* Array de paneles solares */}
      {Array.from({ length: 6 }, (_, i) => {
        const x = (i % 3 - 1) * 3
        const z = Math.floor(i / 3) * 3
        
        return (
          <group key={i} position={[x, 0, z]}>
            {/* Soporte del panel */}
            <mesh position={[0, 1, 0]} castShadow>
              <cylinderGeometry args={[0.1, 0.15, 2, 8]} />
              <meshStandardMaterial color="#666666" />
            </mesh>
            
            {/* Base del soporte */}
            <mesh position={[0, 0.2, 0]} receiveShadow>
              <cylinderGeometry args={[0.4, 0.4, 0.4, 8]} />
              <meshStandardMaterial color="#888888" />
            </mesh>
            
            {/* Panel solar */}
            <mesh
              ref={(el) => (panelRefs.current[i] = el)}
              position={[0, 2.2, 0]}
              castShadow
            >
              <boxGeometry args={[2, 0.1, 1.5]} />
              <meshStandardMaterial color="#191970" metalness={0.8} roughness={0.1} />
            </mesh>
            
            {/* Grid del panel solar */}
            {Array.from({ length: 3 }, (_, row) =>
              Array.from({ length: 4 }, (_, col) => (
                <mesh
                  key={`${row}-${col}`}
                  position={[
                    (col - 1.5) * 0.45,
                    2.25,
                    (row - 1) * 0.45
                  ]}
                >
                  <boxGeometry args={[0.4, 0.02, 0.4]} />
                  <meshStandardMaterial color="#000080" />
                </mesh>
              ))
            )}
            
            {/* Caja de control */}
            <mesh position={[0, 0.8, 0]} castShadow>
              <boxGeometry args={[0.3, 0.3, 0.2]} />
              <meshStandardMaterial color="#444444" />
            </mesh>
            
            {/* Indicador LED */}
            <mesh position={[0, 0.8, 0.15]} castShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.05, 8]} />
              <meshStandardMaterial 
                color="#00ff00" 
                emissive="#00ff00" 
                emissiveIntensity={0.5} 
              />
            </mesh>
            
            {/* Cables */}
            <mesh position={[0.2, 1.5, 0]} castShadow>
              <cylinderGeometry args={[0.02, 0.02, 1.5, 8]} />
              <meshStandardMaterial color="#000000" />
            </mesh>
          </group>
        )
      })}
      
      {/* Estación de control central */}
      <mesh position={[0, 1, -4]} castShadow>
        <boxGeometry args={[1.5, 2, 1]} />
        <meshStandardMaterial color="#cccccc" />
      </mesh>
      
      {/* Pantalla de monitoreo */}
      <mesh position={[0, 1.5, -3.4]} castShadow>
        <boxGeometry args={[0.8, 0.6, 0.1]} />
        <meshStandardMaterial color="#000080" emissive="#001155" emissiveIntensity={0.3} />
      </mesh>
      
      {/* Antena de comunicación */}
      <mesh position={[0, 2.5, -4]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Cableado principal */}
      {Array.from({ length: 6 }, (_, i) => {
        const x = (i % 3 - 1) * 3
        const z = Math.floor(i / 3) * 3
        
        return (
          <mesh
            key={i}
            position={[x / 2, 0.1, (z - 4) / 2]}
            rotation={[0, Math.atan2(-4 - z, -x), 0]}
            castShadow
          >
            <cylinderGeometry args={[0.03, 0.03, Math.sqrt(x * x + (z + 4) * (z + 4)) / 2, 8]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
        )
      })}
    </group>
  )
}