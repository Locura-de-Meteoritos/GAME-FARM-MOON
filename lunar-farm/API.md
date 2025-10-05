# 📋 API Reference - Componentes y Props

Esta documentación describe todos los componentes disponibles, sus props y cómo utilizarlos.

## 🎬 Componentes Principales

### **LunarFarmScene**

**Descripción:** Componente principal que orquesta toda la escena 3D.

**Ubicación:** `src/components/LunarFarmScene.jsx`

**Props:** Ninguna

**Uso:**
```jsx
import LunarFarmScene from './components/LunarFarmScene'

<Canvas>
  <LunarFarmScene />
</Canvas>
```

---

## 🌍 Componentes de Ambiente

### **LunarTerrain**

**Descripción:** Genera el terreno lunar con cráteres y rocas procedurales.

**Props:**
- Sin props requeridas
- Genera contenido proceduralmente

**Características:**
- 15 cráteres aleatorios
- 20 rocas distribuidas
- Grid de referencia
- Superficie de 100x100 unidades

### **Skybox**

**Descripción:** Cielo espacial con estrellas y la Tierra.

**Props:**
- Sin props requeridas

**Elementos incluidos:**
- Campo de 5000 estrellas
- Tierra animada en la distancia
- Atmósfera terrestre
- Fondo espacial

### **Lighting**

**Descripción:** Sistema de iluminación dinámico día/noche.

**Props:**
- Sin props requeridas

**Luces incluidas:**
- Luz direccional (Sol) rotativa
- Luz ambiental azulada
- Luz puntual central

---

## 🎮 Componentes de Jugador

### **PlayerController**

**Descripción:** Maneja el movimiento del jugador en primera persona.

**Props:**
- Sin props requeridas

**Características:**
- Movimiento WASD
- Rotación con mouse
- Salto con gravedad lunar
- Colisión con suelo

### **Astronaut**

**Descripción:** Modelo 3D del astronauta (opcional, para tercera persona).

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición en el espacio 3D |
| `...props` | `object` | - | Props adicionales de Three.js |

**Uso:**
```jsx
<Astronaut position={[5, 1, 10]} rotation={[0, Math.PI, 0]} />
```

---

## 🏗️ Componentes de Granja

### **FarmStructures**

**Descripción:** Contenedor que agrupa todas las estructuras de la granja.

**Props:**
- Sin props requeridas

**Estructuras incluidas:**
- Invernadero principal
- Campo de cultivos
- Tanque de agua
- Edificio de almacenamiento

### **Greenhouse**

**Descripción:** Invernadero con domo transparente y plantas interiores.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición del invernadero |
| `...props` | `object` | - | Props adicionales |

**Características:**
- Domo transparente animado
- 12 plantas procedurales
- Sistema de ventilación
- Estructura de soporte

### **CropField**

**Descripción:** Campo de cultivos con plantas procedurales.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición del campo |
| `...props` | `object` | - | Props adicionales |

**Tipos de cultivos:**
- Tomates (tipo 0)
- Lechugas (tipo 1) 
- Zanahorias (tipo 2)

### **WaterTank**

**Descripción:** Tanque de agua con efectos de ondas.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición del tanque |
| `...props` | `object` | - | Props adicionales |

**Elementos:**
- Tanque principal con agua animada
- Soportes estructurales
- Tuberías y válvulas
- Escalera de acceso

### **StorageBuilding**

**Descripción:** Edificio de almacenamiento con contenedores.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición del edificio |
| `...props` | `object` | - | Props adicionales |

**Características:**
- Estructura principal
- Puerta y ventanas
- Contenedores exteriores
- Antena de comunicaciones

---

## 🛸 Componentes Decorativos

### **DecorativeElements**

**Descripción:** Agrupa todos los elementos decorativos del entorno.

**Props:**
- Sin props requeridas

**Elementos incluidos:**
- Rover lunar
- Paneles solares
- Bandera lunar
- Base habitacional
- Torre de comunicaciones

### **LunarRover**

**Descripción:** Vehículo rover con animaciones.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición del rover |
| `...props` | `object` | - | Props adicionales |

**Características:**
- 6 ruedas giratorias
- Brazo robótico
- Panel solar superior
- Antena de comunicaciones

### **SolarPanels**

**Descripción:** Array de paneles solares con seguimiento solar.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición del array |
| `...props` | `object` | - | Props adicionales |

**Características:**
- 6 paneles rotativos
- Estación de control central
- Cableado visible
- LEDs indicadores

### **LunarFlag**

**Descripción:** Bandera lunar con efecto de ondeo.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición de la bandera |
| `...props` | `object` | - | Props adicionales |

**Características:**
- Asta metálica
- Bandera ondeando
- Placa conmemorativa
- Rocas decorativas

### **HabitatBase**

**Descripción:** Base habitacional con luces interiores.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `position` | `[number, number, number]` | `[0, 0, 0]` | Posición de la base |
| `...props` | `object` | - | Props adicionales |

**Características:**
- Módulo cilíndrico principal
- Ventanas circulares iluminadas
- Esclusa de aire
- Antenas de comunicación

---

## ✨ Componentes de Efectos

### **ParticleEffects**

**Descripción:** Sistema de partículas para ambiente inmersivo.

**Props:**
- Sin props requeridas

**Tipos de partículas:**
- Polvo lunar (200 partículas)
- Polvo estelar (100 partículas)
- Efectos de respiración

**Optimización:**
- BufferGeometry para performance
- Reutilización de partículas
- Límites de área activa

---

## 🎨 Hooks Personalizados

### **usePlayerMovement**

**Descripción:** Hook para manejar el movimiento del jugador.

```jsx
const usePlayerMovement = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false
  })
  
  // Lógica de movimiento...
  
  return { movement, updateMovement }
}
```

---

## ⚙️ Configuración Global

### **Constantes de Juego**

```jsx
// src/constants/gameConstants.js
export const GAME_CONFIG = {
  GRAVITY: -1.6,           // Gravedad lunar
  PLAYER_SPEED: 5,         // Velocidad de movimiento
  JUMP_FORCE: 6,           // Fuerza de salto
  GROUND_LEVEL: 0.5,       // Nivel del suelo
  RENDER_DISTANCE: 100,    // Distancia de renderizado
  PARTICLE_COUNT: 200      // Número de partículas
}
```

### **Materiales Compartidos**

```jsx
// src/materials/lunarMaterials.js
export const LUNAR_MATERIALS = {
  ground: new MeshStandardMaterial({
    color: "#6a6a6a",
    roughness: 0.9,
    metalness: 0.1
  }),
  
  metal: new MeshStandardMaterial({
    color: "#888888",
    roughness: 0.3,
    metalness: 0.8
  })
}
```

---

## 🔧 Utilities

### **Funciones de Utilidad**

```jsx
// src/utils/mathUtils.js

// Generar posición aleatoria en área
export const randomPosition = (min, max) => ({
  x: (Math.random() - 0.5) * (max - min),
  z: (Math.random() - 0.5) * (max - min)
})

// Calcular distancia entre puntos
export const distance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos2.x - pos1.x, 2) +
    Math.pow(pos2.z - pos1.z, 2)
  )
}
```

---

## 📱 Responsive Design

### **Breakpoints**

```jsx
// src/hooks/useResponsive.js
export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return { isMobile }
}
```

---

## 🎯 Performance Tips

### **Optimización de Componentes**

1. **Usar React.memo para componentes estáticos**
```jsx
const LunarRover = React.memo(({ position, ...props }) => {
  // Componente optimizado
})
```

2. **useMemo para geometrías complejas**
```jsx
const complexGeometry = useMemo(() => {
  return new ComplexGeometry()
}, [dependencies])
```

3. **useCallback para funciones**
```jsx
const handleMovement = useCallback((direction) => {
  // Lógica de movimiento
}, [dependencies])
```

---

## 🐛 Debugging

### **Debug Components**

```jsx
// src/debug/DebugInfo.jsx
export const DebugInfo = ({ visible = false }) => {
  if (!visible) return null
  
  return (
    <>
      <gridHelper args={[100, 50]} />
      <axesHelper args={[5]} />
      <Stats />
    </>
  )
}
```

---

¡Esta documentación te ayudará a entender y modificar cualquier aspecto del proyecto! 🚀