<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>
<style lang="sass">
.banner-interno
  height: 160px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #F7C3EC !important
.curso-main-container > .container
  overflow: clip !important
.titulo-segundo:after
  border-left-color: #201144 !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #12263F !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 15% !important
  right: 68% !important
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 45% !important
  right: 73% !important
.banner-principal-decorativo-3
  animation: float1 3s ease-in-out infinite alternate !important
  top: 72% !important
  right: 60% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #F7C3EC !important
.banner-principal__row .banner-principal__img img
  margin: 0 auto
  max-width: 400px
.cont_decorativo, .cont_decorativo *
  position: relative
  max-width: fit-content
  color: white
.cont_decorativo:before
  content: ''
  position: absolute
  width: 94%
  right: 3%
  height: 67%
  top: 18%
  bottom: 15%
  background-color: #1D3FBB
  border-radius: 50px
.banner-principal p, .banner-principal h1, .banner-principal h2, .banner-principal h3, .banner-principal h4, .banner-principal h5, .banner-principal h6
  color: #12263F !important
.banner-interno__titulo h1, .banner-interno__titulo h2, .banner-interno__titulo h3, .banner-interno__titulo h4, .banner-interno__titulo h5, .banner-interno__titulo h6
  color: #12263F !important
.cont_puntos:before
  content: "• • • • • •\A • • • • • •\A • • • • • •"
  position: absolute
  right: 0
  top: 15px
  height: 100%
  right: 15px
  letter-spacing: 4px
  font-size: 20px
  white-space: pre;
  line-height: 18px
.cont_puntos.cont_puntos__verde:before
  color: #F3F9F4
.cont_puntos.cont_puntos__salmon:before
  color: #FEEDDA
@media screen and (max-width: 992px)
  .banner-principal .tarjeta
    background-size: cover !important
  .cont_decorativo:before
    height: 100%
    top: 0
    bottom: 0
    right: 6%
</style>
