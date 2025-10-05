# 🌙 Granja Lunar 3D - Lunar Farm Simulator

**Una experiencia 3D inmersiva de agricultura espacial construida con React, Three.js y Vite**

[![Vite](https://img.shields.io/badge/Vite-7.1.9-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🚀 Descripción del Proyecto

**Granja Lunar 3D** es una simulación interactiva que te permite explorar una granja espacial en la superficie de la Luna. El proyecto combina tecnologías web modernas para crear una experiencia inmersiva con gráficos low-poly estilo Minecraft, físicas realistas y controles intuitivos de primera persona.

### 🎯 **Objetivo**

Crear un entorno 3D educativo y entretenido que simule la agricultura en condiciones lunares, incluyendo estructuras futuristas, vehículos espaciales y efectos ambientales realistas.

---

## ✨ Características Principales

### 🌍 **Entorno Lunar Realista**

- **Superficie lunar** con cráteres procedurales y rocas
- **Cielo estrellado** con la Tierra visible en la distancia  
- **Iluminación dinámica** que simula el sol con rotación día/noche
- **Gravedad lunar** reducida (1/6 de la terrestre)
- **Efectos de partículas** de polvo lunar y polvo estelar

### 👨‍🚀 **Astronauta Jugador**

- **Modelo low-poly** detallado con casco, traje y mochila de oxígeno
- **Controles de primera persona** fluidos y responsivos
- **Sistema de movimiento** con WASD + mouse
- **Físicas realistas** con salto lunar
- **Animaciones** suaves y naturales

### 🏗️ **Estructuras de Granja**

- **Invernadero con domo transparente** y plantas en crecimiento
- **Campos de cultivos** con diferentes tipos de plantas
- **Sistema de riego** con tanques de agua y tuberías
- **Edificio de almacenamiento** con contenedores
- **Infraestructura** de soporte y distribución

### 🛸 **Elementos Decorativos**

- **Rover lunar** con ruedas giratorias y brazo robótico
- **Paneles solares** con seguimiento automático del sol
- **Bandera lunar** ondeando con efectos de viento simulado
- **Base habitacional** con ventanas iluminadas
- **Torre de comunicaciones** con antenas giratorias
- **Estación meteorológica** con instrumentos científicos

### 🎨 **Efectos Visuales**

- **Sistema de partículas** con polvo lunar y polvo estelar
- **Iluminación dinámica** con sombras en tiempo real
- **Materiales PBR** para realismo visual
- **Animaciones procedurales** en estructuras
- **UI moderna** con HUD informativo y mini-mapa

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**

- **React 19.2.0** - Framework de UI
- **Vite 7.1.9** - Build tool y dev server
- **JavaScript ES6+** - Lenguaje principal
- **CSS3** - Estilos y animaciones

### **3D y Físicas**

- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers y componentes útiles
- **Three.js** - Motor 3D principal
- **Física personalizada** - Sistema de gravedad y colisiones

### **Características Técnicas**

- **ESLint** configurado para desarrollo
- **Hot Module Replacement** para desarrollo rápido
- **Optimización automática** de assets
- **Compatibilidad cross-browser** moderna
- **Responsive design** adaptable

---

## 🚀 Instalación y Uso

### **Prerrequisitos**

- Node.js 16+ instalado
- npm o yarn como gestor de paquetes
- Navegador moderno con soporte WebGL
- Git para clonar el repositorio

### **Pasos de Instalación**

1. **Clonar el repositorio**

```bash
git clone https://github.com/Locura-de-Meteoritos/yamil_repository-API.git
cd lunar-farm
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en navegador**

- Navega a `http://localhost:5173/`
- Haz clic en la pantalla para bloquear el cursor
- Usa WASD para moverte y el mouse para mirar

### **Comandos Disponibles**

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Verificar código con ESLint
```

---

## 🎮 Controles del Juego

| Tecla/Acción | Función |
|--------------|---------|
| **W** | Mover hacia adelante |
| **A** | Mover hacia la izquierda |
| **S** | Mover hacia atrás |
| **D** | Mover hacia la derecha |
| **Espacio** | Salto lunar |
| **Mouse** | Rotar cámara |
| **Click** | Bloquear/liberar cursor |
| **ESC** | Liberar cursor |

---

## 📋 Estado del Desarrollo

### ✅ **Completado**

- [x] Configuración completa de Vite + React + Three.js
- [x] Sistema de movimiento en primera persona
- [x] Terreno lunar con cráteres y rocas
- [x] Cielo estrellado con la Tierra visible
- [x] Iluminación dinámica día/noche
- [x] Modelo 3D del astronauta
- [x] Invernadero con domo transparente
- [x] Campos de cultivos procedurales
- [x] Tanque de agua con efectos
- [x] Edificio de almacenamiento
- [x] Rover lunar animado
- [x] Paneles solares con seguimiento
- [x] Bandera lunar con ondeo
- [x] Base habitacional iluminada
- [x] Sistema de partículas
- [x] UI moderna con HUD
- [x] Optimización de rendimiento

### 🔮 **Futuras Mejoras**

- [ ] Sistema de inventario para el astronauta
- [ ] Interacciones con objetos (puertas, paneles)
- [ ] Sonidos ambientales y efectos de audio
- [ ] Modo multijugador básico
- [ ] Sistema de misiones y objetivos
- [ ] Efectos meteorológicos (tormentas de polvo)
- [ ] Vehículos conducibles
- [ ] Sistema de construcción
- [ ] Mecánicas de supervivencia
- [ ] VR/AR support

---

## 📁 Estructura del Proyecto

```
lunar-farm/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── decorative/          # Elementos decorativos
│   │   │   ├── LunarRover.jsx
│   │   │   ├── SolarPanels.jsx
│   │   │   ├── LunarFlag.jsx
│   │   │   ├── HabitatBase.jsx
│   │   │   └── DecorativeElements.jsx
│   │   ├── effects/             # Efectos visuales
│   │   │   └── ParticleEffects.jsx
│   │   ├── environment/         # Entorno y ambiente
│   │   │   ├── LunarTerrain.jsx
│   │   │   ├── Skybox.jsx
│   │   │   └── Lighting.jsx
│   │   ├── farm/               # Estructuras de granja
│   │   │   ├── FarmStructures.jsx
│   │   │   ├── Greenhouse.jsx
│   │   │   ├── CropField.jsx
│   │   │   ├── WaterTank.jsx
│   │   │   └── StorageBuilding.jsx
│   │   ├── player/             # Jugador y controles
│   │   │   ├── PlayerController.jsx
│   │   │   └── Astronaut.jsx
│   │   └── LunarFarmScene.jsx  # Escena principal
│   ├── App.jsx                 # Componente raíz
│   ├── App.css                 # Estilos principales
│   └── main.jsx               # Punto de entrada
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si quieres contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### **Áreas que Necesitan Ayuda**

- Optimización de rendimiento
- Nuevos modelos 3D
- Efectos de sonido
- Traducción a otros idiomas
- Mejoras en la UI/UX
- Documentación adicional

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **Three.js** - Por el increíble motor 3D
- **React Three Fiber** - Por hacer Three.js accesible en React
- **Vite** - Por la excelente experiencia de desarrollo
- **React** - Por el framework robusto
- **NASA** - Por la inspiración espacial
- **Comunidad Open Source** - Por las herramientas y bibliotecas

---

## 📞 Contacto

**Desarrollador:** Yamil  
**Repositorio:** [yamil_repository-API](https://github.com/Locura-de-Meteoritos/yamil_repository-API)  
**Organización:** Locura-de-Meteoritos

---

## 🌟 Demo y Screenshots

### **Vista General de la Granja**
*El entorno completo con todas las estructuras*

### **Controles en Primera Persona**
*Navegación fluida por el entorno lunar*

### **Efectos de Iluminación**
*Sistema día/noche con sombras dinámicas*

### **Estructuras Detalladas**
*Invernadero, rover, paneles solares y más*

---

**¡Disfruta explorando tu granja lunar! 🌙🚀**
