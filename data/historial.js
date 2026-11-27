/**
 * Historial oficial de enfrentamientos y resultados — Liga de Royal (Royal Star's Club)
 * Fuente única de verdad reconciliada al 100% con las tablas de posiciones de cronograma.html.
 *
 * REGLAMENTO DE PUNTUACIÓN:
 * - Victoria en 2 sets: 300 pts | Derrota en 2 sets: 40 pts
 * - Victoria en 3 sets: 200 pts | Derrota en 3 sets: 100 pts
 * - No presentación (WO): 300 pts (2-0, 12-0) al ganador | 0 pts al ausente
 * - Super Tie-Break en 3er set: suma 1 game al ganador y 0 al perdedor
 *
 * CÓMO AGREGAR PARTIDOS DE FECHA 4:
 * Agregá un objeto al array HISTORIAL_PARTIDOS siguiendo el mismo formato.
 * Luego actualizá el estado de la fecha en HISTORIAL_FECHAS (disponible: true).
 */

window.HISTORIAL_CATEGORIAS = [
  'Iniciados Masculino',
  '8va Masculina',
  '7ma Masculina',
  '6ta Masculina',
  '5ta Masculina',
  'Suma 6 Masculina',
  'Iniciadas Femenino',
  '8va Femenina',
  '7ma Femenina',
  'Suma 11 Femenina'
];

window.HISTORIAL_FECHAS = [
  { id: 1, titulo: 'Fecha 1', subtitulo: '6, 7 y 9 de Noviembre 2026', disponible: true },
  { id: 2, titulo: 'Fecha 2', subtitulo: '13, 14 y 16 de Noviembre 2026', disponible: true },
  { id: 3, titulo: 'Fecha 3', subtitulo: '20, 21 y 23 de Noviembre 2026', disponible: true },
  { id: 4, titulo: 'Fecha 4', subtitulo: '4 y 5 de Diciembre 2026 (Fecha doble)', disponible: false, mensajeVacio: 'Próximamente · Resultados disponibles al finalizar la jornada.' }
];

window.HISTORIAL_PARTIDOS = [
  {
    "id": "F1-001",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Diaz / Giovane",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Sanchez / Luna",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-002",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino",
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Herrera / Ponce",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Karam / Escobar",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-12",
    "parciales": "6-1 / 6-7 / 6-4",
    "etiqueta": "Ascenso",
    "nota": "Disputado en Iniciados Masculino Zona A; ambas parejas ascendieron a 8va Masculina Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-003",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Ojeda / Sayago",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Coria / Soria",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-6",
    "parciales": "7-6 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-004",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Campos / Jimenez",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abdala / Corvalan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-005",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Peña / Ysse",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Uriarte / Urquiza",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-1 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-006",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino",
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ruiz / Palmas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lescano / Galvan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 0,
      "games": 5,
      "enTabla": true,
      "puntosLabel": "+300 pts (Regl.)",
      "tablaOverride": {
        "pg": 1,
        "pp": 0,
        "sf": 2,
        "sc": 0,
        "gf": 12,
        "gc": 0
      }
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-2 / 6-3",
    "etiqueta": "Ascenso / Reglamentario",
    "nota": "Jugado en Iniciados Masculino Zona C; Ruiz / Palmas ascendieron a 8va Zona F y Lescano / Galvan recibieron los 300 pts reglamentarios (2-0, 12-0) por ascenso del rival.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-007",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Guzman / Ponce",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Galeano / Castaño",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-1 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-008",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Trullenque / Ledesma",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rodriguez / Goitea",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-4 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-009",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciados Masculino",
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ramirez / Ludueña",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Galvan / Lezcano (ex Zona D)",
      "categoriaActual": "BAJA",
      "zonaActual": "",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": false
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-3 / 7-6",
    "etiqueta": "Ascenso",
    "nota": "Disputado en Iniciados Masculino (lunes 09/11); Ramirez / Ludueña ascendieron a 8va Masculina Zona H (no duplica PJ sobre Lescano / Galvan de Zona C).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-010",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciados Masculino",
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Vargas / Paez",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Machado / Rocha",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-4 / 7-5",
    "etiqueta": "Ascenso",
    "nota": "Disputado en Iniciados Masculino (lunes 09/11); ambas parejas pasaron a integrar 8va Masculina Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-011",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Bustamante / Escalada",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ledesma / Sayago",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 11,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-11",
    "parciales": "6-3 / 2-6 / 6-2",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Masculina Zona A (Ledesma / Sayago jugaron como Ledesma / Gomez E.); Bustamante / Escalada ascendieron a 7ma Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-012",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Carmona / Banegas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Veliz / Mansilla",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-15",
    "parciales": "4-6 / 7-6 / 6-3",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Masculina Zona A; Veliz / Mansilla ascendieron a 7ma Masculina Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-013",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Chavez / Lobo",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Hrourzek / Azar",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-4 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-014",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ponce / Gerez",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Pont / Orrego",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "12-10",
    "parciales": "0-6 / 6-1 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-015",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ciappino / Ruiz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Campos / Lescano",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 1 sin resultado informado.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F1-016",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Arias / Rojas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gianonni / Terzano",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 13,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-13",
    "parciales": "5-7 / 6-1 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-017",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Galvan / Terrera",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lopez / Diaz",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-14",
    "parciales": "3-6 / 6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-018",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Escalada / Robles",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bravo / Cejas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-3 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-019",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Guzman / Villalba",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bolañez / Medina",
      "categoriaActual": "BAJA",
      "zonaActual": "",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": false
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-2 / 6-2",
    "etiqueta": "Rival dado de baja",
    "nota": "Bolañez / Medina causaron baja luego de la Fecha 1; Guzman / Villalba conservan sus 300 pts.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-020",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Coria / Luna",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montenegro / Cereaola",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-8",
    "parciales": "4-6 / 6-0 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-021",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Miranda / Alfaro",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ruiz / Rojas",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-3 / 6-1",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Masculina Zona D; Miranda / Alfaro pasaron a 8va Zona C y Ruiz / Rojas a 7ma Zona F.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-022",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Masculina",
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Gerez / Danna",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alderete / Reuter",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-1 / 6-1",
    "etiqueta": "Cruce inter-categoría",
    "nota": "Jugado en 8va Masculina Zona E; Alderete / Reuter fueron reubicados en Iniciados Masculino Zona C.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-023",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Salvatierra / Masferrer",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Salvi / Lofiego",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-1 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-024",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ferrando / Jimenez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ruiz / Schiava",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-8",
    "parciales": "6-1 / 4-6 / 6-1",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Masculina Zona F; Ferrando / Jimenez ascendieron a 7ma Zona E y Ruiz / Schiava pasaron a 8va Zona A.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-025",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Montenegro T. / Elias",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Coria / Benac",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-5 / 6-4",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Masculina Zona F; Coria / Benac pasaron a competir en 7ma Masculina Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-026",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Godoy / Torrez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Almada / Cervera",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-2 / 6-0",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Masculina Zona F; Godoy / Torrez ascendieron a 7ma Masculina Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-027",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Pedregal / Barrionuevo",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ledesma J. / Gomez L.",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-3 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-028",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Diaz / Dominguez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Villalba / Brizuela",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-029",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Martinez / Zanoni",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Vidal / Chavez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-3 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-030",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Suarez / Escalada",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Eberle / De Matteis",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-12",
    "parciales": "6-1 / 3-6 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-031",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Barrionuevo / Peralta",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Cura / Lopez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-5 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-032",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Abelleira / Pacheco",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Chamorro / Rios",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-3 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-033",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Abutti / Rodriguez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montinho / Ojeda",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-8",
    "parciales": "6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-034",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Roldan / Lescano",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Flamenco / Gerez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-8",
    "parciales": "6-0 / 6-7 / 6-1",
    "etiqueta": "Parciales ajustados",
    "nota": "Marcador dictado 6-0 / 7-6 / 6-1 ajustado a 6-0 / 6-7 / 6-1 (2-1 en sets).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-035",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Carabajal / Coronel",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Troncozo / Diaz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-036",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Molina / Britos",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Diaz / Veliz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-14",
    "parciales": "6-4 / 4-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-037",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Paoleti / Ruiz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gonzalez / Zanni",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-038",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Bolañez / Cia",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Arias / Leguizamon",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "6-4 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-039",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Lucca / Ferrou",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Costas / Saavedra",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-5",
    "parciales": "6-0 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-040",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Gomez / Peryra",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Leguizamon / Bolañez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-041",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Vizcarra / Bernasconi",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Burgos / Gomez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-2 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-042",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Rovarini / Lludgar",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Stochetti / Ruiz",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-15",
    "parciales": "6-2 / 5-7 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-043",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Arias / Santucho",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Salvi / Burgos",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 18,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-18",
    "parciales": "7-6 / 3-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-044",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Slavatierra / Alderete",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Manzur / Cinquegrani",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-045",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Faes / Maguna",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ibañez / Langhi",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-8",
    "parciales": "2-6 / 6-1 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-046",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Torrez / Villalba",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Vergottini / Gomez",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "Partido confirmado en la jornada del lunes 09/11.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-047",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Lozano / Cia",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Sayago / Coria",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-10",
    "parciales": "6-2 / 2-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-048",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Neder / Gassman",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ponce / Mansilla",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-16",
    "parciales": "6-4 / 4-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-049",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Acosta / Farias",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Romano / Benac",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-4 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-050",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Corvalan / Diaz",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Carrizo / Rodriguez",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-6",
    "parciales": "7-5 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-051",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Raineri / Olivera",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ramirez / Mancuello",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-5",
    "parciales": "7-5 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-052",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Garcia / Montero",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Del Castillo / Curet",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-16",
    "parciales": "6-4 / 4-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-053",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Inter-zona",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Campos / Ruiz",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Fernandez / Fernandez",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-4 / 6-2",
    "etiqueta": "Cruce inter-zona",
    "nota": "Cruce entre Campos / Ruiz (Zona C) y Fernandez / Fernandez (Zona A) en 5ta Masculina.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-054",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Gassman / Arce",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Greco / Scaglione",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-4 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-055",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Lopez Saad / Arias",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Olivera / Danna",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-056",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Alderete / Viotti",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bravo / Zambolin",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-2 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-057",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Milet / Garnica",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alcorta / Araujo",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-6",
    "parciales": "6-1 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-058",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Ledesma / Delgado",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Camacho / Suarez",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-16",
    "parciales": "6-4 / 2-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-059",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Celis / Mancuello",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montenegro / Cavallero",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "6-4 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-060",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Quadreli / Castro",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bolomo / Bolomo",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 11,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "14-11",
    "parciales": "7-5 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-061",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Lopez / Paz",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abate / Vizcarra",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-1 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-062",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Muratore / Contardi",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Leiva / Julian",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "6-4 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-063",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Abate / Trejo (ascendidas a 8va)",
      "categoriaActual": "ASCENDIDA",
      "zonaActual": "",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": false
    },
    "perdedor": {
      "nombre": "Ganem / Moreno",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "Ascenso de rival",
    "nota": "Abate / Trejo pasaron a competir en 8va Femenina Zona C (donde disputaron Fecha 1 y Fecha 2); Ganem / Moreno suman los 40 pts en Iniciadas Zona A.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-064",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciadas Femenino",
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Bustos / Filipi",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Coman / Coman",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-1 / 6-3",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en Iniciadas Femenino Zona A; Coman / Coman ascendieron a 8va Femenina Zona F.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-065",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Soria / Caceres",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 9,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Busso / Romero",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "9-10",
    "parciales": "2-6 / 6-4 / 10-8 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (10-8 en el 3er set; computa 1 game al ganador).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-066",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino",
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Lludgar / Dardatt",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Barbero / Infante",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 11,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "12-11",
    "parciales": "6-4 / 5-7 / 10-9 (STB)",
    "etiqueta": "Ascenso",
    "nota": "Disputado en Iniciadas Femenino Zona B (STB 10-9); ambas parejas ascendieron a 8va Femenina Zona F.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-067",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Veron / Veron",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rival a confirmar (Zona B)",
      "categoriaActual": "REVISAR",
      "zonaActual": "",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": false
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-1 / 6-1",
    "etiqueta": "Rival a confirmar",
    "nota": "Informado 6-1 / 6-1 para Veron / Veron sin rival consignado; pendiente de confirmación para computar en tabla.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F1-068",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Cajal / Ganin",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Valdez / Silvetti",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-4 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-069",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Campos / Ruiz",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Molina / Soler",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-070",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Femenina",
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Figueroa / Leguizamon",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Paz / Bianchi",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Femenina Zona A; Paz / Bianchi ascendieron a 7ma Femenina Zona D.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-071",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Loto / Pedraza",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Juarez / Enrico",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-15",
    "parciales": "3-6 / 7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-072",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Coria / Mazzoleni",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Infante / Epeola",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "Infante / Epeola jugaron inicialmente listadas como Infante / Cervetto.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-073",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Femenina",
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Martinez / Romero",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bertinat / Arias",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-7",
    "parciales": "2-6 / 6-1 / 6-0",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Femenina Zona B; Bertinat / Arias ascendieron a 7ma Femenina Zona E.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-074",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Suarez / Gonzales",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abate / Trejo",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-14",
    "parciales": "7-6 / 3-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-075",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Toloza / Miranda",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Muño / Olivares",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 18,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-18",
    "parciales": "4-6 / 7-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-076",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Cruz / Sydow",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bravo / Bravo",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-2 / 6-0",
    "etiqueta": null,
    "nota": "Disputado inicialmente bajo la dupla Ruiz / Sydow.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-077",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Quevedo / Otrera",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Auatt / Gerez",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-2 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-078",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Micol / Chazarreta",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Roldan / Colombres",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-16",
    "parciales": "4-6 / 6-4 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-079",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Fernandez / Araujo",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Chemez / Rojo",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-6",
    "parciales": "6-1 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-080",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Martinez / Larralde",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Galeano / Cianferoni",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "6-4 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-081",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Gola / Nebro",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Castillo / Aguila",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-15",
    "parciales": "4-6 / 7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-082",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Orieta / Tobar",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abalos / Demarchi",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-083",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Rossi / Rodini",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rojas / Butiler",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-7",
    "parciales": "7-5 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-084",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Perez / Cortez",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Castañeda / Lescano",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-1 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-085",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Alegre / Rafael",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Brizuela / Gallardo",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-1 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-086",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Argañaraz / Jimenez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Diaz / Caceres",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-4 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-087",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Roldan / Vivas",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Brunet / Skupin",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-0 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-088",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Cejas / Cisneros",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Palavecino / Tula",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 13,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-13",
    "parciales": "6-3 / 4-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-089",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Villalba / Cortez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Jimenez / Frias",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-8",
    "parciales": "6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-090",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Cura / Montiel",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Roldan / Gonzales",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 13,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-13",
    "parciales": "3-6 / 6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F1-091",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Lorenzo / Leguizamon",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Mansilla / Lorenzo",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 13,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-13",
    "parciales": "6-3 / 5-7 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": "noticia-duelo-hermanas-lorenzo.html"
  },
  {
    "id": "F1-092",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Mussi / Suarez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Kusmus / Aguero",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": "nota-suarez-mussi-debut.html"
  },
  {
    "id": "F1-093",
    "fecha": 1,
    "fechaLabel": "6, 7 y 9 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Pereyra / Ruiz",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Sayago / Castillo",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-6",
    "parciales": "7-6 (1) / 6-0",
    "etiqueta": null,
    "nota": "Anexo Fecha 1 (Viernes 06/11).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-001",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Chara / Barquin",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 10,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Peña / Ysse",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "10-7",
    "parciales": "3-6 / 6-1 / 10-9 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (10-9).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-002",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Coria / Soria",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abdala / Corvalan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-1 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-003",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Guzman / Ponce",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lescano / Galvan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "6-3 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-004",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Trullenque / Ledesma",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Galeano / Castaño",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-1 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-005",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Campos / Jimenez",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Santillan / Santillan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "6-4 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-006",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Sanchez / Luna",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Uriarte / Urquiza",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-007",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Masculina",
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Alderete / Reuter",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Salvatierra / Masferrer",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "Cruce inter-categoría",
    "nota": "Alderete / Reuter fueron reubicados en Iniciados Masculino Zona C.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-008",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Arias / Rojas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bravo / Cejas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-009",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Coria / Luna",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Guzman / Villalba",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-010",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Escalada / Robles",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gianonni / Terzano",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-011",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Pedregal / Barrionuevo",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lopez / Diaz",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-012",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona H",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Machado / Rocha",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Herrera / Ponce",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-013",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona H",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Godoy / Torrez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Coria / Benac",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-16",
    "parciales": "6-4 / 4-6 / 7-6",
    "etiqueta": "Parciales ajustados",
    "nota": "Duelo de ascendidos desde 8va Zona F en 7ma Zona H; parcial dictado 6-4 / 6-4 / 6-7 ajustado a 6-4 / 4-6 / 7-6.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-014",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Pont / Orrego",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Chavez / Lobo",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-015",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Rodas / Caballero",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gerez / Danna",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-5 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-016",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Storniolo / Segura",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montenegro / Cereaola",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-7",
    "parciales": "6-1 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-017",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Pacheco / Martinez",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ledesma J. / Gomez L.",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-4 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-018",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Bustamante / Escalada",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Carmona / Banegas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-0 / 6-1",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Bustamante / Escalada ascendieron desde 8va Zona A hacia 7ma Masculina Zona H.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-019",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina",
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ciappino / Ruiz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Hrourzek / Azar",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 2.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F2-020",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Eberle / De Matteis",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Carrillo / Urrere",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-021",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Lucca / Ferrou",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rojas / Gutierres",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-022",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Gomez / Peryra",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "De la Rua / Giovanelo",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-0 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-023",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Omill / Cisneros",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Martinez / Zanoni",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 18,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-18",
    "parciales": "2-6 / 7-6 / 7-6",
    "etiqueta": "Parciales ajustados",
    "nota": "Parcial dictado 2-6 / 6-7 / 7-6 corregido a 2-6 / 7-6 / 7-6.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-024",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Burgos / Gomez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Leguizamon / Bolañez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-3 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-025",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Paoleti / Ruiz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bolañez / Cia",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-2 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-026",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Olivera / Aranda",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Troncozo / Diaz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-3 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-027",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Gonzalez / Zanni",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ferrando / Jimenez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-0 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-028",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ponti / Falcon",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Cura / Lopez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-16",
    "parciales": "7-5 / 2-6 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-029",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Villalba / Brizuela",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Vidal / Chavez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-030",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Abutti / Rodriguez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abelleira / Pacheco",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-6",
    "parciales": "4-6 / 6-0 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-031",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Vizcarra / Bernasconi",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rodriguez / Medina",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "Ganó",
    "gamesMarcador": "Sin games",
    "parciales": "Sin parciales informados",
    "etiqueta": "Parciales a confirmar",
    "nota": "Informado en Fecha 2 sin detalle de sets; omitido en tabla hasta contar con parciales.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F2-032",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Diaz / Veliz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Carabajal / Coronel",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-034",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Correa / Kapp",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rios / Guerrero",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-15",
    "parciales": "2-6 / 7-5 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-035",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Faes / Maguna",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Coronel / Jimenez",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-036",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Ponce / Mansilla",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Acosta / Farias",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "14-12",
    "parciales": "7-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-037",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Ramirez / Mancuello",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Corvalan / Diaz",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-14",
    "parciales": "6-2 / 1-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-038",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Vergottini / Gomez",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ibañez / Langhi",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "12-9",
    "parciales": "0-6 / 6-0 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-039",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Pappalardo / Lazarte",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Romano / Benac",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-12",
    "parciales": "6-1 / 5-7 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-040",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Barrio / Ojeda",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Torrez / Villalba",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-12",
    "parciales": "6-2 / 4-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-041",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Ledesma / Ledesma",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lozano / Cia",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-042",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Costa / Bovatti",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Raineri / Olivera",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-15",
    "parciales": "6-7 / 6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-043",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Serrano / Serrano",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Torrez / Nuri",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 2.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F2-044",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Lopez Saad / Arias",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Sanchez / Terzano",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 13,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-13",
    "parciales": "6-2 / 3-6 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-045",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Alcorta / Araujo",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 19,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alderete / Viotti",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "19-16",
    "parciales": "6-7 / 6-3 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-046",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Lludgar / Alaimo",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Galvan / Carabajal",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-047",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Garcia / Montero",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Hernandez / Ibañez",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-10",
    "parciales": "6-7 / 6-3 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-048",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Camacho / Suarez",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gulota / Rojas",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-049",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Romano / Coria",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Greco / Scaglione",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-8",
    "parciales": "6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-050",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Nazario / Celis",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ybañez / Auadt",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-7",
    "parciales": "6-2 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-051",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Gomez / Valdez",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Scrimini / Alonso",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-052",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Veron / Veron",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 11,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Busso / Romero",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "11-9",
    "parciales": "4-6 / 6-3 / 10-8 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (10-8).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-053",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Gomez / Lobos",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Nazar / Paz",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-0 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-054",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Cajal / Ganin",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Molina / Soler",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-055",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Lescano / Gutierrez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 8,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Soria / Caceres",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "8-8",
    "parciales": "6-2 / 1-6 / 10-9 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (10-9).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-056",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Lopez / Gerez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Azar / Migueles",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-3 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-057",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Lopez / Gerez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Infante / Riera",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-058",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Muratore / Contardi",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ganem / Moreno",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-3 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-059",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Rocha / Tevez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Yazbek / Orellana",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "Ganó",
    "gamesMarcador": "Sin games",
    "parciales": "Sin parciales informados",
    "etiqueta": "Parciales a confirmar",
    "nota": "Informado en Fecha 2 sin detalle de sets; omitido en tabla hasta contar con parciales.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F2-060",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Bustos / Filipi",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Leiva / Julian",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-061",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Loto / Pedraza",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Figueroa / Leguizamon",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-12",
    "parciales": "6-4 / 3-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-062",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Cruz / Otrera",
      "categoriaActual": "REVISAR",
      "zonaActual": "",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": false
    },
    "perdedor": {
      "nombre": "Muratore / Contardi",
      "categoriaActual": "REVISAR",
      "zonaActual": "",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": false
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": "Cruce a revisar",
    "nota": "Cruce informado como Cruz / Otrera vs. Muratore / Contardi (6-1 / 6-2); no computado en tabla hasta verificar parejas y categoría.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F2-063",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Femenina",
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Destefani / Morales",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Arias Coman / Santillan",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Femenina Zona D; Destefani / Morales ascendieron a 7ma Femenina Zona E.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-064",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Martinez / Romero",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Coria / Mazzoleni",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-065",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Toloza / Miranda",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abate / Trejo",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-1 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-066",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Salazar / Ferrau",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Infante / Epeola",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-067",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Rea / Taboada",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Olmedo / Orellana",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-12",
    "parciales": "4-6 / 6-3 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-068",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Muño / Olivares",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Suarez / Gonzales",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-12",
    "parciales": "6-4 / 6-7 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-069",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Lludgar / Dardatt",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Suarez / Medina",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-14",
    "parciales": "6-2 / 4-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-070",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Femenina",
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Juarez / Enrico",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Paz / Bianchi",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-14",
    "parciales": "4-6 / 7-6 / 6-2",
    "etiqueta": "Ascenso / Inter-categoría",
    "nota": "Jugado en 8va Femenina Zona A; Paz / Bianchi ascendieron a 7ma Femenina Zona D.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-071",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Coman / Coman",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Barbero / Infante",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-4 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-072",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Quevedo / Otrera",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Cruz / Sydow",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 2.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F2-073",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Martinez / Larralde",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Castillo / Aguila",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-14",
    "parciales": "1-6 / 7-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-074",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Rojas / Butiler",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abalos / Demarchi",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "13-12",
    "parciales": "1-6 / 6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-075",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Padula / Figueroa",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bertinat / Arias",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 11,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-11",
    "parciales": "6-3 / 3-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-076",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Galeano / Cianferoni",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gola / Nebro",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-077",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Brizuela / Gallardo",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Castañeda / Lescano",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-078",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Argañaraz / Herrera",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Romano / Orellana",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "13-14",
    "parciales": "6-4 / 1-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-079",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Chemez / Rojo",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Roldan / Colombres",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-2 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-081",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Mussi / Suarez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lorenzo / Leguizamon",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-4 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-082",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Diaz / Caceres",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alegre / Marturet",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona A",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "WO",
    "nota": "Victoria por no presentación (WO): +300 pts (2-0, 12-0) para Diaz / Caceres y 0 pts para Alegre / Marturet.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-083",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Cura / Montiel",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Jimenez / Frias",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-2 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F2-084",
    "fecha": 2,
    "fechaLabel": "13, 14 y 16 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Brunet / Skupin",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Cejas / Cisneros",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 2.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-001",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Diaz / Giovane",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 10,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Chara / Barquin",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "10-8",
    "parciales": "3-6 / 6-2 / 11-9 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (11-9).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-002",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Peña / Ysse",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Sanchez / Luna",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-003",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Ojeda / Sayago",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abdala / Corvalan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-0 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-004",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Coria / Soria",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Santillan / Santillan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-005",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Galeano / Castaño",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alderete / Reuter",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "7-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-006",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciados Masculino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciados Masculino"
    ],
    "ganador": {
      "nombre": "Lescano / Galvan",
      "categoriaActual": "Iniciados Masculino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Pedregal / Compañero",
      "categoriaActual": "BAJA",
      "zonaActual": "",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": false
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "WO",
    "nota": "Victoria por no presentación (WO) en la jornada del lunes 23/11.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-007",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Navarro / Infante",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Carmona / Banegas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-008",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ledesma / Sayago",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ruiz / Schiava",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "14-12",
    "parciales": "7-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-009",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ponce / Gerez",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Campos / Lescano",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-5 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-010",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Hrourzek / Azar",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Pont / Orrego",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona B",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-011",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Miranda / Alfaro",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Escalada / Robles",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-8",
    "parciales": "6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-012",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Bravo / Cejas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gianonni / Terzano",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-3 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-013",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Guzman / Villalba",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montenegro / Cereaola",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-5 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-014",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Coria / Luna",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Storniolo / Segura",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona D",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-015",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Salvatierra / Masferrer",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 20,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gerez / Danna",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 19,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "20-19",
    "parciales": "7-6 / 6-7 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-016",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Rodas / Caballero",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Salvi / Lofiego",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-5 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-017",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Cisneros / Robledo",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montenegro T. / Elias",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-15",
    "parciales": "5-7 / 7-5 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-018",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ruiz / Palmas",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Barraza / Barraza",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-16",
    "parciales": "3-6 / 7-5 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-019",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Pedregal / Barrionuevo",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Pacheco / Martinez",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "WO",
    "nota": "Victoria por no presentación (WO): +300 pts (2-0, 12-0) para Pedregal / Barrionuevo y 0 pts para Pacheco / Martinez.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-020",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Lopez / Diaz",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ledesma J. / Gomez L.",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-5 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-021",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona H",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Ramirez / Ludueña",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Vargas / Paez",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-2 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-022",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Masculina",
    "zonaJugada": "Zona H",
    "categoriasInvolucradas": [
      "8va Masculina"
    ],
    "ganador": {
      "nombre": "Machado / Rocha",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Karam / Escobar",
      "categoriaActual": "8va Masculina",
      "zonaActual": "Zona H",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-10",
    "parciales": "6-2 / 3-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-023",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Omill / Cisneros",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Diaz / Dominguez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-3 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-024",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Omill / Cisneros",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Vidal / Chavez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-2 / 6-3",
    "etiqueta": null,
    "nota": "2do partido válido de Omill / Cisneros en la jornada (lunes 23/11).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-025",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Martinez / Zanoni",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 20,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Villalba / Brizuela",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 18,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "20-18",
    "parciales": "7-6 / 6-7 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-026",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Cura / Lopez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Carrillo / Urrere",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 13,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-13",
    "parciales": "6-3 / 3-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-027",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Suarez / Escalada",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Barrionuevo / Peralta",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "6-2 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-028",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ponti / Falcon",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Eberle / De Matteis",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 15,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-15",
    "parciales": "6-4 / 4-6 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-029",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Roldan / Lescano",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 18,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montinho / Ojeda",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "18-8",
    "parciales": "6-0 / 6-7 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-030",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Flamenco / Gerez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abelleira / Pacheco",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-16",
    "parciales": "6-4 / 1-6 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-031",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Abutti / Rodriguez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Chamorro / Rios",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-14",
    "parciales": "5-7 / 6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-032",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Carabajal / Coronel",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Olivera / Aranda",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-10",
    "parciales": "6-2 / 3-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-033",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Molina / Britos",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Troncozo / Diaz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona D",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "WO",
    "nota": "Victoria por no presentación (WO): +300 pts (2-0, 12-0) para Molina / Britos y 0 pts para Troncozo / Diaz.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-034",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Gonzalez / Zanni",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Arias / Leguizamon",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-035",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Paoleti / Ruiz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ferrando / Jimenez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-036",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ruiz / Rojas",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Roldan / Diaz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-037",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Lucca / Ferrou",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Roldan / Diaz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-3 / 7-6",
    "etiqueta": null,
    "nota": "2do partido válido de Roldan / Diaz en la jornada.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-038",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Vizcarra / Bernasconi",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Leguizamon / Bolañez",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-2 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-039",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona G",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Vizcarra / Bernasconi",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "De la Rua / Giovanelo",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona G",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-7",
    "parciales": "7-5 / 6-2",
    "etiqueta": null,
    "nota": "2do partido válido de Vizcarra / Bernasconi en la jornada (lunes 23/11).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-040",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Masculina",
    "zonaJugada": "Zona H",
    "categoriasInvolucradas": [
      "7ma Masculina"
    ],
    "ganador": {
      "nombre": "Ciappino / Ruiz",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Veliz / Mansilla",
      "categoriaActual": "7ma Masculina",
      "zonaActual": "Zona H",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-041",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Stochetti / Ruiz",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Torrez / Nuri",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "13-12",
    "parciales": "6-4 / 1-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-042",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Torrez / Nuri",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Acuña / Coria",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": null,
    "nota": "2do partido válido de Torrez / Nuri en la jornada.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-043",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Serrano / Serrano",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rovarini / Lludgar",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-044",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Slavatierra / Alderete",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Arias / Santucho",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "6-2 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-045",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Torrez / Villalba",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Faes / Maguna",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-046",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Barrio / Ojeda",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ibañez / Langhi",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-10",
    "parciales": "6-4 / 2-6 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-047",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Sayago / Coria",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Correa / Kapp",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-12",
    "parciales": "6-4 / 2-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-048",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Ledesma / Ledesma",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rios / Guerrero",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 11,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "13-11",
    "parciales": "1-6 / 6-1 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-049",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "6ta Masculina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "6ta Masculina"
    ],
    "ganador": {
      "nombre": "Carrizo / Rodriguez",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 200,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Costa / Bovatti",
      "categoriaActual": "6ta Masculina",
      "zonaActual": "Zona F",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "13-12",
    "parciales": "6-2 / 1-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-050",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Del Castillo / Curet",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 15,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Beltran / Auat",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "15-12",
    "parciales": "3-6 / 6-3 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-051",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Fernandez / Fernandez",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Beltran / Auat",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona A",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-12",
    "parciales": "5-7 / 6-2 / 6-3",
    "etiqueta": null,
    "nota": "2do partido válido de Beltran / Auat en la jornada (lunes 23/11).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-052",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Romano / Coria",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gassman / Arce",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-10",
    "parciales": "6-2 / 4-6 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-053",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Greco / Scaglione",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Mussi / Garay",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 11,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-11",
    "parciales": "2-6 / 6-2 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-054",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Olivera / Danna",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 200,
      "sets": 2,
      "games": 14,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Campos / Ruiz",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona C",
      "puntos": 100,
      "sets": 1,
      "games": 17,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "14-17",
    "parciales": "0-6 / 7-6 / 7-5",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-055",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Bravo / Zambolin",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alcorta / Araujo",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 14,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-14",
    "parciales": "4-6 / 6-4 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-056",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Milet / Garnica",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alderete / Viotti",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona D",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-0",
    "parciales": "6-0 / 6-0",
    "etiqueta": "WO",
    "nota": "Victoria por no presentación (WO): +300 pts (2-0, 12-0) para Milet / Garnica y 0 pts para Alderete / Viotti.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-057",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Lludgar / Alaimo",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Camacho / Suarez",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 16,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-16",
    "parciales": "4-6 / 7-6 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-058",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "5ta Masculina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "5ta Masculina"
    ],
    "ganador": {
      "nombre": "Ledesma / Delgado",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Galvan / Carabajal",
      "categoriaActual": "5ta Masculina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "6-3 / 7-6",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-059",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Sayago / Castillo",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Montenegro / Cavallero",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-2 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-060",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Quadreli / Castro",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Nazario / Celis",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-4 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-061",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Bolomo / Bolomo",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Ybañez / Auadt",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 7,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-7",
    "parciales": "6-3 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-062",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Lopez / Paz",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gomez / Valdez",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-063",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 6 Masculina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 6 Masculina"
    ],
    "ganador": {
      "nombre": "Abate / Vizcarra",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Gomez / Valdez",
      "categoriaActual": "Suma 6 Masculina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-5 / 6-3",
    "etiqueta": null,
    "nota": "2do partido válido de Gomez / Valdez en la jornada (lunes 23/11).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-064",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Soria / Caceres",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 200,
      "sets": 2,
      "games": 11,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Veron / Veron",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "11-12",
    "parciales": "7-6 / 3-6 / 10-9 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (10-9).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-065",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Busso / Romero",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lescano / Gutierrez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-0 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-066",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Valdez / Silvetti",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Campos / Ruiz",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-5 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-067",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Valdez / Silvetti",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Molina / Soler",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-10",
    "parciales": "7-6 / 6-4",
    "etiqueta": null,
    "nota": "2do partido válido de Valdez / Silvetti en la jornada (lunes 23/11).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-068",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Gomez / Lobos",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Infante / Riera",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-0 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-069",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Nazar / Paz",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Azar / Migueles",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-070",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Yazbek / Orellana",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Isnarde / Tevez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-4 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-071",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Macchio / Fernandez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rocha / Tevez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 1,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-1",
    "parciales": "6-0 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-072",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Iniciadas Femenino",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "Iniciadas Femenino"
    ],
    "ganador": {
      "nombre": "Isnarde / Tevez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 9,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Abdala / Gomez",
      "categoriaActual": "Iniciadas Femenino",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "9-12",
    "parciales": "7-6 / 1-6 / 10-8 (STB)",
    "etiqueta": null,
    "nota": "Definido por Super Tie-Break (10-8).",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-073",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Juarez / Enrico",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Yost / Nazar",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-2 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-074",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Martinez / Romero",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Infante / Epeola",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-075",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Rea / Taboada",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Valdez / Yocca",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 10,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "13-10",
    "parciales": "1-6 / 6-1 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-076",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Torres / Olivera",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 200,
      "sets": 2,
      "games": 16,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bravo / Bravo",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "16-12",
    "parciales": "4-6 / 6-4 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-077",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Cruz / Sydow",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Auatt / Gerez",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-1 / 6-2",
    "etiqueta": null,
    "nota": "Disputado inicialmente bajo la dupla Ruiz / Sydow.",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-078",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Coman / Coman",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lludgar / Dardatt",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-079",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "8va Femenina",
    "zonaJugada": "Zona F",
    "categoriasInvolucradas": [
      "8va Femenina"
    ],
    "ganador": {
      "nombre": "Barbero / Infante",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Cresimbeni / Orellano",
      "categoriaActual": "8va Femenina",
      "zonaActual": "Zona F",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-080",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Fernandez / Araujo",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Micol / Chazarreta",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-2 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-081",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Rossi / Rodini",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Pugliese / Gutierrez",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-082",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Orieta / Tobar",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Rojas / Butiler",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 6,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-6",
    "parciales": "6-2 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-083",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Perez / Cortez",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Paz / Bianchi",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 5,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-5",
    "parciales": "6-3 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-084",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Castañeda / Lescano",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 200,
      "sets": 2,
      "games": 17,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alegre / Rafael",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona D",
      "puntos": 100,
      "sets": 1,
      "games": 12,
      "enTabla": true
    },
    "setsMarcador": "2-1",
    "gamesMarcador": "17-12",
    "parciales": "6-3 / 5-7 / 6-2",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-085",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Argañaraz / Herrera",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Bertinat / Arias",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 40,
      "sets": 0,
      "games": 3,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-3",
    "parciales": "6-2 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-086",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "7ma Femenina",
    "zonaJugada": "Zona E",
    "categoriasInvolucradas": [
      "7ma Femenina"
    ],
    "ganador": {
      "nombre": "Romano / Orellana",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Destefani / Morales",
      "categoriaActual": "7ma Femenina",
      "zonaActual": "Zona E",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-087",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona A",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Rosalen / Gomez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona A",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Alegre / Marturet",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona A",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-5 / 6-4",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-088",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona B",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Palavecino / Tula",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Brunet / Skupin",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona B",
      "puntos": 40,
      "sets": 0,
      "games": 4,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-4",
    "parciales": "6-3 / 6-1",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-089",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Roldan / Gonzales",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 300,
      "sets": 2,
      "games": 12,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Jimenez / Frias",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 40,
      "sets": 0,
      "games": 2,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "12-2",
    "parciales": "6-2 / 6-0",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-090",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona C",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Roldan / Gonzales",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Villalba / Cortez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona C",
      "puntos": 0,
      "sets": 0,
      "games": 0,
      "enTabla": true
    },
    "setsMarcador": "vs.",
    "gamesMarcador": "Sin games",
    "parciales": "Partido pendiente",
    "etiqueta": "Pendiente",
    "nota": "Partido pendiente de Fecha 3.",
    "computado": false,
    "cronica": ""
  },
  {
    "id": "F3-091",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Kusmus / Aguero",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Lorenzo / Leguizamon",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 9,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-9",
    "parciales": "7-6 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  },
  {
    "id": "F3-092",
    "fecha": 3,
    "fechaLabel": "20, 21 y 23 de Noviembre",
    "categoriaJugada": "Suma 11 Femenina",
    "zonaJugada": "Zona D",
    "categoriasInvolucradas": [
      "Suma 11 Femenina"
    ],
    "ganador": {
      "nombre": "Mussi / Suarez",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 300,
      "sets": 2,
      "games": 13,
      "enTabla": true
    },
    "perdedor": {
      "nombre": "Mansilla / Lorenzo",
      "categoriaActual": "Suma 11 Femenina",
      "zonaActual": "Zona D",
      "puntos": 40,
      "sets": 0,
      "games": 8,
      "enTabla": true
    },
    "setsMarcador": "2-0",
    "gamesMarcador": "13-8",
    "parciales": "7-5 / 6-3",
    "etiqueta": null,
    "nota": "",
    "computado": true,
    "cronica": ""
  }
];
