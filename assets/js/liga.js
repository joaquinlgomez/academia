const { createApp, ref, computed } = Vue;
    createApp({
      setup() {
        const categoriaActiva = ref('Masculino');
        const preguntaAbierta = ref(0);
        const busquedaCategoria = ref('');
        const categorias = {
          Masculino: ['Iniciados', '8va', '7ma', '6ta', '5ta', 'Suma 6'],
          Damas: ['Iniciadas', '8va', '7ma', 'Suma 11']
        };
        const categoriasFiltradas = computed(() => {
          const filtro = busquedaCategoria.value.toLocaleLowerCase('es-AR');
          return (categorias[categoriaActiva.value] || []).filter(nombre => nombre.toLocaleLowerCase('es-AR').includes(filtro));
        });
        const preguntas = [
          { pregunta: '¿Cuánto cuesta la inscripción?', respuesta: 'La inscripción cuesta $30.000 por jugador. Se puede abonar en partes, pero al menos una inscripción debe estar completamente abonada el día de inicio.' },
          { pregunta: '¿Cuándo se juegan los partidos?', respuesta: 'Se juega un partido por semana, viernes o sábado, con horario a convenir.' },
          { pregunta: '¿Cuánto cuesta cada fecha?', respuesta: 'Cada fecha de juego tiene un costo de $5.000 por jugador.' },
          { pregunta: '¿Qué pasa si no clasifico a playoffs?', respuesta: 'Podés seguir participando y competir por la Copa de Plata.' }
        ];
        return { categoriaActiva, preguntaAbierta, busquedaCategoria, categorias, categoriasFiltradas, preguntas };
      }
    }).mount('#ligaApp');
