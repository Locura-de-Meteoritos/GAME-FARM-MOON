import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useEffect } from 'react'
import LunarFarmScene from './components/LunarFarmScene'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [fps, setFps] = useState(0)

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Monitor de FPS simple
    let lastTime = performance.now()
    let frameCount = 0

    const updateFPS = () => {
      const currentTime = performance.now()
      frameCount++

      if (currentTime - lastTime >= 1000) {
        setFps(Math.round(frameCount * 1000 / (currentTime - lastTime)))
        frameCount = 0
        lastTime = currentTime
      }

      requestAnimationFrame(updateFPS)
    }

    updateFPS()

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-message fade-in">
        <div className="loading-spinner"></div>
        <h2>Inicializando Granja Lunar...</h2>
        <p>Cargando entorno 3D</p>
      </div>
    )
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 75 }}
        gl={{ antialias: true, alpha: false }}
        shadows
      >
        <Suspense fallback={null}>
          <LunarFarmScene />
        </Suspense>
      </Canvas>
      
      {/* UI Overlay */}
      <div className="ui-overlay fade-in">
        {/* Panel de información */}
        <div className="info-panel">
          <h3>🚀 Granja Lunar</h3>
          <div className="control-info">
            <strong>WASD:</strong> Movimiento
          </div>
          <div className="control-info">
            <strong>Mouse:</strong> Vista
          </div>
          <div className="control-info">
            <strong>Espacio:</strong> Salto
          </div>
          <div className="control-info">
            <strong>Click:</strong> Bloquear cursor
          </div>
          <div className="control-info" style={{ marginTop: '10px', fontSize: '12px', color: '#888' }}>
            Explora la granja lunar y descubre todos los elementos
          </div>
        </div>

        {/* Indicador de estado */}
        <div className="status-indicator">
          <div>
            <span className="status-dot"></span>
            Sistema Activo
          </div>
          <div style={{ fontSize: '11px', marginTop: '5px' }}>
            FPS: {fps}
          </div>
          <div style={{ fontSize: '11px' }}>
            Gravedad: Luna (1.6 m/s²)
          </div>
        </div>

        {/* Crosshair */}
        <div className="crosshair"></div>

        {/* Mini-mapa */}
        <div className="minimap">
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '4px',
            height: '4px',
            background: '#0f5',
            borderRadius: '50%'
          }}></div>
          {/* Puntos de interés en el mini-mapa */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '70%',
            width: '3px',
            height: '3px',
            background: '#ff4',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '60%',
            left: '40%',
            width: '3px',
            height: '3px',
            background: '#f84',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '20%',
            width: '3px',
            height: '3px',
            background: '#48f',
            borderRadius: '50%'
          }}></div>
        </div>

        {/* Pista interactiva */}
        <div className="interactive-hint">
          Usa WASD para moverte y el mouse para mirar alrededor
        </div>
      </div>
    </div>
  )
}

export default App
