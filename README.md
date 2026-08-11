# Portafolio — Sebastián Mollinedo

Sitio personal de una sola página, bilingüe (ES/EN). Next.js App Router, sin dependencias de UI.

## Dirección de diseño

La página está construida como un **instrumento de medición**: fondo vellum, tinta profunda,
acento latón, y marcas de regla como motivo estructural en lugar de separadores decorativos.

El elemento firma es el medidor del hero, que dibuja a escala la compresión del tiempo de gestión
operativa lograda con el ERP. Al cargar, la barra se comprime sola.

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **CSS propio** con custom properties. Sin librería de componentes.
- **Fuentes auto-hospedadas** vía Fontsource: Archivo Variable (display, eje de anchura),
  Public Sans Variable (texto), Spline Sans Mono Variable (datos y etiquetas).

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
