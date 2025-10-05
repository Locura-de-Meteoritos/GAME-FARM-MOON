# 🚀 Granja Lunar - Entorno 3D Interactivo

![Lunar Farm](https://img.shields.io/badge/Status-Activo-green) ![Vite](https://img.shields.io/badge/Vite-7.1.9-blue) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![Three.js](https://img.shields.io/badge/Three.js-Latest-orange)

Una experiencia 3D inmersiva de una granja lunar construida con **React**, **Three.js** y **Vite**, presentando gráficos low-poly estilo Minecraft y físicas realistas de gravedad lunar.

## ✨ Características Principales

### 🌍 Entorno Lunar Realista
- **Superficie lunar** con cráteres procedurales y rocas
- **Cielo estrellado** con la Tierra visible en la distancia
- **Iluminación dinámica** que simula el ciclo día/noche
- **Gravedad lunar** (1/6 de la terrestre) para movimiento realista

### 👨‍🚀 Astronauta Jugador
- **Modelo low-poly** detallado con casco, traje y mochila de oxígeno
- **Controles FPS** con WASD para movimiento y mouse para cámara
- **Físicas realistas** con salto en gravedad lunar
- **Animaciones** sutiles y efectos visuales

### 🏗️ Estructuras de Granja
- **Invernadero con domo transparente** y plantas en crecimiento
- **Campos de cultivos** con diferentes tipos de plantas (tomates, lechugas, zanahorias)
- **Tanque de agua** con sistema de tuberías y válvulas
- **Edificio de almacenamiento** con contenedores y equipamiento

### 🛸 Elementos Decorativos
- **Rover lunar** con ruedas giratorias y brazo robótico
- **Array de paneles solares** que siguen el sol
- **Bandera lunar** ondeando con efectos de viento
- **Base habitacional** con luces internas y antenas
- **Torres de comunicación** y estaciones meteorológicas

### 🎨 Efectos Visuales
- **Sistema de partículas** con polvo lunar y polvo estelar
- **Iluminación volumétrica** y sombras dinámicas
- **Efectos de transparencia** en domos y ventanas
- **Animaciones procedurales** en elementos del entorno

## 🎮 Controles

| Tecla | Acción |
|-------|--------|
| **W, A, S, D** | Movimiento del astronauta |
| **Mouse** | Rotación de cámara (primera persona) |
| **Espacio** | Salto (con gravedad lunar) |
| **Click** | Bloquear/desbloquear cursor |
| **ESC** | Liberar cursor |

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Framework de UI
- **Vite 7.1.9** - Herramienta de build y desarrollo
- **Three.js** - Motor 3D para WebGL

### 3D y Físicas
- **@react-three/fiber** - React renderer para Three.js
- **@react-three/drei** - Helpers y abstracciones para R3F
- **@react-three/cannon** - Motor de físicas 3D
- **Leva** - GUI de debug y desarrollo

### Características Técnicas
- **ESLint** configurado para desarrollo
- **Hot Module Replacement** para desarrollo rápido
- **Sombras en tiempo real** y iluminación PBR
- **Optimización de rendimiento** con LOD y culling

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn como gestor de paquetes

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
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
- Haz click en la pantalla para bloquear el cursor
- ¡Disfruta explorando la granja lunar!

### Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linter de código
```

## 📁 Estructura del Proyecto

```
lunar-farm/
├── src/
│   ├── components/
│   │   ├── environment/       # Terreno, cielo, iluminación
│   │   ├── player/           # Astronauta y controles
│   │   ├── farm/            # Estructuras de granja
│   │   ├── decorative/      # Elementos decorativos
│   │   ├── effects/         # Efectos de partículas
│   │   └── LunarFarmScene.jsx
│   ├── App.jsx              # Componente principal
│   ├── App.css             # Estilos globales
│   └── main.jsx            # Punto de entrada
├── public/
├── package.json
└── README.md
```

## 🎯 Características Implementadas

### ✅ Completado
- [x] Configuración completa de Vite + React + Three.js
- [x] Escena 3D básica con cámara y controles
- [x] Terreno lunar con cráteres y rocas procedurales
- [x] Skybox con estrellas y Tierra visible
- [x] Sistema de iluminación día/noche
- [x] Modelo de astronauta low-poly detallado
- [x] Controles de primera persona con físicas
- [x] Invernadero con domo transparente
- [x] Campos de cultivos con plantas variadas
- [x] Tanque de agua con tuberías
- [x] Edificio de almacenamiento
- [x] Rover lunar con animaciones
- [x] Array de paneles solares móviles
- [x] Bandera lunar ondeante
- [x] Base habitacional completa
- [x] Sistema de partículas ambientales
- [x] UI moderna con HUD informativo
- [x] Optimización de rendimiento

### 🔮 Futuras Mejoras
- [ ] Sistema de inventario para el astronauta
- [ ] Mecánicas de cultivo interactivas
- [ ] Sonidos ambientales y música
- [ ] Multijugador cooperativo
- [ ] Sistema de misiones y objetivos
- [ ] Efectos meteorológicos (lluvia de meteoritos)
- [ ] VR/AR support para inmersión total
- [ ] Construcción personalizable de estructuras

## 🎨 Estilo Visual

El proyecto sigue una estética **low-poly/voxel** inspirada en Minecraft pero con un enfoque futurista lunar:

- **Paleta de colores**: Grises lunares, azules metálicos, verdes de vegetación
- **Texturas**: Pixeladas de 16x16 y 32x32 píxeles
- **Modelos**: Geometrías simples con detalles funcionales
- **Iluminación**: Realista pero estilizada para el ambiente espacial

## 🌟 Experiencia de Usuario

La granja lunar ofrece una experiencia inmersiva donde el jugador puede:

1. **Explorar** libremente el entorno lunar
2. **Descubrir** diferentes estructuras y elementos
3. **Experimentar** la física de baja gravedad
4. **Observar** animaciones y efectos ambientales
5. **Disfrutar** de un entorno tranquilo y contemplativo

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 🙏 Reconocimientos

- **Three.js** por el increíble motor 3D
- **React Three Fiber** por la integración React-Three.js
- **Vite** por la excelente experiencia de desarrollo
- **Comunidad open source** por las herramientas y recursos

---

**¡Disfruta explorando tu granja lunar! 🌙🚀**

> Creado con ❤️ para demostrar las capacidades de React + Three.js en aplicaciones 3D interactivas.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
