import LunarTerrain from './environment/LunarTerrain'
import Skybox from './environment/Skybox'
import Lighting from './environment/Lighting'
import PlayerController from './player/PlayerController'
import FarmStructures from './farm/FarmStructures'
import DecorativeElements from './decorative/DecorativeElements'
import ParticleEffects from './effects/ParticleEffects'

export default function LunarFarmScene() {
  return (
    <>
      {/* Iluminación */}
      <Lighting />
      
      {/* Cielo y ambiente */}
      <Skybox />
      
      {/* Terreno lunar */}
      <LunarTerrain />
      
      {/* Controlador del jugador */}
      <PlayerController />
      
      {/* Estructuras de la granja */}
      <FarmStructures />
      
      {/* Elementos decorativos */}
      <DecorativeElements />
      
      {/* Efectos de partículas */}
      <ParticleEffects />
    </>
  )
}