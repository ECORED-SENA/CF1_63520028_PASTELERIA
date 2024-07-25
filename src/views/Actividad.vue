<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Conocimiento Básico sobre la Evolución e Innovaciones en la Pastelería.',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar los conceptos fundamentales sobre la pastelería, destacando las principales innovaciones y técnicas que han contribuido al desarrollo de esta disciplina culinaria.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál fue una de las primeras técnicas utilizadas en la pastelería prehistórica?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Fermentación con levaduras',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cocción de granos sobre piedras calientes',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso de hornos de piedra',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incorporación de miel y frutas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué innovación destacaron los egipcios alrededor del 2600 a.C.?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de batidoras manuales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Primeros hornos de piedra',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarrollo de la cámara de fermentación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Creación de gremios de panaderos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué ingrediente introdujeron los griegos en la elaboración de masas dulces?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Sal',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frutos secos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Miel',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Leche',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál fue una de las contribuciones romanas a la pastelería?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Introducción de saborizantes y colorantes',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Creación de la laminadora de masas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Molinos de agua para la molienda de granos',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso de harina de trigo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué herramienta se utiliza para producir capas de masa superpuestas?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Batidora',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Inyectora',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Laminadora de masas',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cámara de fermentación',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de los siguientes equipos es fundamental para dosificar masas blandas y semi-blandas?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Hornos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Batidoras',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Dosificadora polivalente',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Escabiladero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué ingrediente es fundamental para darle estructura a los productos de pastelería?',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Azúcar',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Harina',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Leche',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Huevo',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué componente mejora el valor nutritivo y el sabor de las preparaciones en pastelería?',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Harina',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Grasas',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Leche',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sal',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            'Qué objetivo tienen las Buenas Prácticas de Manufactura (BPM)?',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el uso de ingredientes naturales',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la eficiencia operacional y reducir el desperdicio',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarrollar nuevos productos de pastelería',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la producción de masas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué normativa en Colombia introduce el sistema HACCP?',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 3075 de 1997',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 60 de 2002',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resolución 2674 de 2013',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 100 de 1995',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
