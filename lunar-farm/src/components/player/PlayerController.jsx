import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import { useBox } from '@react-three/cannon'
import * as THREE from 'three'
import Astronaut from './Astronaut'

export default function PlayerController() {
  const { camera } = useThree()
  const controlsRef = useRef()
  
  // Estado del movimiento
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false
  })

  // Cuerpo físico del jugador
  const [playerRef, playerApi] = useBox(() => ({
    mass: 1,
    position: [0, 2, 5],
    args: [0.6, 1.8, 0.6],
    material: { friction: 0.1, restitution: 0.1 }
  }))

  // Velocidad y dirección
  const velocity = useRef([0, 0, 0])
  const direction = useRef(new THREE.Vector3())
  const frontVector = useRef(new THREE.Vector3())
  const sideVector = useRef(new THREE.Vector3())

  // Suscribirse a la velocidad del cuerpo físico
  useEffect(() => {
    const unsubscribe = playerApi.velocity.subscribe((v) => velocity.current = v)
    return unsubscribe
  }, [playerApi.velocity])

  // Manejo de eventos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          setMovement(m => ({ ...m, forward: true }))
          break
        case 'KeyS':
        case 'ArrowDown':
          setMovement(m => ({ ...m, backward: true }))
          break
        case 'KeyA':
        case 'ArrowLeft':
          setMovement(m => ({ ...m, left: true }))
          break
        case 'KeyD':
        case 'ArrowRight':
          setMovement(m => ({ ...m, right: true }))
          break
        case 'Space':
          event.preventDefault()
          setMovement(m => ({ ...m, jump: true }))
          break
      }
    }

    const handleKeyUp = (event) => {
      switch (event.code) {
        case 'KeyW':
        case 'ArrowUp':
          setMovement(m => ({ ...m, forward: false }))
          break
        case 'KeyS':
        case 'ArrowDown':
          setMovement(m => ({ ...m, backward: false }))
          break
        case 'KeyA':
        case 'ArrowLeft':
          setMovement(m => ({ ...m, left: false }))
          break
        case 'KeyD':
        case 'ArrowRight':
          setMovement(m => ({ ...m, right: false }))
          break
        case 'Space':
          setMovement(m => ({ ...m, jump: false }))
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  // Actualizar movimiento y cámara
  useFrame(() => {
    if (!playerRef.current) return

    // Obtener la dirección de la cámara
    frontVector.current.set(0, 0, Number(movement.backward) - Number(movement.forward))
    sideVector.current.set(Number(movement.left) - Number(movement.right), 0, 0)
    
    direction.current
      .subVectors(frontVector.current, sideVector.current)
      .normalize()
      .multiplyScalar(3) // Velocidad de movimiento
      .applyEuler(camera.rotation)

    // Aplicar movimiento horizontal
    playerApi.velocity.set(direction.current.x, velocity.current[1], direction.current.z)

    // Salto (gravedad lunar más baja)
    if (movement.jump && Math.abs(velocity.current[1]) < 0.05) {
      playerApi.velocity.set(velocity.current[0], 4, velocity.current[2])
    }

    // Posicionar la cámara en la posición del jugador
    const playerPosition = playerRef.current.position
    camera.position.set(
      playerPosition.x,
      playerPosition.y + 0.5, // Altura de los ojos
      playerPosition.z
    )
  })

  return (
    <>
      {/* Controles de puntero bloqueado */}
      <PointerLockControls ref={controlsRef} />
      
      {/* Cuerpo invisible del jugador para físicas */}
      <mesh ref={playerRef} visible={false}>
        <boxGeometry args={[0.6, 1.8, 0.6]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
      
      {/* Modelo visual del astronauta (opcional, para tercera persona) */}
      {/* <Astronaut position={[0, 0, 0]} /> */}
    </>
  )
}