# UI States Demo (Accesible + Errores Didácticos)

Este paquete contiene dos páginas para **demostrar estados y feedback** en UI con foco en accesibilidad.

## Archivos
- `index.html` → Versión **correcta** con:
  - Estados: `loading`, `success`, `error`, `closing → idle` (modal).
  - Feedback UI: spinner, botón deshabilitado, toast, error inline con borde rojo.
  - Accesibilidad: `aria-live` (SR), foco vuelve al disparador al cerrar modal, validación con foco.

- `index_bad.html` → Versión **con problemas deliberados** para detectar en clase:
  - Bajo contraste, sin `aria-live`, errores sin mover el foco al campo, modal que no devuelve foco.

## Cómo usar en clase
1. Abrí `index.html` para ver el flujo correcto.
2. Abrí `index_bad.html` y pedí a los alumnos que identifiquen los problemas.
3. Discutí cómo corregirlos usando: contraste adecuado, `aria-live`, manejo del foco, y retorno al trigger del modal.

Creado: 2025-11-21T18:59:49.158025Z
