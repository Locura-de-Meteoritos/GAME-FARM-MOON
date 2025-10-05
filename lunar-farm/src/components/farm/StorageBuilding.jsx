export default function StorageBuilding({ position = [0, 0, 0], ...props }) {
  return (
    <group position={position} {...props}>
      {/* Estructura principal del edificio */}
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 3, 6]} />
        <meshStandardMaterial color="#d3d3d3" />
      </mesh>
      
      {/* Techo */}
      <mesh position={[0, 3.2, 0]} castShadow>
        <boxGeometry args={[4.2, 0.4, 6.2]} />
        <meshStandardMaterial color="#696969" />
      </mesh>
      
      {/* Puerta principal */}
      <mesh position={[0, 1, 3.1]} castShadow>
        <boxGeometry args={[1.5, 2, 0.2]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Manija de la puerta */}
      <mesh position={[0.6, 1, 3.2]} castShadow>
        <sphereGeometry args={[0.05, 8, 6]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
      
      {/* Ventanas laterales */}
      <mesh position={[2.1, 1.8, 0]} castShadow>
        <boxGeometry args={[0.2, 1, 1.5]} />
        <meshStandardMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.7}
        />
      </mesh>
      <mesh position={[-2.1, 1.8, 0]} castShadow>
        <boxGeometry args={[0.2, 1, 1.5]} />
        <meshStandardMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.7}
        />
      </mesh>
      
      {/* Base del edificio */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[4.5, 0.2, 6.5]} />
        <meshStandardMaterial color="#708090" />
      </mesh>
      
      {/* Contenedores de almacenamiento exterior */}
      {Array.from({ length: 6 }, (_, i) => {
        const x = (i % 3 - 1) * 1.2
        const z = Math.floor(i / 3) * 1.5 - 0.75
        const height = Math.random() * 0.8 + 0.6
        
        return (
          <mesh 
            key={i} 
            position={[x + 3.5, height / 2, z]} 
            castShadow
          >
            <boxGeometry args={[0.8, height, 0.8]} />
            <meshStandardMaterial color="#FF6347" />
          </mesh>
        )
      })}
      
      {/* Contenedores al otro lado */}
      {Array.from({ length: 4 }, (_, i) => {
        const x = (i % 2 - 0.5) * 1.5
        const z = Math.floor(i / 2) * 1.2 - 0.6
        const height = Math.random() * 0.6 + 0.4
        
        return (
          <mesh 
            key={i} 
            position={[x - 3.5, height / 2, z]} 
            castShadow
          >
            <boxGeometry args={[0.6, height, 0.6]} />
            <meshStandardMaterial color="#32CD32" />
          </mesh>
        )
      })}
      
      {/* Antena de comunicaciones */}
      <mesh position={[0, 4, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.5, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Plato de la antena */}
      <mesh position={[0, 4.8, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.3, 0.1, 16]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Letrero del edificio */}
      <mesh position={[0, 2.5, 3.15]} castShadow>
        <boxGeometry args={[2, 0.5, 0.05]} />
        <meshStandardMaterial color="#000080" />
      </mesh>
      
      {/* Luces exteriores */}
      <pointLight
        position={[0, 2.5, 4]}
        intensity={0.5}
        color="#ffffff"
        distance={10}
      />
      
      {/* Escalones de entrada */}
      <mesh position={[0, 0.3, 3.8]} receiveShadow>
        <boxGeometry args={[2, 0.4, 0.8]} />
        <meshStandardMaterial color="#696969" />
      </mesh>
    </group>
  )
}