import { useMemo } from 'react'

export default function CropField({ position = [0, 0, 0], ...props }) {
  // Generar grid de cultivos
  const crops = useMemo(() => {
    const cropArray = []
    const rows = 6
    const cols = 8
    const spacing = 1.2
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = (col - cols / 2) * spacing
        const z = (row - rows / 2) * spacing
        const cropType = Math.floor(Math.random() * 3) // 3 tipos de cultivos
        const growth = Math.random() * 0.8 + 0.4 // Estado de crecimiento
        
        cropArray.push(
          <group key={`${row}-${col}`} position={[x, 0, z]}>
            {/* Parcela de tierra */}
            <mesh position={[0, 0.1, 0]} receiveShadow>
              <boxGeometry args={[1, 0.2, 1]} />
              <meshStandardMaterial color="#654321" />
            </mesh>
            
            {/* Cultivo según tipo */}
            {cropType === 0 && ( // Tomates
              <group>
                <mesh position={[0, 0.2 + growth * 0.5, 0]} castShadow>
                  <cylinderGeometry args={[0.05, 0.08, growth, 6]} />
                  <meshStandardMaterial color="#228B22" />
                </mesh>
                {growth > 0.6 && (
                  <mesh position={[0, 0.2 + growth * 0.8, 0]} castShadow>
                    <sphereGeometry args={[0.15, 8, 6]} />
                    <meshStandardMaterial color="#FF6347" />
                  </mesh>
                )}
              </group>
            )}
            
            {cropType === 1 && ( // Lechugas
              <group>
                <mesh position={[0, 0.2 + growth * 0.3, 0]} castShadow>
                  <sphereGeometry args={[growth * 0.4, 8, 6]} />
                  <meshStandardMaterial color="#90EE90" />
                </mesh>
              </group>
            )}
            
            {cropType === 2 && ( // Zanahorias
              <group>
                {/* Hojas verdes */}
                <mesh position={[0, 0.2 + growth * 0.4, 0]} castShadow>
                  <coneGeometry args={[growth * 0.3, growth * 0.6, 6]} />
                  <meshStandardMaterial color="#32CD32" />
                </mesh>
                {/* Zanahoria bajo tierra (solo visible si está muy desarrollada) */}
                {growth > 0.7 && (
                  <mesh position={[0, 0.05, 0]} castShadow>
                    <coneGeometry args={[0.08, 0.3, 6]} />
                    <meshStandardMaterial color="#FF8C00" />
                  </mesh>
                )}
              </group>
            )}
            
            {/* Sistema de riego (pequeños aspersores) */}
            {(row % 2 === 0 && col % 3 === 0) && (
              <mesh position={[0, 0.8, 0]} castShadow>
                <cylinderGeometry args={[0.05, 0.05, 0.6, 6]} />
                <meshStandardMaterial color="#888888" />
              </mesh>
            )}
          </group>
        )
      }
    }
    
    return cropArray
  }, [])

  return (
    <group position={position} {...props}>
      {/* Base del campo de cultivos */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Borde del campo */}
      <mesh position={[0, 0.2, 4.1]} castShadow>
        <boxGeometry args={[10.2, 0.4, 0.2]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[0, 0.2, -4.1]} castShadow>
        <boxGeometry args={[10.2, 0.4, 0.2]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[5.1, 0.2, 0]} castShadow>
        <boxGeometry args={[0.2, 0.4, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      <mesh position={[-5.1, 0.2, 0]} castShadow>
        <boxGeometry args={[0.2, 0.4, 8]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
      
      {/* Cultivos */}
      {crops}
      
      {/* Letrero del campo */}
      <mesh position={[0, 1.5, 4.5]} castShadow>
        <boxGeometry args={[2, 1, 0.1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0, 2.2, 4.55]} castShadow>
        <boxGeometry args={[1.8, 0.6, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}