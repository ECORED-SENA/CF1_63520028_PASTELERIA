<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .cont_sintesis.p-4.pb-5
      .row
        .col-auto.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/sintesis2.png")
        .col.mb-5
          figure(data-aos="zoom-in-up")
            img(src="@/assets/curso/sintesis.svg", alt="Diagrama de Introducción a la Pastelería, que incluye máquinas y equipos como horno, empaques, bandejas, balanza y batidor manual; ingredientes esenciales como huevo, harina, leche, grasas, azúcar y sal; y Buenas Prácticas de Manufactura (BPM) que aseguran seguridad y calidad en todas las etapas de la producción.")
      .row.justify-content-center
        .col-auto(data-aos="zoom-in")
          a.anexo.mb-5.bg-white(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank" style="box-shadow:0px 0px 25px rgba(0,0,0,.15);")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
.cont_sintesis
  background: url(../assets/curso/sintesis1.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_sintesis
    background-size: cover !important
</style>
