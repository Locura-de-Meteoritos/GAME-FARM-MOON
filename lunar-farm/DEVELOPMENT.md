# 📖 Guía de Desarrollo - Granja Lunar 3D

Esta guía proporciona información detallada para desarrolladores que quieran entender, modificar o contribuir al proyecto.

## 🏗️ Arquitectura del Proyecto

### **Patrón de Componentes**

El proyecto sigue una arquitectura modular basada en React y Three.js:

```
LunarFarmScene (Escena Principal)
├── Lighting (Sistema de Iluminación)
├── Skybox (Cielo y Ambiente)
├── LunarTerrain (Terreno)
├── PlayerController (Controles de Jugador)
├── FarmStructures (Estructuras de Granja)
├── DecorativeElements (Elementos Decorativos)
└── ParticleEffects (Efectos de Partículas)
```

### **Flujo de Datos**

1. **App.jsx** - Componente raíz con Canvas de Three.js
2. **LunarFarmScene.jsx** - Orquesta todos los componentes 3D
3. **PlayerController.jsx** - Maneja input y movimiento
4. **Componentes específicos** - Renderizan objetos 3D

---

## 🎮 Sistema de Controles

### **Implementación del Movimiento**

```javascript
// PlayerController.jsx - Sistema de movimiento personalizado
const useFrame = (state, delta) => {
  const speed = 5 // Velocidad base
  const jumpForce = 6 // Fuerza de salto
  const gravity = -1.6 // Gravedad lunar
  
  // Aplicar movimiento basado en dirección de cámara
  direction.normalize().multiplyScalar(speed * delta)
  playerPosition.current.add(direction)
  
  // Sistema de gravedad y salto
  if (!isOnGround.current) {
    velocity.current.y += gravity * delta
  }
}
```

### **Detección de Input**

```javascript
// Manejo de eventos de teclado
useEffect(() => {
  const handleKeyDown = (event) => {
    switch (event.code) {
      case 'KeyW': setMovement(m => ({ ...m, forward: true })); break;
      case 'KeyA': setMovement(m => ({ ...m, left: true })); break;
      // ... más controles
    }
  }
}, [])
```

---

## 🌍 Sistema de Ambiente

### **Terreno Procedural**

```javascript
// LunarTerrain.jsx - Generación de cráteres
const craters = useMemo(() => {
  const craterArray = []
  for (let i = 0; i < 15; i++) {
    const x = (Math.random() - 0.5) * 80
    const z = (Math.random() - 0.5) * 80
    const radius = Math.random() * 3 + 1
    // Crear geometría de cráter
  }
  return craterArray
}, [])
```

### **Iluminación Dinámica**

```javascript
// Lighting.jsx - Sistema día/noche
useFrame(({ clock }) => {
  const time = clock.getElapsedTime() * 0.1
  sunRef.current.position.x = Math.cos(time) * 20
  sunRef.current.position.y = Math.sin(time) * 10 + 10
})
```

---

## 🏗️ Componentes de Estructuras

### **Invernadero (Greenhouse.jsx)**

```javascript
// Domo transparente con animación
<mesh position={[0, 2, 0]} castShadow receiveShadow>
  <sphereGeometry args={[4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2]} />
  <meshStandardMaterial
    color="#e6f3ff"
    transparent
    opacity={0.3}
    side={THREE.DoubleSide}
  />
</mesh>
```

### **Campo de Cultivos (CropField.jsx)**

```javascript
// Generación procedural de plantas
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const cropType = Math.floor(Math.random() * 3)
    const growth = Math.random() * 0.8 + 0.4
    // Renderizar cultivo basado en tipo y crecimiento
  }
}
```

---

## 🎨 Sistema de Efectos

### **Partículas (ParticleEffects.jsx)**

```javascript
// Sistema de partículas optimizado
const dustParticles = useMemo(() => {
  const count = 200
  const positions = new Float32Array(count * 3)
  const velocities = new Float32Array(count * 3)
  
  for (let i = 0; i < count; i++) {
    // Inicializar posiciones y velocidades
    positions[i * 3] = (Math.random() - 0.5) * 100
    velocities[i * 3] = (Math.random() - 0.5) * 0.01
  }
  
  return { positions, velocities, count }
}, [])
```

### **Animaciones**

```javascript
// Animación de rover con ruedas giratorias
useFrame(({ clock }) => {
  const time = clock.getElapsedTime()
  wheelRefs.current.forEach((wheel) => {
    if (wheel) wheel.rotation.x = time * 0.2
  })
})
```

---

## ⚡ Optimización de Rendimiento

### **Mejores Prácticas**

1. **useMemo para Geometrías Complejas**
```javascript
const complexGeometry = useMemo(() => {
  // Computaciones pesadas solo una vez
  return generateComplexMesh()
}, [dependencies])
```

2. **Instancing para Objetos Repetidos**
```javascript
// Para muchos objetos similares (rocas, plantas)
<instancedMesh ref={meshRef} args={[geometry, material, count]} />
```

3. **Level of Detail (LOD)**
```javascript
// Reducir detalle según distancia
const distance = camera.position.distanceTo(objectPosition)
const detail = distance > 50 ? 'low' : 'high'
```

### **Métricas de Rendimiento**

- **Target FPS:** 60 fps
- **Triángulos:** < 100k en pantalla
- **Draw calls:** < 100 por frame
- **Memoria:** < 500MB

---

## 🔧 Configuración y Build

### **Vite Configuration**

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
})
```

### **ESLint Rules**

```javascript
// eslint.config.js - Reglas personalizadas
export default [
  // Configuración para React y Three.js
  {
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
    }
  }
]
```

---

## 🧪 Testing

### **Tipos de Tests Recomendados**

1. **Unit Tests** - Componentes individuales
2. **Integration Tests** - Interacción entre componentes
3. **Performance Tests** - Métricas de rendimiento
4. **Visual Tests** - Screenshots comparativos

### **Herramientas Sugeridas**

```bash
npm install --save-dev @testing-library/react vitest
```

---

## 📦 Deployment

### **Build de Producción**

```bash
npm run build
```

### **Optimizaciones de Deploy**

1. **Compression** - Gzip/Brotli
2. **CDN** - Assets estáticos
3. **Caching** - Headers apropiados
4. **Bundle Analysis** - Webpack Bundle Analyzer

---

## 🐛 Debugging

### **Herramientas de Debug**

1. **React DevTools** - Estado de componentes
2. **Three.js Inspector** - Objetos 3D
3. **Performance Tab** - Profiling de rendimiento
4. **Leva** - Controls en tiempo real

### **Debug Mode**

```javascript
// Activar helpers de debug
const DEBUG = import.meta.env.DEV

{DEBUG && (
  <>
    <gridHelper args={[100, 50]} />
    <axesHelper args={[5]} />
    <Stats />
  </>
)}
```

---

## 🔄 Estado de la Aplicación

### **Gestión de Estado**

```javascript
// Estado global simple con Context
const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    playerPosition: [0, 2, 5],
    timeOfDay: 'day',
    inventory: []
  })
  
  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  )
}
```

---

## 📚 Recursos Adicionales

### **Documentación Oficial**

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [React Three Drei](https://docs.pmnd.rs/drei)

### **Tutoriales Recomendados**

- Three.js Journey
- React Three Fiber Fundamentals
- WebGL and GLSL Shaders

### **Comunidad**

- [Three.js Discord](https://discord.gg/HF4UdyF)
- [Poimandres Discord](https://discord.gg/poimandres)
- [r/threejs](https://reddit.com/r/threejs)

---

**¡Happy coding! 🚀**