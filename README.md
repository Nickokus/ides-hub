# Hub de Clases · Profesorado IDES

Portal académico para organizar y reproducir las clases del segundo cuatrimestre de **Ingeniería de Software** e **Interfaz de Usuario**.

## Criterio del repositorio

Cada presentación se conserva como proyecto aislado para mantener su identidad visual, estilos, animaciones e interacciones. El portal no impone un CSS común a los decks.

Los fuentes se versionan de forma legible. `node_modules`, `dist` y el sitio generado no se guardan en Git; GitHub Actions construye los decks y publica el resultado en GitHub Pages.

### Presentaciones originales integradas

- IS · Librerías, Frameworks y ecosistema moderno
- IS · CI/CD y Deploy
- IS · NickoChat App
- IS · Testing de Software
- IU · User Flow profesional

Las clases cuyo fuente original todavía no fue recuperado permanecen explícitamente marcadas como pendientes en `classes.json`; no se reemplazan silenciosamente por reconstrucciones.

## Desarrollo local

Cada deck puede ejecutarse desde su propia carpeta:

```bash
npm install
npm run dev
```

El script `scripts/materialize-deck.mjs` reúne los fragmentos fuente legibles de `src/source/` antes de iniciar Vite o construir el proyecto.
