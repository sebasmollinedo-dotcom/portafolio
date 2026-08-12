# Portafolio — Sebastián Mollinedo

Sitio personal de una sola página, bilingüe (ES/EN). Next.js App Router, sin dependencias de UI.

## Dirección de diseño

Pizarra y oxblood. Profesional de base, con el toque creativo puesto en la tipografía
y en los datos, no en efectos. Sin marquesinas, sin cursor propio, sin grano.

Contraste verificado sobre el fondo: hueso 13.7:1, apagado 5.0:1, vino como texto 5.2:1,
blanco sobre vino sólido 8.1:1.

Dos piezas de datos llevan el peso: el medidor del hero, que dibuja a escala la compresión
del tiempo de gestión lograda con el ERP, y la gráfica de períodos, que muestra la progresión
de desarrollador a gerente y el traslape con Forma3D.

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **CSS propio** con custom properties. Sin librería de componentes.
- **Fuentes auto-hospedadas** vía Fontsource: Archivo Variable (display, eje de anchura),
  Public Sans Variable (texto), Chivo Mono Variable (datos y etiquetas).
- **d3-scale** para las escalas de la gráfica; el SVG se dibuja a mano.

## Estructura

```
app/
  copy.ts        Contenido ES/EN tipado — una sola fuente de verdad
  Portfolio.tsx  Componente cliente, maneja el cambio de idioma
  globals.css    Tokens y estilos
  layout.tsx     Fuentes y metadatos
public/
  CV-Sebastian-Mollinedo.pdf
```

Para cambiar el contenido se edita `app/copy.ts`. Nada más.

## Desarrollo

```bash
npm install
npm run dev
```

## Accesibilidad

Contraste AA, foco visible, `prefers-reduced-motion` respetado, responsive sin scroll horizontal.
