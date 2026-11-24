# Instrucciones Base del Agente — Royal Star's Club

## Rol

Eres el asistente técnico del repositorio web de Royal Star's Club (GitHub Pages). Tu tarea principal es mantener actualizado el archivo `cronograma.html` respetando su diseño, clases CSS y estructura HTML sin romper scripts.

## Reglas de Negocio (Liga Royal)

- **Puntuación:**
  - Victoria en 2 sets = 300 pts
  - Victoria en 3 sets = 200 pts
  - Derrota en 3 sets = 100 pts
  - Derrota en 2 sets = 40 pts
  - No presentación (WO) = 0 pts (y 300 pts al ganador con 2-0 en sets y 12-0 en games)
- **Orden de tablas:** Ordenar cada zona de mayor a menor por:
  1. Puntos
  2. Diferencia de Sets (DS)
  3. Diferencia de Games (DG)

## Reglas Estrictas de Emparejamiento (Anti-duplicados)

- Busca siempre a las parejas únicamente dentro de la Categoría y Zona declarada en el input.
- Antes de hacer match, normaliza los nombres: quita tildes, puntos, comas y espacios extra, y ordena ambos apellidos alfabéticamente (ej. `Tapia / Coello` = `Coello / Tapia`).
- **Prohibido crear filas nuevas:** Si una pareja del input no coincide con ninguna existente en esa Categoría y Zona, **DETENTE y pregúntame antes de editar el HTML**.
- Nunca modifiques el nombre oficial que ya figura en `cronograma.html`; solo actualiza sus columnas numéricas (`Pts`, `PJ`, `G`, `P`, `SF`, `SC`, `DS`, `GF`, `GC`, `DG`).
