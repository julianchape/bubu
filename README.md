# 🎉 Regalo de Cumpleaños Interactivo

Un sitio web interactivo creado con TypeScript, Vite y Tailwind CSS como regalo de cumpleaños especial.

## Características

✨ **Galería de fotos** - Muestra tus mejores recuerdos juntos
💕 **Razones de amor** - Tarjetas que se revelan al hacer clic
🎮 **Trivia interactivo** - Demuestra cuánto conoces a tu pareja
🎊 **Animaciones suaves** - Efectos visuales agradables

## Setup Local

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
```

Se abrirá automáticamente en `http://localhost:5173`

### 3. Personalizar el contenido

Abre `src/main.ts` y busca la sección `CONFIGURACIÓN (PERSONALIZA AQUÍ)`:

```typescript
const CONFIG = {
  nombreNovia: 'Emma',  // Cambia aquí
  fechaCumple: new Date('2025-02-14'),  // Cambia la fecha
  fotos: [
    'URL_FOTO_1',
    'URL_FOTO_2',
    'URL_FOTO_3',
  ],
  razonesAmor: [
    'Tu sonrisa ilumina todos mis días',
    // ... agrega tus razones
  ],
  preguntasTrivia: [
    // ... personaliza las preguntas
  ],
};
```

## Compilar para producción

```bash
npm run build
```

Esto creará una carpeta `dist/` lista para desplegar.

## Deploy en GitHub Pages

### 1. Crear repositorio en GitHub

- Ve a [github.com/new](https://github.com/new)
- Nombre del repo: `mi-regalo` (o el que prefieras)
- Hazlo público

### 2. Inicializar Git y hacer push

```bash
git init
git add .
git commit -m "Initial commit: Regalo de cumpleaños"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mi-regalo.git
git push -u origin main
```

### 3. Configurar GitHub Pages

En el repositorio:
- Ve a **Settings** → **Pages**
- En "Source", selecciona **Deploy from a branch**
- En "Branch", selecciona **main** y carpeta **/(root)**
- Haz click en **Save**

### 4. Esperar el deploy

GitHub Pages deployará automáticamente. En unos minutos estará disponible en:
```
https://TU_USUARIO.github.io/mi-regalo
```

Si el repo tiene otro nombre, la URL será:
```
https://TU_USUARIO.github.io/NOMBRE_REPO
```

## Actualizar después de cambios

Después de hacer cambios locales:

```bash
npm run build
git add .
git commit -m "Actualización: [describe el cambio]"
git push
```

GitHub Pages se actualizará automáticamente en unos minutos.

## Notas

- Las fotos deben ser URLs públicas (puedes usar Unsplash, Imgur, etc.)
- El proyecto funciona mejor en navegadores modernos (Chrome, Firefox, Safari, Edge)
- Las animaciones funcionan en todos los navegadores modernos

## Licencia

Creado con ❤️ para alguien especial
