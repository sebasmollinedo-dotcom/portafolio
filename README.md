# Portafolio — Sebastián Mollinedo

Sitio personal de una sola página, bilingüe (ES/EN). Next.js App Router, sin dependencias de UI.

## Dirección de diseño

Negro profundo, acento lima ácido y verdes oliva. Todo el chrome en mayúsculas con tracking
amplio; el texto largo queda en caja baja para que se pueda leer. Grano de película, cursor
propio, marquesina y contadores animados.

Dos piezas de datos llevan el peso: el medidor del hero, que dibuja a escala la compresión del
tiempo de gestión lograda con el ERP, y la gráfica de períodos, que muestra la progresión de
desarrollador a gerente y el traslape con Forma3D.

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **CSS propio** con custom properties. Sin librería de componentes.
- **Fuentes auto-hospedadas** vía Fontsource: Syncopate (display), Josefin Sans Variable (texto).
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
