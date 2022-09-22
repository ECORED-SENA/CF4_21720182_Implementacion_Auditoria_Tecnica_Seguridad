<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Desarrollar y mantener la competencia de los auditores
    
    p Dentro de las auditorías in situ, el auditor líder debe contar con un plan de auditoría, que debe contener la siguiente información:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img01.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          p.text-center.my-5 Objetivos de la auditoría.
          br
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img02.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          p.text-center.mt-5 Criterios de la auditoría 
          p.text-center y documentos de referencia. 
          br
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img03.png' alt='AvatarTop')
        .BGR02.p-4
          p.text-center.mt-5 Alcance:
          ul.lista-ul--color
            li 
              i.fas.fa-file-alt.fa-fw
              | Unidades de la organización.
            li 
              i.fas.fa-file-alt.fa-fw
              | Unidades funcionales.
            li 
              i.fas.fa-file-alt.fa-fw
              | Procesos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img04.png' alt='AvatarTop')
        .BGR02.p-4
          p.text-center.mt-5 Agenda:
          ul.lista-ul--color
            li 
              i.fas.fa-file-alt.fa-fw
              | Fechas.
            li 
              i.fas.fa-file-alt.fa-fw
              | Lugares. 
            li 
              i.fas.fa-file-alt.fa-fw
              | Tiempo.
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img05.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          p.text-center.mt-5 Funciones y responsabilidades 
          p.text-center del equipo auditor.
          br
      .tarjeta-avatar
        img(src='@/assets/curso/tema2/img06.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          p.text-center.my-5 Recursos.
          br
    
    p A continuación, se presenta un formato de ejemplo para el control de auditoría.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 1
      span Formato control de auditoría

    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Objetivo
            th(style="background-color: #fff;" colspan="10")
        tbody
          tr
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Alcance
            th(colspan="10")
          tr
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Criterios
            th(colspan="10")
          tr
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Auditor líder
            td(colspan="4")
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Equipo auditor
            td(colspan="4")
          tr
            td(colspan="12")
          tr
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Reunión de apertura
            td(colspan="4")
            th(style="background-color: #F2F2F2;" colspan="2").mb-0 Reunión de cierre
            td(colspan="4")
          tr
            td(colspan="12")
          tr
            th(style="background-color: #F2F2F2;" colspan="2").text-center.mb-0 Alcance
            th(style="background-color: #F2F2F2;" colspan="1").text-center.mb-0 Hora
            th(style="background-color: #F2F2F2;" colspan="3").text-center.mb-0 Proceso/Actividad
            th(style="background-color: #F2F2F2;" colspan="2").text-center.mb-0 Observaciones
            th(style="background-color: #F2F2F2;" colspan="2").text-center.mb-0 Auditado
            th(style="background-color: #F2F2F2;" colspan="2").text-center.mb-0 Auditores
          tr
            th(colspan="2")
            th(colspan="1")
            th(colspan="3")
            th(colspan="2")
            th(colspan="2")
            th(colspan="2")
          tr
            th(colspan="2")
            th(colspan="1")
            th(colspan="3")
            th(colspan="2")
            th(colspan="2")
            th(colspan="2")
          tr
            th(colspan="2")
            th(colspan="1")
            th(colspan="3")
            th(colspan="2")
            th(colspan="2")
            th(colspan="2")
          tr
            th(colspan="2")
            th(colspan="1")
            th(colspan="3")
            th(colspan="2")
            th(colspan="2")
            th(colspan="2")
          tr
            td(style="background-color: #F2F2F2;" colspan="2").text-bold.text-center.mb-0 Observaciones
            td(colspan="10")
          tr
            td(style="background-color: #F2F2F2;" colspan="6").text-bold.mb-0 Elaborado por
            td(style="background-color: #F2F2F2;" colspan="3").text-bold.mb-0 Aprobado
            td(style="background-color: #F2F2F2;" colspan="3").text-bold.mb-0 Fecha

    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.order-md-1.order-2      
        p El auditor de seguridad de la información debe establecer píldoras o programas de concienciación, en la que por ejemplo se concientice sobre la importancia de crear contraseñas seguras.
        .BG03.p-4(data-aos="fade-right")
          .h4 Ataques por ingeniería social
          p La ciberseguridad reconoce estas acciones como ciberataques, en estas se tiene como propósito que los usuarios revelen información personal o corporativa que pueda afectar la identidad digital de los colaboradores o clientes, permitiendo el control de los dispositivos de la organización y los sistemas de información.
      .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img07.jpg')

    p Dentro de los tipos de ciberataques también se encuentra el ataque a las contraseñas:

    .BGIMG02.p-4.mb-5(data-aos="zoom-in")
      SlyderA.img02(tipo="b")
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Propósito
            p Obtener la contraseña a través de algún tipo de técnica de ataque usada por el ciberdelincuente que permita acceder a las aplicaciones utilizadas por el usuario víctima, con el fin de obtener información que permita lograr algún tipo de utilidad económica y de satisfacción personal.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img08.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Técnica de ataque: fuerza bruta
            p Tiene como objetivo conseguir la contraseña del usuario a partir de un proceso de múltiples combinaciones, probando técnicas como ataque por diccionario (uso de un archivo diccionario en formato txt normalmente) el cual, mediante software automatizado logra probar combinaciones posibles hasta obtener la contraseña (este se logra si el diccionario es extenso y efectivo).
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img09.png')
        .row.justify-content-center
          .col-md-5.order-md-1.order-2
            .h4 Cómo reducir la exposición a este ataque
            p Hacer uso de contraseñas que combinen letras en mayúscula y minúscula, número y caracteres especiales.
            p Usar diferentes contraseñas para los sitios de consulta frecuente que requieren factor de autenticación.
            p No escribir las contraseñas en documentos físicos o digitales que no se encuentren guardados en un computador cifrado.
            p Para sitios web o aplicaciones que indiquen o sugieran guardar contraseña y usuario, No aceptar, hacer caso omiso a los mensajes.
          .col-md-5.col-10.order-md-2.order-1.mb-md-0.mb-4
            img(src='@/assets/curso/tema2/img10.png')

    .row.mb-4
      .col-auto.BG04.p-2(data-aos="fade-right")  
        p.mb-0 Nota. Adaptado de Instituto Nacional de Ciberseguridad (INCIBE)
    
    p Otra actividad para realizar es aplicar la lista de verificación el ciclo PHVA, donde se ponen en práctica los conceptos de auditoría de SGSI. En ese proceso se debe coordinar la planificación, analizar los resultados y avances del plan de mejora, se puede implementar una lista y un listado de verificación.
    p El formato se muestra a continuación:

    .row.justify-content-center
      .col-lg-5.col-10.mb-lg-0.mb-4
        .BGIMG02.p-4.pb-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-md-4.col-8
              img(src='@/assets/curso/tema2/img11.png')
          .h4.text-center Lista de verificación
          ul.lista-ul--color.mb-5
            li 
              i.fas.fa-file-alt.fa-fw
              | Proceso
            li 
              i.fas.fa-file-alt.fa-fw
              | Información a buscar
            li 
              i.fas.fa-file-alt.fa-fw
              | Documentos y/o registros
            li 
              i.fas.fa-file-alt.fa-fw
              | Comentarios/ Observaciones/ Conclusiones/ Hallazgos
            li 
              i.fas.fa-file-alt.fa-fw
              | PHVA
            li 
              i.fas.fa-file-alt.fa-fw
              | Observaciones
            li 
              i.fas.fa-file-alt.fa-fw
              | Responsable
          <br><br><br><br><br>
      .col-lg-5.col-10
        .BGIMG02.p-4(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-md-4.col-8
              img(src='@/assets/curso/tema2/img12.png')
          .h4.text-center Listado de verificación
          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-file-alt.fa-fw
              | Cláusula de control
            li 
              i.fas.fa-file-alt.fa-fw
              | Objetivo
            li 
              i.fas.fa-file-alt.fa-fw
              | Control
            li 
              i.fas.fa-file-alt.fa-fw
              | Descripción control
            li 
              i.fas.fa-file-alt.fa-fw
              | Información técnica que apoye el control (ISO 27002, ISO 27007, ISO IEC TR 27008)
            li 
              i.fas.fa-file-alt.fa-fw
              | Guía práctica de auditoría
            li 
              i.fas.fa-file-alt.fa-fw
              | Evidencia esperada
            li 
              i.fas.fa-file-alt.fa-fw
              | Método
            li 
              i.fas.fa-file-alt.fa-fw
              | Descripción de hechos
            li 
              i.fas.fa-file-alt.fa-fw
              | Fortalezas
            li 
              i.fas.fa-file-alt.fa-fw
              | Observaciones
            li 
              i.fas.fa-file-alt.fa-fw
              | No conformidades

</template>

<script>
export default {
  name: 'Tema2',
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
