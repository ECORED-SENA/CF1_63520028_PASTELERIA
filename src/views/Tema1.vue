<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Breve historia de la pastelería
    
    .row
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema1/1.png")
      .col-lg-7(data-aos="fade-left")
        p La pastelería, una de las artes culinarias más antiguas y apreciadas, ha evolucionado significativamente a lo largo de la historia. Desde los primeros panes cocidos sobre piedra hasta la sofisticada repostería moderna, cada etapa ha sido marcada por innovaciones culturales y tecnológicas. A continuación, se presenta una breve historia de la pastelería, destacando los hitos más relevantes y las civilizaciones que contribuyeron al desarrollo de esta deliciosa disciplina. Esta línea de tiempo recorre desde los inicios en Egipto y Grecia, pasando por los avances romanos y la consolidación de los panaderos en la Edad Media, hasta llegar al florecimiento de la pastelería, como se presenta a continuación:  
    
    .cont_1_1.mt-4.pt-4.pb-4.pb-lg-5.pt-lg-5
      .tarjeta.p-4.p-xl-5(style="background-color:#FEF8FC;")
        LineaTiempoC.color-acento-botones(text-small)
          .row.col-xl-11.m-auto.pt-4.pb-4(titulo="Prehistoria")
            .col-lg-7.mb-4.mb-lg-0
              h5 Prehistoria
              p El pan, considerado uno de los primeros alimentos creados por el hombre, se originó a partir de granos molidos mezclados con agua y cocidos sobre piedras calientes. Esta simple preparación marcó el comienzo de la panadería y sentó las bases para el desarrollo de técnicas más avanzadas en las civilizaciones futuras. 
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/3.png')
          .row.col-xl-11.m-auto.pt-4.pb-4(titulo="2600 a.C.")
            .col-lg-7.mb-4.mb-lg-0
              h5 2600 a.C.
              p En el antiguo Egipto, alrededor del 2600 a.C., aparecieron los primeros hornos de piedra, lo que permitió mejorar significativamente la calidad y variedad del pan. Los egipcios fueron pioneros en la fermentación, utilizando levaduras naturales para hacer que el pan creciera y se volviera más esponjoso. 
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/4.png')
          .row.col-xl-11.m-auto.pt-4.pb-4(titulo="Siglo V a.C.")
            .col-lg-7.mb-4.mb-lg-0
              h5 Siglo V a.C.
              p Los griegos, alrededor del siglo V a.C., incorporaron varios cereales a sus preparaciones, incluyendo la cebada y el trigo. Considerados precursores de la pastelería, innovaron en la elaboración de masas y panes dulces, enriqueciendo sus recetas con miel, frutas y especias. 
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/5.png')
          .row.col-xl-11.m-auto.pt-4.pb-4(titulo="Edad Media, siglo XII")
            .col-lg-7.mb-4.mb-lg-0
              h5 Edad Media, siglo XII
              p En la Edad Media, especialmente a partir del siglo XII, los panaderos comenzaron a ganar reconocimiento y se posicionaron como una parte esencial de la sociedad. Los gremios de panaderos regulaban la producción y establecían estándares de calidad. Durante este período, se diversificaron las técnicas y se popularizaron nuevas variedades de pan en Europa. 
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/6.png')
          .row.col-xl-11.m-auto.pt-4.pb-4(titulo="Renacimiento")
            .col-lg-7.mb-4.mb-lg-0
              h5 Renacimiento
              p El desarrollo paralelo de la pastelería se intensificó a partir del Renacimiento, con la producción de azúcar refinado, miel y nuevos métodos de cocción. La pastelería comenzó a florecer como una disciplina independiente, con la creación de tartas, pasteles y otras delicias que combinaban técnicas de panadería con ingredientes dulces y decoraciones elaboradas. Este avance culminó en la sofisticada repostería que disfrutamos hoy en día, con una rica variedad de productos y estilos influenciados por siglos de innovación y tradición. 
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema1/7.png')

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_1_1,.cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/2.png)
  background-size: 100% 100%
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #9028E2
  background-color: #9028E2
.linea-tiempo-c__header__btn i, .linea-tiempo-c__header__btn--left i, .linea-tiempo-c__header__btn--right i, .pasos-b__header__btn--left i, .pasos-b__header__btn--right i
  color: #fff
@media screen and (max-width: 992px)
  .cont_1_1:before
    background-size: cover !important
</style>
