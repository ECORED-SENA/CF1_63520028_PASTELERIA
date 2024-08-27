export default {
  global: {
    componenteFormativo: 'Introducción a la pastelería',
    descripcionCurso:
      'El componente aborda la evolución de la pastelería, detallando su historia desde la prehistoria hasta la actualidad. Se destacan innovaciones en Egipto, Grecia y Roma, y el avance durante la Edad Media y el Renacimiento. Además, describe la maquinaria y equipos esenciales para la industria, la importancia de ingredientes clave y la implementación de Buenas Prácticas de Manufactura para asegurar calidad y seguridad en los productos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Breve historia de la pastelería',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Máquinas y equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ingredientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Buenas Prácticas de Manufactura (BPM)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63520028_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Breve historia de la pastelería',
      referencia:
        'NMás (2020). La historia de la repostería - Expreso de la Mañana. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=5ggpirYrDz4&ab_channel=TribunaNetworks',
    },
    {
      tema: 'Máquinas y equipos ',
      referencia:
        'Restaurante Exitoso | Waiterio (2023). Equipo Esencial para Tener una Panadería Exitosa  [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kWKzDxAnptY  ',
    },
    {
      tema: 'Máquinas y equipos ',
      referencia:
        'Universidad Nacional de La Plata. (s.f.). Clase 5: Pastelería. Maquinarias y utensilios. Leudantes, mantecas y azúcares. Receta de Magdalenas. Escuela Universitaria de Oficios, Prosecretaría de Políticas Sociales, Secretaría de Extensión Universitaria.',
      tipo: 'Documento',
      link:
        'https://yold.unlp.edu.ar/frontend/media/91/27491/563241698a40fef3e85b90dedb767097.pdf',
    },
    {
      tema: 'Ingredientes',
      referencia:
        'CookStorming (2020). Masterclass en Ingredientes de Repostería: cómo, cuando y por qué [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://youtu.be/n3ulLuQwsYc?si=XYOgZ9x8hVR4H660',
    },
    {
      tema: 'Buenas Prácticas de Manufactura (BPM) ',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2016). <em>Manual para manipuladores de alimentos</em>.',
      tipo: 'Guía',
      link:
        'https://openknowledge.fao.org/server/api/core/bitstreams/24a444ad-3825-4212-a58c-7e51520c200d/content  ',
    },
  ],
  glosario: [
    {
      termino: 'Almidones',
      significado:
        'son polisacáridos que se encuentran en las plantas. los almidones sirven como medio para almacenar el alimento principalmente en semillas y tubérculos de las plantas. ',
    },
    {
      termino: 'Atemperar',
      significado:
        'mantener la temperatura de los ingredientes al medio ambiente, Ej. 10 ºC. ',
    },
    {
      termino: 'Carbohidratos',
      significado:
        'son los nutrientes más abundantes que se encuentran en la naturaleza y los más consumidos por los humanos. Están compuestos de hidrógeno, oxígeno y carbono. a ellos pertenecen los almidones. ',
    },
    {
      termino: 'Conservante',
      significado:
        'es una sustancia que se agrega a los alimentos con el fin de detener su deterioro. ',
    },
    {
      termino: 'Dosificación',
      significado: 'regular o graduar la cantidad a usar en una formulación. ',
    },
    {
      termino: 'Edulcorante',
      significado:
        'es una sustancia que proporciona un sabor dulce. Pueden ser artificiales y naturales. ',
    },
    {
      termino: 'Emulsiones',
      significado:
        'es un sistema que contiene dos sustancias inmiscibles, dispersas una en otra. Una es la fase dispersa y la otra la fase dispersante o continua. ',
    },
    {
      termino: 'Grasa',
      significado:
        'son compuestos de carbono, hidrógeno y oxígeno sólidos a la temperatura ambiente. Tienen como nombre genérico lípidos. Son de origen vegetal y animal. ',
    },
    {
      termino: 'HACCP',
      significado:
        'es un sistema de análisis de peligros y de puntos críticos de control. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Calcagno, E. (s.f.). <em>Básicos de la repostería</em>. Lectio.',
      link: 'https://www.lectio.es/tasts/BASICOS.DE.LA.REPOSTERIA.tast.pdf ',
    },
    {
      referencia:
        'Gobierno de Chile. (s.f.). <em>Módulo: Pastelería y Repostería</em></em>. Biblioteca Digital Minedu.',
      link:
        'https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/4450/mo032105.pdf?sequence=20&isAllowed=y',
    },
    {
      referencia:
        'Jiménez, P. León, L. y López, J. (2012). <em>Introducción de la Cadena de Pastelerías Light</em>. Escuela Superior Politécnica del Litoral.',
      link:
        'https://www.dspace.espol.edu.ec/bitstream/123456789/52824/1/T-94633.pdf',
    },
    {
      referencia:
        'Organización de Estados Iberoamericanos. (s.f.). <em>Repostería</em>.',
      link:
        'https://oei.int/downloads/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc1V5IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7858e4c98adf3fee9270a248ab328dbb2f7e5cf1/9%20-%20Reposter%C3%ADa.pdf',
    },
    {
      referencia:
        'Puigbó, I.  (199). <em>Técnicas de pastelería para la restauración.</em>',
      link:
        'https://tranbel.com/wp-content/uploads/2019/05/tecnicas-de-pasteleria.pdf',
    },
    {
      referencia: 'Sd-foodmachine. (s.f). Pesadora de alimentos.',
      link: 'http://sd-foodmachine.com/5-3-weighing-and-grading-system/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Oswaldo Acosta Romero',
          cargo: 'Experto temtático',
          centro:
            'Centro Nacional de Hotelería Tursimo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
