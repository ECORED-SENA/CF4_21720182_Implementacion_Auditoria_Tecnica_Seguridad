<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Diseñar, implementar y evaluar un programa de auditoría interna de un SGSI
    
    
    .row.justify-content-center.align-items-center.mb-4
      .col-md-8.order-md-1.order-2.BGIMG01.p-4(data-aos="fade-right")
        p Como primera instancia, es importante recalcar que los auditores deben determinar las necesidades de monitoreo y medición, por lo tanto, deben ser profesionales con:
        ul.lista-ul--color
          li 
            i.fas.fa-file-alt.fa-fw
            | Habilidades
          li 
            i.fas.fa-file-alt.fa-fw
            | Conocimientos
          li 
            i.fas.fa-file-alt.fa-fw
            | Conductas ejemplares
          li 
            i.fas.fa-file-alt.fa-fw
            | Experiencia laboral
        p.mb-0 en auditorías, auditorías informáticas o forenses.
      .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4.img06(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img02.png')
    
    p.mb-5 En tal sentido, para un proceso de auditoría se deben tener en cuenta:

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1
          span Proceso de auditoría

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3.col-8.BG01.p-4.mb-md-0.mb-4(data-aos="fade-right")
        .h4.text-center Criterios de Evaluación
        .row.justify-content-center
          .col-lg-4.col-6
            img(src='@/assets/curso/tema1/img03.png')
      .col-md-2.col-5.mb-md-0.mb-4(data-aos="zoom-in")
        .row.justify-content-center
          .col-md-6.col-10 
            img(src='@/assets/curso/tema1/img04.png')
      .col-md-3.col-8.BG01.p-4(data-aos="fade-left")
        .h4.text-center Métodos de Evaluación
        .row.justify-content-center
          .col-lg-4.col-6
            img(src='@/assets/curso/tema1/img05.png')

    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="zoom-in")
        img(src='@/assets/curso/tema1/img06.png')
      .col-md-8(data-aos="fade-left")
        p Por otra parte, dentro de los monitoreos y controles de evaluación, los métodos a implementar establecidos por el auditor (con formación en el área, experiencia laboral, experiencia como auditor adiciona) deben tener en cuenta:
        ul.lista-ul--color
          li 
            i.fas.fa-file-alt.fa-fw
            | Revisión de registros.
          li 
            i.fas.fa-file-alt.fa-fw
            | Retroalimentación en cada proceso.
          li 
            i.fas.fa-file-alt.fa-fw
            | Examen final.
          li 
            i.fas.fa-file-alt.fa-fw
            | Revisión posterior. 
        p Dicho lo anterior, se debe tener presente que una buena planeación es el éxito de una auditoría, porque las organizaciones quieren resultados y medidas para proteger su activo más valioso: la información. 
        p Para lograrlo, el trabajo en equipo y la sinergia son las principales directrices que debe enmarcar el auditor líder, porque equilibra fortalezas y debilidades en el equipo y organización, los informes, reuniones y comunicaciones entre el cliente de la auditoría y el auditado deben estar enmarcadas en un buen clima laboral, esta es una responsabilidad del auditor líder, para tener los mejores resultados en pro de la organización la armonía y prevenir los conflictos. La siguiente figura representa los elementos que conforman un programa de auditoría:

    .BGIMG04.p-4
      .row.justify-content-center
        .col-md-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 2
            span Programa de auditoría 

      .row.justify-content-center.mb-5
        .col-md-10(data-aos="zoom-in") 
          img(src='@/assets/curso/tema1/img07.svg')
    
    p En relación con métodos de medición y seguimiento, uno de los más utilizados es la entrevista, en esta se debe elogiar lo positivo, realizar críticas colaboradoras, tener tacto y paciencia, dejar hablar, mantener contacto visual y concentración. 
    p.mb-5 Los siguientes son algunos de los elementos involucrados en la entrevista:

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 3
          span La entrevista
    
    figure.mb-4(data-aos="zoom-in")
      img(src='@/assets/curso/tema1/img08.svg')
    
    .row
      .col-auto.BG04.p-2(data-aos="fade-right")
        p.mb-0 Nota. Tomado y adaptado de Icontec, 2013.
      
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

<style lang="sass"></style>
