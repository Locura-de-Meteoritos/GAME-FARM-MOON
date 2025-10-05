# 🔧 Configuración y Troubleshooting

Esta guía te ayudará a configurar correctamente el proyecto y resolver problemas comunes.

## ⚙️ Configuración del Entorno

### **Requisitos del Sistema**

| Componente | Versión Mínima | Recomendada |
|------------|----------------|-------------|
| Node.js | 16.x | 18.x o superior |
| npm | 7.x | 9.x o superior |
| RAM | 4GB | 8GB o superior |
| GPU | WebGL 2.0 | Dedicada |

### **Verificación de Compatibilidad**

```bash
# Verificar versiones
node --version
npm --version

# Verificar soporte WebGL
# Visita: https://webglreport.com/
```

### **Variables de Entorno**

Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
VITE_DEBUG_MODE=false
VITE_PERFORMANCE_MONITORING=true
VITE_MAX_PARTICLES=200
VITE_RENDER_DISTANCE=100
```

---

## 🚀 Instalación Paso a Paso

### **1. Clonar Repositorio**

```bash
git clone https://github.com/Locura-de-Meteoritos/yamil_repository-API.git
cd lunar-farm
```

### **2. Instalación de Dependencias**

```bash
# Limpiar cache de npm (opcional)
npm cache clean --force

# Instalar dependencias
npm install

# Verificar instalación
npm list
```

### **3. Configuración IDE**

**VS Code Extensions Recomendadas:**
- ES7+ React/Redux/React-Native snippets
- Three.js Snippets
- ESLint
- Prettier
- Auto Rename Tag

**Settings.json:**
```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true
}
```

---

## 🐛 Problemas Comunes y Soluciones

### **Error: "Module not found"**

**Síntomas:**
```
Error: Cannot resolve module '@react-three/fiber'
```

**Solución:**
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install

# O usar yarn
yarn install
```

### **Error: "WebGL not supported"**

**Síntomas:**
- Pantalla negra o mensaje de error WebGL

**Solución:**
1. Actualizar drivers de GPU
2. Habilitar aceleración por hardware en el navegador
3. Verificar en `chrome://gpu/`

### **Performance Lenta**

**Síntomas:**
- FPS bajo (<30)
- Lag en movimientos

**Soluciones:**
```javascript
// Reducir partículas
const PARTICLE_COUNT = 50 // En lugar de 200

// Reducir distancia de renderizado
const RENDER_DISTANCE = 50 // En lugar de 100

// Usar geometrías más simples
<sphereGeometry args={[1, 8, 6]} /> // En lugar de [1, 32, 32]
```

### **Error: "Controls not working"**

**Síntomas:**
- WASD no funciona
- Mouse no rota cámara

**Solución:**
```javascript
// Verificar que el cursor esté bloqueado
document.addEventListener('click', () => {
  document.body.requestPointerLock()
})

// Verificar eventos de teclado
console.log('Key pressed:', event.code)
```

### **Error de Build**

**Síntomas:**
```
Build failed with errors
```

**Solución:**
```bash
# Limpiar build anterior
rm -rf dist

# Build con logs detallados
npm run build -- --verbose

# Verificar eslint
npm run lint
```

---

## 🔍 Debugging

### **Debug Mode**

Activar modo debug en `App.jsx`:

```javascript
const DEBUG = true // Cambiar a true

return (
  <Canvas>
    <LunarFarmScene />
    {DEBUG && (
      <>
        <gridHelper args={[100, 50]} />
        <axesHelper args={[5]} />
        <Stats />
      </>
    )}
  </Canvas>
)
```

### **Performance Monitoring**

```javascript
// Agregar stats de rendimiento
import { Stats } from '@react-three/drei'

<Stats 
  showPanel={0} // 0: fps, 1: ms, 2: mb
  className="stats"
/>
```

### **Console Logs**

```javascript
// Debug de movimiento
useFrame(() => {
  if (DEBUG) {
    console.log('Player position:', playerPosition.current)
    console.log('Camera rotation:', camera.rotation)
  }
})
```

---

## 📊 Optimización

### **Configuración de Vite**

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'three': ['three'],
          'r3f': ['@react-three/fiber', '@react-three/drei']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    host: true,
    port: 5173
  }
})
```

### **Optimización de Imágenes**

```bash
# Instalar herramientas de optimización
npm install --save-dev vite-plugin-imagemin

# Configurar en vite.config.js
import { defineConfig } from 'vite'
import { createVitePlugins } from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    react(),
    createVitePlugins({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] }
    })
  ]
})
```

---

## 🌐 Deployment

### **Netlify**

```bash
# Build settings
Build command: npm run build
Publish directory: dist

# Redirect rules (_redirects file)
/*    /index.html   200
```

### **Vercel**

```json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

### **GitHub Pages**

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Script en package.json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

---

## 🔒 Seguridad

### **Content Security Policy**

```html
<!-- En index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-eval'; 
               style-src 'self' 'unsafe-inline';">
```

### **Dependencias Seguras**

```bash
# Auditoría de seguridad
npm audit

# Arreglar vulnerabilidades
npm audit fix

# Verificar licencias
npx license-checker
```

---

## 📱 Compatibilidad Móvil

### **Touch Controls**

```javascript
// Detectar dispositivo móvil
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

// Controles touch
if (isMobile) {
  // Implementar joystick virtual
  // Reducir calidad gráfica
  // Simplificar efectos
}
```

### **Viewport Configuration**

```html
<meta name="viewport" 
      content="width=device-width, 
               initial-scale=1.0, 
               user-scalable=no, 
               maximum-scale=1.0">
```

---

## 🧪 Testing

### **Configuración de Tests**

```bash
# Instalar dependencias de testing
npm install --save-dev vitest @testing-library/react jsdom
```

```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js']
  }
})
```

### **Tests de Componentes**

```javascript
// src/test/PlayerController.test.jsx
import { render } from '@testing-library/react'
import { Canvas } from '@react-three/fiber'
import PlayerController from '../components/player/PlayerController'

test('PlayerController renders without crashing', () => {
  render(
    <Canvas>
      <PlayerController />
    </Canvas>
  )
})
```

---

## 📈 Monitoring

### **Error Tracking**

```javascript
// Error boundary para React
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lunar Farm Error:', error, errorInfo)
    // Enviar a servicio de monitoring
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal en la granja lunar.</h1>
    }

    return this.props.children
  }
}
```

### **Performance Metrics**

```javascript
// Métricas personalizadas
const trackPerformance = () => {
  const navigation = performance.getEntriesByType('navigation')[0]
  
  console.log({
    domContentLoaded: navigation.domContentLoadedEventEnd,
    loadComplete: navigation.loadEventEnd,
    firstPaint: performance.getEntriesByType('paint')[0]?.startTime
  })
}
```

---

## 🔄 Updates y Maintenance

### **Actualización de Dependencias**

```bash
# Verificar outdated packages
npm outdated

# Actualizar patch versions
npm update

# Actualizar major versions (cuidado!)
npx npm-check-updates -u
npm install
```

### **Backup y Versionado**

```bash
# Tags de versión
git tag v1.0.0
git push origin v1.0.0

# Branches de features
git checkout -b feature/new-component
```

---

## 📞 Soporte

Si encuentras problemas no cubiertos aquí:

1. **Revisa los logs** de la consola del navegador
2. **Verifica la compatibilidad** de tu hardware
3. **Actualiza** navegador y drivers
4. **Reporta el bug** con detalles específicos

### **Información para Bug Reports**

- Sistema operativo y versión
- Navegador y versión
- Especificaciones de hardware
- Pasos para reproducir
- Screenshots o videos
- Logs de consola

---

¡Con esta guía deberías poder resolver cualquier problema! 🚀