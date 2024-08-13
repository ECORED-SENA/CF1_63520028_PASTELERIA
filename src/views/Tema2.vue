<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Máquinas y equipos 
    
    p(data-aos="fade-right") La industria requiere para su desarrollo y actividad diversas máquinas y equipos, dependiendo del negocio que se pretenda montar, la cantidad de producción y el presupuesto disponible. 

    .col-xl-10.m-auto.mt-4
      .row
        .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
          .p-4.p-lg-3(style="background-color:#E8EBF8;border-radius:12px;")
            .row
              .col-lg-auto.mb-4.mb-lg-0
                figure.m-auto.col-8.col-md-7.col-lg-12
                  img(src="@/assets/curso/tema2/1.png")
              .col-lg(style="place-self:center;")
                p.mb-0 Por ejemplo, se puede utilizar una batidora manual o industrial, según se necesite batir 1 libra o 50 libras de masa. De igual manera, en el caso de un horno, se seleccionará uno con capacidad para cocinar una bandeja o uno que cocine 25 o más.
        .col-lg-auto(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/2.png")
    
    p.mt-5(data-aos="fade-right") Las máquinas se clasifican en dos tipos: 

    .row.mt-4.justify-content-center
      .col-md-7.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-content-end.flex-wrap(:style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}")
              h4.m-auto.text-white.p-2.ps-3.pe-3.mb-5(style="max-width:fit-content;background-color:#1D3FBB;border-radius:50px;") Industriales
            .text-center.tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#E4FCF9;")
              figure
                img(src="@/assets/curso/tema2/4.svg" style="max-width:100px;display:inline;")
              h4.mt-3.mt-5.mt-md-0(style="color:#12263F;") Industriales
              p.mb-4.mb-md-0(style="color:#12263F;") Utilizadas para grandes producciones y grandes industrias.
      .col-md-7.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.align-content-end.flex-wrap(:style="{'background-image': `url(${require('@/assets/curso/tema2/5.png')})`}")
              h4.m-auto.text-white.p-2.ps-3.pe-3.mb-5(style="max-width:fit-content;background-color:#1D3FBB;border-radius:50px;") Artesanales
            .text-center.tarjeta-flip__contenido.p-4.p-xl-5(style="background-color:#E4FCF9;")
              figure
                img(src="@/assets/curso/tema2/6.svg" style="max-width:100px;display:inline;")
              h4.mt-3.mt-5.mt-md-0(style="color:#12263F;") Artesanales
              p.mb-4.mb-md-0(style="color:#12263F;") Utilizadas en el hogar y en pequeñas industrias.
      
      .col-lg-6(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/7.svg" style="max-width:100px;display:inline;")
        p.mt-3.mb-0 En la industria de la panificación y la repostería, es esencial contar con el equipo adecuado para optimizar la producción y garantizar la calidad de los productos. A continuación, se presenta una descripción de diversas máquinas y utensilios indispensables en este sector, desde hornos y pesadoras hasta batidoras y dosificadoras, cada uno con sus características y funcionalidades específicas. Estos equipos son fundamentales para mejorar la eficiencia y precisión en los procesos de elaboración. 
    
    .cont_2_1.mt-5.pt-4.pb-4.pb-lg-5.pt-lg-5
      .tarjeta.p-4.p-xl-5.pb-lg-4.pb-xl-4(style="background-color:#FEF8FC;")
        SlyderA(tipo="b")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Hornos
              p Un horno es un aparato cerrado que genera y mantiene calor en su interior, utilizado principalmente para cocinar, hornear, asar y calentar alimentos. Existen diferentes tipos de hornos, cada uno diseñado para cumplir funciones específicas según el método de cocción deseado.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/8.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Batidoras
              p Las batidoras, según su estilo, tienen capacidades que varían desde 5 litros hasta 240 litros para uso industrial. También hay modelos manuales y eléctricos para uso doméstico. La mayoría de las batidoras industriales cuentan con 3 velocidades y 3 funciones: amasar, batir y cremar.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/9.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Pesadoras
              p Hay varios modelos de pesadoras que sirven para porcionar masa desde 30 g hasta 1.100 g, según el fabricante. Todas ellas funcionan por succión al vacío y tienen velocidad regulable.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/10.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Laminadora de masas
              p Esta máquina produce de manera continua varias capas de masa superpuestas y laminadas para la producción de productos hojaldrados.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/11.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Dosificadora polivalente
              p Es una máquina versátil que permite dosificar e inyectar todo tipo de masas blandas y semi-blandas. También dosifica trozos de fruta, frutos secos, chocolate, entre otros, de hasta 20 milímetros de diámetro. Se utiliza para dosificar #[em muffins], #[em croissants] rellenos, bizcochos, salsas, #[em plum-cakes], tartaletas, flanes, mermeladas, productos precocidos, etc.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/12.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h5 Inyectoras
              p Son adecuadas para la inyección de rellenos como mermelada, chocolate, dulce de leche, etc., en magdalenas o #[em muffins]. El proceso se realiza después de que los productos están cocinados sobre la misma bandeja de cocción, evitando la manipulación innecesaria. Algunas inyectoras disponibles son para croissants, profiteroles, lionesas, entre otros.
            .col-lg-5
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema2/13.png')
    
    p.mt-5(data-aos="fade-right") Otras máquinas y equipos son:  

    TabsC.color-acento-botones.mt-4
      .py-3.py-md-4(titulo="Cámara de fermentación ")
        .row.col-xl-11.m-auto.pt-4.pb-4
          .col-lg-4.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src='@/assets/curso/tema2/14.png')
          .col-lg-8(style="place-self:center;")
            h5 Cámara de fermentación 
            p Esta cámara está construida en acero inoxidable y tiene control independiente de humedad y calor. 
      .py-3.py-md-4(titulo="Cargador")
        .row.col-xl-11.m-auto.pt-4.pb-4
          .col-lg-4.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src='@/assets/curso/tema2/15.png')
          .col-lg-8(style="place-self:center;")
            h5 Cargador
            p El cargador es múltiple y automático, adaptable a cualquier marca de horno. Permite la carga y descarga total o independiente de los productos. 
      .py-3.py-md-4(titulo="Escabiladero")
        .row.col-xl-11.m-auto.pt-4.pb-4
          .col-lg-4.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src='@/assets/curso/tema2/16.png')
          .col-lg-8(style="place-self:center;")
            h5 Escabiladero
            p Se utiliza para ubicar las bandejas una vez que el producto está listo, tanto antes como después de horneado. 
      .py-3.py-md-4(titulo="Bandejas, moldes y utensilios")
        .row.col-xl-11.m-auto.pt-4.pb-4
          .col-lg-4.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src='@/assets/curso/tema2/17.png')
          .col-lg-8(style="place-self:center;")
            h5 Bandejas, moldes y utensilios
            p Si desea información adicional sobre otros utensilios, consulte el material de apoyo. 
      .py-3.py-md-4(titulo="Balanza")
        .row.col-xl-11.m-auto.pt-4.pb-4
          .col-lg-4.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src='@/assets/curso/tema2/18.png')
          .col-lg-8(style="place-self:center;")
            h5 Balanza
            p Una balanza es un dispositivo utilizado para medir el peso o la masa de objetos, esencial en la cocina y pastelería para garantizar proporciones precisas de ingredientes. 
      .py-3.py-md-4(titulo="Batidor manual")
        .row.col-xl-11.m-auto.pt-4.pb-4
          .col-lg-4.mb-4.mb-lg-0
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src='@/assets/curso/tema2/19.png')
          .col-lg-8(style="place-self:center;")
            h5 Batidor manual
            p Un batidor manual es una herramienta de cocina con alambres de metal para mezclar y airear ingredientes, ideal para batir huevos, cremas y mezclas ligeras. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/21.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-5 #[strong(style="color:#F7C3EC;") Conservación] y exhibición de productos refrigerados y congelados 
    
    .cont_2_2
      p(data-aos="fade-right") En la industria alimentaria, la conservación y exhibición adecuada de productos refrigerados y congelados es fundamental para mantener su frescura y calidad. A continuación, se detallan algunos de los equipos y técnicas más utilizados: 
      .row.mt-4
        .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-7.col-md-6.col-lg-12
            img(src="@/assets/curso/tema2/23.png")
        .col-lg-9(data-aos="fade-left")
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.col-xl-11.m-auto(titulo="Nevera fuente")
              p.mb-0 Utilizada para almacenar productos que requieren refrigeración, manteniendo una temperatura constante y adecuada para evitar la proliferación de bacterias y mantener la frescura. 
            .row.col-xl-11.m-auto(titulo="Exhibición")
              p.mb-0 Equipos diseñados para presentar los productos de manera atractiva mientras se mantienen refrigerados. Estas vitrinas exhibidoras suelen tener control de temperatura y humedad para asegurar la calidad de los alimentos. 
            .row.col-xl-11.m-auto(titulo="Empaques")
              p.mb-0 Envases diseñados para proteger los productos durante su almacenamiento y transporte. Los empaques adecuados previenen la contaminación y extienden la vida útil de los productos refrigerados y congelados. 
      
      .col-xl-10.m-auto.mt-4
        .row
          .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
            .p-4.cont_2_3.h-100.d-flex.align-content-center(style="border-radius:12px;")
              .row
                .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                  figure.m-auto.col-7.col-md-12
                    img(src="@/assets/curso/tema2/25.png")
                .col-md(style="place-self:center;")
                  p.mb-0.text-white Es importante considerar que la pastelería que conocemos tiene sus raíces en Europa. No obstante, en nuestro país contamos con #[strong(style="color:#F7C3EC !important;") una rica variedad de productos autóctonos] que también forman parte integral de nuestra tradición pastelera. Entre estos se encuentran #[strong(style="color:#F7C3EC !important;") el tamal, el envuelto y el pan de bono], entre otros. Estos productos reflejan nuestra diversidad cultural y la riqueza de nuestras tradiciones culinarias.
          .col-lg-auto(data-aos="fade-left")
            figure.m-auto.col-8.col-md-6.col-lg-12
              img(src="@/assets/curso/tema2/26.png")


              



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
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
.cont_2_1,.cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema1/2.png)
  background-size: 100% 100%
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #9028E2
  background-image: url(../assets/curso/tema2/20.svg)
  border: 1px solid #9028E2
  opacity: 1
.slyder-a__bullets__item
  background-color: #D8B0F3
.slyder-a__bullets__item--active
  background-color: #9028E2 !important
  border-color: #9028E2 !important
.tabs-c__content-item
  background-color: #E8EBF8
.tabs-c__header
  margin-bottom: 0px
.tabs-c__tab.py-3.tabs-c__tab--active span
  font-weight: bold
.tabs-c__tab
  border-bottom: 4px solid #F7C3EC
.cont_2_2,.cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background: url(../assets/curso/tema2/22.png)
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
.cont_2_3
  background: url(../assets/curso/tema2/24.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_2_1:before, .cont_2_2:before, .cont_2_3
    background-size: cover !important
</style>
