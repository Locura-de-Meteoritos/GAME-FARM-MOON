import Greenhouse from './Greenhouse'
import CropField from './CropField'
import WaterTank from './WaterTank'
import StorageBuilding from './StorageBuilding'

export default function FarmStructures() {
  return (
    <group>
      {/* Invernadero principal */}
      <Greenhouse position={[10, 0, 10]} />
      
      {/* Campo de cultivos */}
      <CropField position={[0, 0, 15]} />
      
      {/* Tanque de agua */}
      <WaterTank position={[-8, 0, 12]} />
      
      {/* Edificio de almacenamiento */}
      <StorageBuilding position={[15, 0, -5]} />
      
      {/* Área de cultivos adicional */}
      <CropField position={[-12, 0, 8]} scale={[0.7, 1, 0.7]} />
    </group>
  )
}