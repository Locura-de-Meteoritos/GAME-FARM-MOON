import { useRef, useEffect, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import * as THREE from 'three'

export default function PlayerController() {
  const { camera } = useThree()
  const controlsRef = useRef()
  const playerPosition = useRef(new THREE.Vector3(0, 2, 5))
  const velocity = useRef(new THREE.Vector3(0, 0, 0))
  const isOnGround = useRef(true)
  
  // Estado del movimiento
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false
  })

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
  useFrame((state, delta) => {
    const speed = 5 // Velocidad de movimiento
    const jumpForce = 6 // Fuerza de salto
    const gravity = -1.6 // Gravedad lunar
    const groundLevel = 0.5 // Nivel del suelo

    // Obtener la dirección de la cámara
    const direction = new THREE.Vector3()
    const frontVector = new THREE.Vector3(0, 0, Number(movement.backward) - Number(movement.forward))
    const sideVector = new THREE.Vector3(Number(movement.left) - Number(movement.right), 0, 0)
    
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed * delta)
      .applyEuler(camera.rotation)

    // Aplicar movimiento horizontal
    if (movement.forward || movement.backward || movement.left || movement.right) {
      playerPosition.current.add(direction)
    }

    // Aplicar gravedad
    if (!isOnGround.current) {
      velocity.current.y += gravity * delta
    }

    // Salto
    if (movement.jump && isOnGround.current) {
      velocity.current.y = jumpForce
      isOnGround.current = false
    }

    // Aplicar velocidad vertical
    playerPosition.current.y += velocity.current.y * delta

    // Comprobar colisión con el suelo
    if (playerPosition.current.y <= groundLevel) {
      playerPosition.current.y = groundLevel
      velocity.current.y = 0
      isOnGround.current = true
    }

    // Actualizar posición de la cámara
    camera.position.copy(playerPosition.current)
    camera.position.y += 0.5 // Altura de los ojos
  })

  return (
    <>
      {/* Controles de puntero bloqueado */}
      <PointerLockControls ref={controlsRef} />
    </>
  )
}