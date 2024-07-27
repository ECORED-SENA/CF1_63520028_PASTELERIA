<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Buenas Prácticas de Manufactura (BPM)
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema4/1.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 Las Buenas Prácticas de Manufactura (BPM) son un conjunto de principios, normas y prácticas que garantizan la calidad e inocuidad de los alimentos. Estas prácticas abarcan todas las etapas de la cadena de producción alimentaria y son esenciales para prevenir la contaminación y asegurar que los productos sean seguros para el consumo.
    
    .row.mt-4
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p(data-aos="fade-up") Las BPM se aplican durante las siguientes etapas: 
        LineaTiempoD.color-secundario.mt-4
          div(numero="1" titulo="Manipulación")
            .row
              p.mb-0 Desde la recepción de materias primas hasta la entrega del producto final. 
          div(numero="2" titulo="Preparación")
            .row
              p.mb-0 Incluye la correcta selección y lavado de los ingredientes.
          div(numero="3" titulo="Elaboración")
            .row
              p.mb-0 Procesos de cocción, mezclado, y otros métodos de preparación de alimentos. 
          div(numero="4" titulo="Envase")
            .row
              p.mb-0 Técnicas de empaque para proteger los alimentos de contaminantes externos. 
          div(numero="5" titulo="Transporte")
            .row
              p.mb-0 Métodos de transporte que aseguren la integridad y frescura del producto. 
          div(numero="6" titulo="Distribución")
            .row
              p.mb-0 Entrega eficiente y segura de los productos al consumidor final. 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-5.col-md-4.col-lg-12
          img(src="@/assets/curso/tema4/2.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/21.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") ¿Para] qué sirven las BPM?
    
    p(data-aos="fade-right") Las BPM tienen varios objetivos clave, entre ellos: 

    .row.mt-4
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_4_1(style="background-color:#A4B2E4;border-radius:3px;border:1px #1D3FBB solid;")
          figure
            img(src="@/assets/curso/tema4/3.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Seguridad alimentaria
          p.mb-0 Reducir al mínimo los riesgos de contaminación biológica, química y física en los alimentos.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_4_1(style="background-color:#A4B2E4;border-radius:3px;border:1px #1D3FBB solid;")
          figure
            img(src="@/assets/curso/tema4/4.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Calidad del producto
          p.mb-0 Mantener altos estándares de calidad en todas las etapas de producción y distribución.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_4_1(style="background-color:#A4B2E4;border-radius:3px;border:1px #1D3FBB solid;")
          figure
            img(src="@/assets/curso/tema4/5.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Cumplimiento legal
          p.mb-0 Asegurar que los procesos de manufactura cumplan con las leyes y regulaciones locales e internacionales.
      .col-lg.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.text-center.cont_4_1(style="background-color:#A4B2E4;border-radius:3px;border:1px #1D3FBB solid;")
          figure
            img(src="@/assets/curso/tema4/6.svg" style="max-width:250px;display:inline;")
          h5.mt-3 Eficiencia operacional
          p.mb-0 Mejorar los procesos de producción para aumentar la eficiencia y reducir el desperdicio.
    
    p.mt-4(data-aos="fade-right") Las BPM se aplican a: 

    .row.mt-4
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-5.col-md-3.col-lg-12
          img(src="@/assets/curso/tema4/7.svg")
      .col-lg(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema4/8.svg")
                .col(style="place-self:center;")
                  h5 Establecimientos y fábricas
                  p.mb-0 Todos los lugares donde se procesan alimentos deben cumplir con los requisitos de higiene y manejo.
          .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema4/9.svg")
                .col(style="place-self:center;")
                  h5 Personal manipulador
                  p.mb-0 Los empleados deben estar capacitados en prácticas higiénicas y ser conscientes de su papel en la seguridad alimentaria.
          .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema4/10.svg")
                .col(style="place-self:center;")
                  h5 Equipos y utensilios
                  p.mb-0 Herramientas y maquinaria deben ser adecuadas para el uso alimentario y mantenerse en condiciones higiénicas.
          .col-lg-6.mb-4.col-md-10(data-aos="zoom-in")
            .h-100.p-4(style="background-color:#F0FDFB;border-radius:7px;border:2px #77F0E2 solid;")
              .row
                .col-auto(style="place-self:center;")
                  figure
                    img(src="@/assets/curso/tema4/11.svg")
                .col(style="place-self:center;")
                  h5 Cadena alimentaria
                  p.mb-0 Todas las acciones, desde la producción hasta la distribución, deben ser monitoreadas y controladas.
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/21.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Legislación] relacionada 
    
    p(data-aos="fade-right") Para asegurar el cumplimiento de las BPM, existen varias normativas y decretos: 

    .cont_4_2.mt-5
      .row
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema4/13.png")
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Decreto 3075 de 1997")
              p.mb-0 Establece las normas generales de las Buenas Prácticas de Manufactura en Colombia. Este decreto regula aspectos como la infraestructura de los establecimientos, el control de plagas, el manejo de residuos y la capacitación del personal. 
            .row.col-xl-11.m-auto(titulo="Decreto 60 de 2002")
              p.mb-0 Equipos diseñados para presentar los productos de manera atractiva mientras se mantienen refrigerados. Estas vitrinas exhibidoras suelen tener control de temperatura y humedad para asegurar la calidad de los alimentos. 
            .row.col-xl-11.m-auto(titulo="Resolución 2674 de 2013")
              p.mb-0 Establece los requisitos sanitarios para la producción, transporte y comercialización de alimentos y materias primas en Colombia. Esta resolución refuerza y actualiza las normativas establecidas en los decretos anteriores, garantizando una mayor protección de la salud pública mediante el cumplimiento de estándares sanitarios y de calidad en todas las etapas de la cadena alimentaria. 
          p.mt-0 Además, existen guías y normativas internacionales, como las recomendaciones del Codex Alimentarius y las normativas de la FDA (Food and Drug Administration) en Estados Unidos, que también establecen estándares para las BPM.
      
      .cont_decorativo.mb-4.mt-4(data-aos="fade-right")
        .row
          .col-auto.pe-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/21.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Implementación] de las BPM 
    
      p(data-aos="fade-right") La implementación efectiva de las BPM requiere un enfoque sistemático y continuo: 

      .row
        .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones.p-4(titulo="Capacitación" style="background-color:#FCE7F7;")
              h5 Capacitación
              p Todo el personal debe recibir formación regular sobre higiene y procedimientos seguros de manejo de alimentos. 
            .tarjeta.color-acento-botones.p-4(titulo="Documentación" style="background-color:#FCE7F7;")
              h5 Documentación
              p Mantener registros detallados de todos los procesos y controles implementados. 
            .tarjeta.color-acento-botones.p-4(titulo="Monitoreo y evaluación" style="background-color:#FCE7F7;")
              h5 Monitoreo y evaluación
              p Realizar inspecciones y auditorías regulares para asegurar el cumplimiento de las normas. 
            .tarjeta.color-acento-botones.p-4(titulo="Mejora continua" style="background-color:#FCE7F7;")
              h5 Mejora continua
              p Adaptar y mejorar los procedimientos basándose en nuevas investigaciones, tecnologías y regulaciones. 
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema4/14.png")
      
      .col-xl-10.m-auto.mt-0.mt-lg-5
        .cont_4_3.ps-lg-5.pe-lg-5.p-4.p-lg-0
          .row
            .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-down")
              figure.m-auto.col-8.col-md-5.col-lg-12
                img(src="@/assets/curso/tema4/15.svg")
            .col-lg.mb-lg-5.ps-lg-4.ps-xl-5(data-aos="fade-up" style="place-self:end;")
              p.fw-bold(style="color:#F7C3EC;") Importancia de las BPM
              p.text-white.mb-0 La adopción de BPM no solo garantiza la seguridad y calidad de los productos alimenticios, sino que también fortalece la confianza del consumidor y mejora la reputación de la empresa. Además, las BPM pueden reducir costos operativos al minimizar el desperdicio y mejorar la eficiencia de los procesos de producción. 







</template>

<script>
export default {
  name: 'Tema4',
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
.linea-tiempo-d__item__number,.linea-tiempo-d__item__content
  background-color: #D1D8F1
.linea-tiempo-d__item--selected .linea-tiempo-d__item__number, .linea-tiempo-d__item--selected .linea-tiempo-d__item__content
  background-color: #FCE7F7 !important
.cont_4_1
  transition: all .3s ease-in-out
  cursor: pointer
.cont_4_1:hover
  background-color: #D1D8F1 !important
.cont_4_2,.cont_4_2 *
  position: relative
.cont_4_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  bottom: 0
  background: url(../assets/curso/tema4/12.png)
  background-size: 100% 100%
.acordion__accion__btn--a
  background-color: #9028E2
  box-shadow: 0px 0px 7px 2px rgba(0,0,0,.2)
.acordion .tarjeta--azul
  background-color: #D1D8F1
.acordion .tarjeta.tarjeta--azul.acordion__activo
  background-color: #FCE7F7
.acordion .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F
.acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: #fff
.tabs-a__tab
  background-color: #D1D8F1
.tabs-a.color-acento-botones .tabs-a__tab__selected
  color: #fff
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  color: #fff
.cont_4_3,.cont_4_3 *
  position: relative
.cont_4_3:before
  content: ''
  position: absolute
  width: 100%
  height: 90%
  left: 0
  bottom: 0
  background: url(../assets/curso/tema2/24.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_4_2:before, .cont_4_3:before
    background-size: cover !important
</style>
