# mCrochet - Tienda de crochet con Three.js

Tienda online de muñecos de crochet. **Sin Node, sin Python, sin servidor, sin bundler.**

Three.js se carga automáticamente desde CDN (`cdn.jsdelivr.net`).

## Cómo abrirlo

**Doble clic en `index.html`** y se abre en el navegador. Nada más.

> Necesitas conexión a Internet para que cargue Three.js desde CDN.

## Estructura

```
index.html          ← HTML limpio (solo estructura + referencias)
css/style.css       ← todos los estilos
js/app.js           ← datos, filtros, UI, eventos y fondo Three.js
README.md
```

## Qué incluye

- Menú superior (catálogo, colecciones, contacto).
- Listado de 6 productos con imagen SVG, categoría, precio y stock.
- Filtro por búsqueda de texto.
- Filtro por categoría (chips).
- Filtro por precio máximo (slider).
- Botón de añadir al carrito con contador.
- **Fondo animado con Three.js**: ovillos de lana con surcos, agujas de crochet, corazones, partículas flotantes e hilos curvados. Paralaje suave con el ratón.

## Personalización

- Los productos están en el array `products` dentro de `js/app.js`.
- Las imágenes son SVG inline (data URIs). Puedes reemplazarlas por URLs reales de fotos.
- Los estilos están en `css/style.css`.
