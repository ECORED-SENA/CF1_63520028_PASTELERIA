<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Ingredientes
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema3/1.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p.mb-0 La primera clave del éxito para mejorar la calidad y el sabor de sus preparaciones es conocer bien los ingredientes. ¿Sabe usted cuáles son los ingredientes más utilizados en la pastelería, qué cualidades aportan a los postres y bizcochos, y cómo escogerlos adecuadamente? A continuación los conocerá:  

    .cont_3_1.mt-4.pb-5
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      p.mt-4(data-aos="fade-right") Para lograr productos de alta calidad en pastelería, es esencial conocer los ingredientes clave y sus propiedades. A continuación, se presentan los ingredientes más importantes y sus funciones en las preparaciones.
      .tarjeta.p-4.p-xl-5.pb-lg-4.pb-xl-4.mt-4(style="background-color:#FEF8FC;")
        SlyderA(tipo="b")
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h5 Huevo
              p El huevo es considerado un ingrediente básico en la pastelería y está compuesto por tres partes importantes:
              ul.lista-ul.mt-3.ps-4
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Cáscara (10 %) 
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Yema (32 %)
                li.d-flex
                  i.fas.fa-bread-slice(style="color:#1D3FBB;")
                  div Clara (58 %)
              p El huevo aporta estructura, humedad, y color a las preparaciones, además de actuar como un agente leudante natural en muchas recetas.
            .col-lg-4
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/3.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h5 Harina
              p La harina está compuesta por minerales, proteínas, lípidos, almidones y agua. Es fundamental para darle estabilidad y estructura a los productos de pastelería. La harina utilizada es generalmente baja en proteína, lo que le permite atrapar grandes cantidades de líquido y crear una textura adecuada para pasteles y bizcochos. 
              p #[strong Nota.] Aunque la harina de trigo es la más común en la pastelería, también se pueden utilizar otras harinas dependiendo de la creatividad e iniciativa del pastelero.
            .col-lg-4
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/4.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h5 Azúcar
              p El azúcar, especialmente la sacarosa (azúcar común), es muy utilizada en la pastelería. Forma parte de los carbohidratos y se emplea en la elaboración de jarabes, cremas, cubiertas, galletas, tortas, ponqués y muchos otros alimentos como refrescos, salsas y mermeladas. Además, el azúcar también actúa como conservante. 
              p #[strong Nota.] Existen otros tipos de edulcorantes utilizados en pastelería, como la maltosa, jarabe de malta y glucosa. También hay edulcorantes artificiales como el aspartame.
            .col-lg-4
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/5.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h5 Grasas
              p En pastelería, se utilizan principalmente grasas de origen vegetal, sin descartar el uso de grasas de origen animal como la mantequilla. 
              p #[strong Grasas de origen vegetal:] las margarinas son emulsiones de grasa y agua, cuya concentración varía según sus características de uso. Contienen emulsionantes y antioxidantes, y se presentan en diferentes formatos para diversas aplicaciones, como hojaldres, bizcochos y cremas. Una de sus principales propiedades es la capacidad de atrapar aire. 
            .col-lg-4
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/6.png')
          .row.col-xl-11.m-auto.pt-4.pb-4
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h5 Leche
              p La leche es un compuesto de lípidos, proteínas, carbohidratos, vitaminas y minerales, siendo un alimento nutritivo y un ingrediente básico en la elaboración de cremas en pastelería. - Tipos de leche: Se presenta en diversas formas, como líquida entera, descremada y semidescremada, así como en polvo. También existe la leche condensada y con mezclas de sabores. 
              p #[strong Nota.] La leche en polvo es especialmente útil cuando no se dispone de una nevera y se desea ahorrar espacio, además de conferir un sabor especial a las cremas debido a los tratamientos que recibe durante su proceso. La leche mejora el valor nutritivo, el color y el sabor de las preparaciones.
            .col-lg-4
              figure.m-auto.col-12.col-md-8.col-lg-12
                img(src='@/assets/curso/tema3/7.png')
    p.mt-4(data-aos="fade-right") Al comprender estos ingredientes y sus cualidades, podrá mejorar notablemente la calidad y el sabor de sus preparaciones, garantizando resultados exitosos y deliciosos. Otros ingredientes importantes son:

    .row.mt-5.justify-content-center
      .col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.flex-wrap.align-items-center.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/8.png" style="max-width:fit-content;display:inline;")
              h4.m-auto.p-2.ps-3.pe-3(style="max-width:fit-content;background-color:#77F0E2;border-radius:50px;color:#12263F;") Frutos secos y frescos
            .text-center.tarjeta-flip__contenido.p-4(style="background-color:#A4B2E4;")
              figure
                img(src="@/assets/curso/tema3/9.png" style="max-width:150px;display:inline;")
              h4.mt-3(style="color:#12263F;") Frutos secos y frescos
              p.mb-0(style="color:#12263F;") Sustancias que realzan o intensifican el sabor de los alimentos, ya sean de origen natural o artificial.
      .col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.flex-wrap.align-items-center.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/10.png" style="max-width:fit-content;display:inline;")
              h4.m-auto.p-2.ps-3.pe-3(style="max-width:fit-content;background-color:#77F0E2;border-radius:50px;color:#12263F;") Saborizantes
            .text-center.tarjeta-flip__contenido.p-4(style="background-color:#A4B2E4;")
              figure
                img(src="@/assets/curso/tema3/11.png" style="max-width:150px;display:inline;")
              h4.mt-3(style="color:#12263F;") Saborizantes
              p.mb-0(style="color:#12263F;") Sustancias que realzan o intensifican el sabor de los alimentos, ya sean de origen natural o artificial.
      .col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.flex-wrap.align-items-center.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/12.png" style="max-width:fit-content;display:inline;")
              h4.m-auto.p-2.ps-3.pe-3(style="max-width:fit-content;background-color:#77F0E2;border-radius:50px;color:#12263F;") Colorantes
            .text-center.tarjeta-flip__contenido.p-4(style="background-color:#A4B2E4;")
              figure
                img(src="@/assets/curso/tema3/13.png" style="max-width:150px;display:inline;")
              h4.mt-3(style="color:#12263F;") Colorantes
              p.mb-0(style="color:#12263F;") Sustancias de origen mineral o vegetal usadas para resaltar los colores de las decoraciones y mejorar la apariencia de los productos.
      .col-md-6.col-xl-3.mb-4.mb-xl-0(data-aos="zoom-in")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.d-flex.flex-wrap.align-items-center.text-center
              figure.text-center
                img(src="@/assets/curso/tema3/14.png" style="max-width:fit-content;display:inline;")
              h4.m-auto.p-2.ps-3.pe-3(style="max-width:fit-content;background-color:#77F0E2;border-radius:50px;color:#12263F;") La sal
            .text-center.tarjeta-flip__contenido.p-4(style="background-color:#A4B2E4;")
              figure
                img(src="@/assets/curso/tema3/15.png" style="max-width:150px;display:inline;")
              h4.mt-3(style="color:#12263F;") La sal
              p.mb-0(style="color:#12263F;") La sal, compuesta por cloro y sodio, es esencial en la producción de alimentos y debe ser yodada para prevenir problemas de salud. Nota: La sal actúa como resaltador de sabor y conservante.

    .col-xl-10.m-auto.mt-xl-5
      .p-3(style="background-color:#E2DACC;border-radius:7px;" data-aos="zoom-in")
        .row
          .col-auto.d-none.d-md-block
            figure
              img(src="@/assets/curso/tema3/16.svg")
          .col(style="place-self:center;")
            p.mb-0 Estos ingredientes, cuando se utilizan adecuadamente, pueden transformar sus preparaciones, mejorando su calidad y sabor. 




</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1,.cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  height: 92%
  left: -15%
  bottom: 0
  background: url(../assets/curso/tema3/2.png)
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
@media screen and (max-width: 992px)
  .cont_3_1:before
    background-size: cover !important
</style>
