<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro.pb-5
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          .row
            .pe-lg-0.col-lg-auto.mb-4.mb-lg-0
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src="@/assets/curso/intro2.svg")
            .col-lg.ps-lg-0
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#C8F9F3;")
                p.mb-0 La pastelería, una de las artes culinarias más apreciadas, ha experimentado una notable evolución a lo largo de la historia. Desde sus humildes inicios en la prehistoria, cuando el hombre cocía granos molidos sobre piedras calientes, hasta la sofisticada repostería moderna, cada etapa ha sido marcada por importantes innovaciones culturales y tecnológicas. Este componente explora los hitos más relevantes en el desarrollo de la pastelería, destacando cómo diferentes civilizaciones han contribuido a su evolución. 
        .col-lg-4(data-aos="fade-left" style="place-self:center;")
          figure.d-none.d-lg-block
            img(src="@/assets/curso/intro3.png")
      
      .col-xl-11.m-auto.mt-5
        .row.justify-content-center
          .col-lg-auto.mb-4.mb-lg-0.col-md-6(data-aos="fade-right")
            figure.m-auto.col-7.col-md-12
              img(src="@/assets/curso/intro4.png")
          .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
            .h-100.text-center.bg-white.p-4.pt-lg-5(style="box-shadow:0px 0px 30px rgba(0,0,0,.17);")
              figure
                img(src="@/assets/curso/intro5.svg" style="max-width:90px;display:inline;")
              p.mt-3.fw-bold Equipos y maquinaria
              p.mb-0 La pastelería moderna se sostiene sobre una base sólida de equipos y maquinaria especializada. Estos elementos, desde hornos y batidoras hasta pesadoras y cámaras de fermentación, son fundamentales para optimizar la producción y garantizar la calidad de los productos. La adecuada selección y uso de estas herramientas no solo mejoran la eficiencia, sino que también permiten la creación de una amplia variedad de delicias culinarias que conocemos y disfrutamos hoy en día.
          .col-lg.col-md-8(data-aos="zoom-in")
            .h-100.text-center.bg-white.p-4.pt-lg-5(style="box-shadow:0px 0px 30px rgba(0,0,0,.17);")
              figure
                img(src="@/assets/curso/intro6.svg" style="max-width:90px;display:inline;")
              p.mt-3.fw-bold Buenas Prácticas de Manufactura (BPM)
              p.mb-0 Para asegurar la inocuidad y la calidad en la industria de la pastelería, es imprescindible la implementación de Buenas Prácticas de Manufactura (BPM). Estas prácticas abarcan desde la manipulación y preparación de ingredientes hasta el envasado y distribución de los productos finales. El cumplimiento de normativas y estándares internacionales, junto con un enfoque constante en la mejora continua, garantiza que los productos de pastelería sean seguros para el consumo y de la más alta calidad posible.




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro,.cont_intro *
  position: relative
.cont_intro:before
  content: ''
  position: absolute
  width: 125%
  height: 107%
  left: -15%
  bottom: -7%
  top: 0
  background: url(../assets/curso/intro1.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_intro:before
    background-size: cover !important
    height: 100% !important
    bottom: 0 !important
</style>
