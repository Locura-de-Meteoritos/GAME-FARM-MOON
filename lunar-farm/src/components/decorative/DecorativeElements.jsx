import LunarRover from './LunarRover'
import SolarPanels from './SolarPanels'
import LunarFlag from './LunarFlag'
import HabitatBase from './HabitatBase'

export default function DecorativeElements() {
  return (
    <group>
      {/* Rover lunar estacionado */}
      <LunarRover position={[-15, 0, -8]} rotation={[0, Math.PI / 4, 0]} />
      
      {/* Campo de paneles solares */}
      <SolarPanels position={[20, 0, -15]} />
      
      {/* Bandera lunar */}
      <LunarFlag position={[-5, 0, -20]} />
      
      {/* Base habitacional */}
      <HabitatBase position={[-25, 0, 5]} />
      
      {/* Segundo rover más pequeño */}
      <LunarRover 
        position={[25, 0, 10]} 
        rotation={[0, -Math.PI / 3, 0]} 
        scale={[0.7, 0.7, 0.7]} 
      />
      
      {/* Torre de comunicaciones adicional */}
      <group position={[0, 0, -30]}>
        <mesh position={[0, 5, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.15, 10, 8]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
        <mesh position={[0, 0.3, 0]} receiveShadow>
          <cylinderGeometry args={[0.8, 0.8, 0.6, 8]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
        {/* Antenas en la torre */}
        {Array.from({ length: 3 }, (_, i) => {
          const angle = (i / 3) * Math.PI * 2
          const x = Math.cos(angle) * 0.8
          const z = Math.sin(angle) * 0.8
          return (
            <mesh key={i} position={[x, 9 + i * 0.5, z]} castShadow>
              <cylinderGeometry args={[0.2, 0.15, 0.3, 8]} />
              <meshStandardMaterial color="#cccccc" />
            </mesh>
          )
        })}
        
        {/* Luz de navegación */}
        <pointLight
          position={[0, 11, 0]}
          intensity={0.5}
          color="#ff0000"
          distance={20}
        />
      </group>
      
      {/* Depósito de combustible */}
      <group position={[18, 0, 5]}>
        <mesh position={[0, 2, 0]} castShadow>
          <cylinderGeometry args={[1.5, 1.5, 4, 16]} />
          <meshStandardMaterial color="#ff6600" />
        </mesh>
        <mesh position={[0, 0.2, 0]} receiveShadow>
          <cylinderGeometry args={[2, 2, 0.4, 16]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
        {/* Válvulas y tuberías */}
        <mesh position={[1.8, 1, 0]} castShadow>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
        <mesh position={[2.5, 1, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 1.4, 8]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
      </group>
      
      {/* Estación meteorológica */}
      <group position={[-12, 0, 18]}>
        <mesh position={[0, 1, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 2, 8]} />
          <meshStandardMaterial color="#666666" />
        </mesh>
        <mesh position={[0, 2.2, 0]} castShadow>
          <boxGeometry args={[0.6, 0.4, 0.6]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Instrumentos */}
        <mesh position={[0.5, 2.5, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
        <mesh position={[-0.5, 2.5, 0]} castShadow>
          <sphereGeometry args={[0.1, 8, 6]} />
          <meshStandardMaterial color="#444444" />
        </mesh>
      </group>
    </group>
  )
}