<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Conocer y aplicar conceptos y técnicas de auditoría a los requisitos y controles de un SGSI
    
    .bloque-texto-a.color-primario.p-3.p-md-4.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img01.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Al establecer técnicas de auditoría como la implementación de las políticas de seguridad de la información, se definen principios generales, pero no se definen las tecnologías o formas específicas de realizar las actividades.
            p En tal sentido, se deben establecer roles y responsabilidades en cada fase, estos deben ser auditados y se debe describir cómo cumplir la política de seguridad de la Información.
            p.mb-0 Para mayor ilustración sobre roles y responsabilidades del SGSI se invita al aprendiz a consultar la guía del MINTIC (Roles y Responsabilidades – Seguridad y Privacidad de la Información), en el material complementario.

    p.mb-5 La siguiente figura representa elementos involucrados en la política de seguridad de la información:

    .row.justify-content-center
      .col-md-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4
          span Control de Información documentada

    .row.justify-content-center.mb-5
      .col-md-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img02.svg')
    
    .row.mb-5
      .col-auto.BG04.p-2(data-aos="fade-right")  
        p.mb-0 Nota. Tomado d e Icontec, 2013.
      
    p En relación con las políticas de seguridad de la información, es importante indicar que tienen la siguiente estructura:
    
    .row.justify-content-center.mb-5
      .col-md-10
        .tarjeta--container.row
          .col-md.BG02.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema3/img03.png')
            h5.text-center Alcance
            p Describe a quién se aplica la política.
          .col-md.BG05.p-5(data-aos="zoom-in")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema3/img04.png')
            h5.text-center Objetivo
            p Describe qué busca proteger la política.
          .col-md.BG02.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema3/img05.png')
            h5.text-center Marco normativo
            p Identifica las leyes que apoyan a la política.
    
    .row.justify-content-center.mb-5
      .col-md-10
        .row.justify-content-center.align-items-center
          .col-md-8.order-md-1.order-2.BGIMG01.p-4(data-aos="fade-right")
            p Esta estructu ra debe contener detalles como:
            ul.lista-ul--color
              li 
                i.fas.fa-file-alt.fa-fw
                | Condiciones obligatorias:  explica lo que se debe cumplir.
              li 
                i.fas.fa-file-alt.fa-fw
                | Responsabilidades: identifica quiénes tienen obligaciones sobre la política.
              li 
                i.fas.fa-file-alt.fa-fw
                | Seguimiento y control: identifica cómo se revisan las políticas.
              li 
                i.fas.fa-file-alt.fa-fw
                | Procedimientos: identifica los procedimientos que implementan la política.
          .col-md-4.col-8.order-md-2.order-1.mb-md-0.mb-4.img06(data-aos="zoom-in")
            img(src='@/assets/curso/tema3/img06.png')

    p A continuación, se presenta el ejemplo de cómo podría ser una política:

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-4.col-8.mb-md-0.mb-4.tarjeta-avatar(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img07.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          .h4.text-center.mt-5 Alcance
          p Esta política aplica a todo el personal de la organización que sea responsable de usar o administrar activos de la organización.
      .col-lg-3.col-md-4.col-8.mb-md-0.mb-4.tarjeta-avatar(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/img08.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          .h4.text-center.mt-5 Objetivo
          p.mb-5 Asegurar que la información reciba un nivel de protección apropiado de acuerdo a la importancia de la organización.
      .col-lg-3.col-md-4.col-8.mb-md-0.mb-4.tarjeta-avatar(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img09.png' alt='AvatarTop')
        .BGR02.p-4.py-5
          .h4.text-center.mt-5 Marco Normativo 
          p Talento humano informa sobre la importancia de la organización donde deben incorporar los principios de transparencia y equidad.

    p Ahora, la política general de seguridad es la información de más alto nivel de la organización, en ella se expone el compromiso e intención de la organización para lograr la seguridad de la información, las demás políticas apoyan el objetivo de dicha política, allí se pueden encontrar el avance y mejoras implementadas. A continuación, se relacionan algunos ejemplos de políticas de seguridad de la información específicas:

    .BGIMG04.p-4
      .row.justify-content-center
        .col-md-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Figura 5
            span Políticas específicas

      figure.mb-5(data-aos="zoom-in")
        img(src='@/assets/curso/tema3/img10.svg')
      
      p Algunas de est as políticas específicas, se presentan a continuación:
  
    .row.mb-4
      .col-auto.BGR06.p-2.px-2(data-aos="fade-right")  
        .h5.mb-0.text-white Políticas de seguridad
      
    .BGR07.p-4.mb-4(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="1")
          .col-md-7.order-md-1.order-2
            .h4 Uso y manejo del parque computacional
            p Esta política describe las directrices sobre el uso de los equipos de tecnología, incluyen equipos de propiedad de la entidad, equipos de contratistas y personales de empleados que los utilicen para tener acceso a la información de la empresa, incluyen:
            ul.lista-ul--color
              li 
                i.fas.fa-file-alt.fa-fw
                | Uso aceptable de activos.
              li 
                i.fas.fa-file-alt.fa-fw
                | Acceso a componentes de tecnología.
              li 
                i.fas.fa-file-alt.fa-fw
                | Uso del dispositivo.
          .col-md-3.col-6.order-md-2.order-1.mb-4
            img.img90(src='@/assets/curso/tema3/img11.png')
          .col-12.order-3
            .row.justify-content-center
              .col-md-4.col-10.mb-md-0.mb-4
                .BG03.p-4.pb-5
                  .h4 Alcance
                  p.mb-5 Aplica a todo el personal que preste sus servicios en la organización contratistas y terceros.
                  <br><br><br>
              .col-md-4.col-10.mb-md-0.mb-4
                .BG03.p-4.pb-5
                  .h4 Objetivo
                  p.mb-5 Definir las pautas generales para mantener un uso adecuado y administración de los activos informáticos de la entidad.
                  <br><br><br>
              .col-md-4.col-10
                .BG03.p-4
                  .h4 Directrices
                  p Los recursos de la entidad, incluida su información deben ser empleados únicamente para las funciones asignadas.
                  p Reportar problemas con los equipos a la mesa de ayuda.
                  p Mantener segura la información confidencial en los dispositivos personales.
        .row.justify-content-center(titulo="2")
          .col-md-7.order-md-1.order-2
            .h4 Uso seguro de la tecnología
            ul.lista-ul--color
              li 
                i.fas.fa-file-alt.fa-fw
                | Escritorio y pantallas despejadas.
              li 
                i.fas.fa-file-alt.fa-fw
                | Al dejar el puesto de trabajo solo, proteger la información en un lugar seguro.
              li 
                i.fas.fa-file-alt.fa-fw
                | Al dejar el puesto de trabajo solo, bloquear la pantalla.
              li 
                i.fas.fa-file-alt.fa-fw
                | No dejar información de la entidad desprotegida en puntos de atención al público.
          .col-md-3.col-6.order-md-2.order-1.mb-4
            img.img90(src='@/assets/curso/tema3/img12.png')
        .row.justify-content-center(titulo="3")
          .col-12
            .h4 Uso de servicios tecnológicos
            p.mb-5 En estas políticas se describen las directrices sobre el uso de los servicios informáticos en la organización incluyen:
          .col-lg-4.col-10.mb-lg-0.mb-4
            .BG03.p-4
              .row.justify-content-center.mb-4
                .col-md-4.col-6
                  img.img90(src='@/assets/curso/tema3/img13.png')
              .h4 Correo electrónico
              ul.lista-ul--color
                li 
                  i.fas.fa-file-alt.fa-fw
                  | El uso del correo electrónico será solo para las funciones asignadas, evitar Inscripción de redes sociales, compras Online, listas de correo.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Nunca Compartir la contraseña del correo.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Cambiar periódicamente la contraseña (mínimo cada tres meses).
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Todos los correos deben tener firma y nota de confidencialidad.
          .col-lg-4.col-10.mb-lg-0.mb-4
            .BG03.p-4.pb-5
              .row.justify-content-center.mb-4
                .col-md-4.col-6
                  img.img90(src='@/assets/curso/tema3/img14.png')
              .h4 Internet
              ul.lista-ul--color
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Utilizar el servicio de la entidad solo para el cumplimiento de las funciones asignadas por talento humano. 
                li 
                  i.fas.fa-file-alt.fa-fw
                  | El servicio de acceso a internet será monitorizado y controlado para garantizar la seguridad y calidad de todo el personal.
              p.mb-5 #[strong Nota]: en internet existen varios sitios inseguros. 
          .col-lg-4.col-10
            .BG03.p-4.pb-5
              .row.justify-content-center.mb-4
                .col-md-4.col-6
                  img.img90(src='@/assets/curso/tema3/img15.png')
              .h4 Cuentas de usuario
              ul.lista-ul--color
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Las cuentas de usuario son personales e intransferibles.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Los responsables de los procesos deben aprobar los permisos de cada usuario según el manual de funciones de la organización.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Al momento de dejar la organización el empleado o contratista debe devolver la cuenta de usuario y la información a su cargo.
        .row.justify-content-center(titulo="4")
          .col-12
            .h4.mb-5 Uso de servicios tecnológicos
          .col-lg-4.col-10.mb-lg-0.mb-4
            .BG03.p-4.pb-5
              .row.justify-content-center.mb-4
                .col-md-4.col-6
                  img.img90(src='@/assets/curso/tema3/img16.png')
              .h4 Teletrabajo
              ul.lista-ul--color
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Los riesgos del teletrabajo deben ser sometidos a evaluaciones de riesgos.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Es necesario evaluar y monitorear las actividades que se podrían realizar por teletrabajo.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | El acceso al teletrabajo debe cumplirse conforme a las leyes nacionales. 
          .col-lg-4.col-10
            .BG03.p-4
              .row.justify-content-center.mb-4
                .col-md-4.col-6
                  img.img90(src='@/assets/curso/tema3/img17.png')
              .h4 Antivirus
              ul.lista-ul--color
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Es obligatorio el uso del antivirus en todos los computadores, dispositivos móviles, teléfono inteligentes y demás equipos de la organización.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | Está prohibido desinstalar o bloquear el antivirus.
                li 
                  i.fas.fa-file-alt.fa-fw
                  | El antivirus que se debe utilizar es el adquirido por la organización.
        .row.justify-content-center(titulo="5")
          .col-md-7.order-md-1.order-2
            .h4 Talento humano
            ul.lista-ul--color
              li 
                i.fas.fa-file-alt.fa-fw
                | Desvinculación y cambio de funciones.
              li 
                i.fas.fa-file-alt.fa-fw
                | Toma de conciencia.
              li 
                i.fas.fa-file-alt.fa-fw
                | Capacitaciones en seguridad de la información.
              li 
                i.fas.fa-file-alt.fa-fw
                | Los empleados de la entidad deben leer y aceptar y cumplir las políticas de seguridad.
              li 
                i.fas.fa-file-alt.fa-fw
                | Los funcionarios deben tomar conciencia sobre las vulnerabilidades y riesgos existentes en el mundo digital.
              li 
                i.fas.fa-file-alt.fa-fw
                | Cuando se produzca una desvinculación, vacaciones o cambio de funciones se debe aplicar procedimientos de devolución de activos, bloqueos provisionales a los accesos o sistemas de información y correo.
          .col-md-4.col-6.order-md-2.order-1.mb-4
            img(src='@/assets/curso/tema3/img18.png')
        .row.justify-content-center(titulo="6")
          .col-12
            .h4 Talento humano
            p Formato Política de Respaldo de Información 
            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th(style="background-color: #F2F2F2;" colspan="3").mb-0 Nombre del responsable del sistema de información /servidor
                    th(style="background-color: #fff;" colspan="8")
                tbody
                  tr
                    th(style="background-color: #F2F2F2;" colspan="3").mb-0 Nombre del responsable del proceso
                    th(style="background-color: #fff;" colspan="8")
                  tr
                    th(style="background-color: #F2F2F2;").mb-0 Proceso
                    th(style="background-color: #F2F2F2;").mb-0 Servidor/ sistema de información
                    th(style="background-color: #F2F2F2;").mb-0 Plataforma
                    th(style="background-color: #F2F2F2;").mb-0 Tipo de respaldo
                    th(style="background-color: #F2F2F2;").mb-0 Directorios a respaldar/ información a resguardar
                    th(style="background-color: #F2F2F2;").mb-0 Nombres respaldo
                    th(style="background-color: #F2F2F2;").mb-0 Fecha/ Horario ejecución
                    th(style="background-color: #F2F2F2;").mb-0 Tiempo de retención
                    th(style="background-color: #F2F2F2;").mb-0 Dispositivo de respaldo
                    th(style="background-color: #F2F2F2;").mb-0 Tamaño información [GB]
                    th(style="background-color: #F2F2F2;").mb-0 Observaciones
                  tr
                    th(style="background-color: #F2F2F2;").mb-0 Nombre de proceso
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                  tr
                    th(style="background-color: #F2F2F2;").mb-0 Nombre de proceso
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")
                    th(style="background-color: #fff;")

        .row.justify-content-center(titulo="7")
          .col-lg-7.order-lg-1.order-2
            .h4 Específicas de gestión de tecnología
            p Son políticas muy concretas que se aplican a los administradores de los servicios de tecnología, incluyen:
            ul.lista-ul--color
              li 
                i.fas.fa-file-alt.fa-fw
                | Controles criptográficos.
              li 
                i.fas.fa-file-alt.fa-fw
                | Eliminación de medio.
              li 
                i.fas.fa-file-alt.fa-fw
                | Gestión de incidentes.
              li 
                i.fas.fa-file-alt.fa-fw
                | Gestión de vulnerabilidades técnicas.
              li 
                i.fas.fa-file-alt.fa-fw
                | Control de cambios.
              li 
                i.fas.fa-file-alt.fa-fw
                | Copias de respaldo de información.
              li 
                i.fas.fa-file-alt.fa-fw
                | Desarrollo de software.
          .col-lg-3.col-6.order-lg-2.order-1.mb-4
            img.img90(src='@/assets/curso/tema3/img19.png')

    p Los formatos n ecesarios para realizar solicitudes con relación a los datos recolectados durante la auditoría se presentan a continuación:

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-md-10.BGIMG03.p-4
        .row.justify-content-center
          .col-md-3.col-4
            img(src='@/assets/curso/tema3/img21.png')
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                .h4 Tabla 2
                .h4 Solicitud de Cambio en componentes de infraestructura tecnológica
              .col-sm-auto.pt-md-5
                a.boton.color-primario.text-white.mt-md-5(:href="obtenerLink('downloads/tabla02.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-md-10.BGIMG03.p-4
        .row.justify-content-center
          .col-md-3.col-4
            img.w-75(src='@/assets/curso/tema3/img22.png')
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                .h4 Tabla 3
                .h4 Aprobación del cambio
              .col-sm-auto.pt-md-5
                a.boton.color-primario.text-white.mt-md-5(:href="obtenerLink('downloads/tabla03.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-md-10.BGIMG03.p-4
        .row.justify-content-center
          .col-md-3.col-4
            img.w-75(src='@/assets/curso/tema3/img23.png')
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                .h4 Tabla 4
                .h4 Plan de trabajo del cambio
              .col-sm-auto.pt-md-5
                a.boton.color-primario.text-white.mt-md-5(:href="obtenerLink('downloads/tabla04.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download         

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-10.BGIMG03.p-4
        .row.justify-content-center
          .col-md-3.col-4
            img.w-75(src='@/assets/curso/tema3/img24.png')
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                .h4 Tabla 5
                .h4 Evaluación de resultados del cambio
              .col-sm-auto.pt-md-5
                a.boton.color-primario.text-white.mt-md-5(:href="obtenerLink('downloads/tabla05.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 

    .row.justify-content-center.align-items-center.mb-4
      .col-md-4.col-8.mb-md-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img25.png')
      .col-md-8
        p Dentro de la evaluación de desempeño del SGSI, la organización debe valorar el ejercicio de seguridad de información y la eficacia del Sistema de Gestión de Seguridad de la Información, mediante:
        ul.lista-ul--color
          li 
            i.fas.fa-file-alt.fa-fw
            | Procesos de alineación de TI y negocios.
          li 
            i.fas.fa-file-alt.fa-fw
            | Proceso de gestión de riesgos de seguridad de la información.
          li 
            i.fas.fa-file-alt.fa-fw
            | Procesos de cumplimiento legal o normativo.
          li 
            i.fas.fa-file-alt.fa-fw
            | Proceso de sensibilización y comunicación.
          li 
            i.fas.fa-file-alt.fa-fw
            | Procesos de auditoría del sistema.
        p Para más información se recomienda al aprendiz consultar Evaluación del Desempeño en ISO 27001- Requisitos en detalle, en el material complementario.
        p La siguiente tabla es un ejemplo de cronograma, donde el auditor puede ajustar la duración dependiendo del parque computacional de la organización.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-md-10.BGIMG03.p-4
        .row.justify-content-center
          .col-md-3.col-4
            img.w-75(src='@/assets/curso/tema3/img26.png')
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                .h4 Tabla 6
                .h4 Cronograma auditoría
              .col-sm-auto.pt-5
                a.boton.color-primario.text-white.mt-5(:href="obtenerLink('downloads/tabla06.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img27.png')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Al finalizar e l proceso de auditoría se debe entregar un Informe final sobre la empresa planteada y siguiendo la continuidad de los informes realizados en las fases anteriores, se diseña e implementa el plan de mejora empresarial previniendo pérdidas de la información empresarial y aplicando como auditor las políticas de SGSI.

</template>

<script>
export default {
  name: 'Tema3',
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
