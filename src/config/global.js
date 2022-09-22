export default {
  global: {
    componenteFormativo: 'Evaluación de métricas y controles',
    descripcionCurso:
      'En el presente componente el estudiante estará en la capacidad de implementar un programa de auditoría interna con base a la norma ISO 27001, manteniendo la competencia como auditor y aplicando los diferentes conceptos y técnicas de auditoría, así como los requisitos y controles de un sistema integrado de seguridad de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Diseñar, implementar y evaluar un programa de auditoría interna de un SGSI',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desarrollar y mantener la competencia de los auditores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Conocer y aplicar conceptos y técnicas de auditoría a los requisitos y controles de un SGSI',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Diseñar, implementar y evaluar un programa de auditoría interna de un SGSI',
      referencia:
        'NQA. (2013). ISO 27001:2013. Guía de implantación para la seguridad de la información.',
      tipo: 'PDF',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      tema: 'Desarrollar y mantener la competencia de los auditores',
      referencia: 'Diario oficial. (2009). Ley 1273 de 2009.',
      tipo: 'PDF',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      tema: 'Desarrollar y mantener la competencia de los auditores',
      referencia: 'Defensoria.gov.co. (2012). Ley Estatutaria 1581 de 2012.',
      tipo: 'PDF',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_1581_2012.pdf',
    },
    {
      tema: 'Desarrollar y mantener la competencia de los auditores',
      referencia:
        'CONPES. (2011). Conpes 3701 de 2011. Lineamientos de Política para Ciberseguridad y Ciberdefensa.',
      tipo: 'PDF',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      tema: 'Desarrollar y mantener la competencia de los auditores',
      referencia:
        'CONPES. (2016). Conpes 3854 de 2016. Política Nacional de Seguridad Digital.',
      tipo: 'PDF',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      tema: 'Desarrollar y mantener la competencia de los auditores',
      referencia:
        'Consejo de Europa. (2001). Convenio sobre la Ciberdelincuencia.',
      tipo: 'PDF',
      link: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
    {
      tema: 'Desarrollar y mantener la competencia de los auditores',
      referencia: 'ISO 27001. (s.f.). Evaluación del Desempeño en ISO 27001.',
      tipo: 'Página web',
      link: 'https://normaiso27001.es/evaluacion-del-desempeno-en-iso-27001',
    },
    {
      tema:
        'Conocer y aplicar conceptos y técnicas de auditoría a los requisitos y controles de un SGSI',
      referencia:
        'Oficina de Seguridad para las Redes Informáticas. (s.f.). Metodología para la Gestión de la Seguridad Informática (Proyecto).',
      tipo: 'PDF',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      tema:
        'Conocer y aplicar conceptos y técnicas de auditoría a los requisitos y controles de un SGSI',
      referencia:
        'MINTIC. (2016). Seguridad y privacidad de la información – Roles y Responsabilidades.',
      tipo: 'PDF',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G4_Roles_responsabilidades.pdf',
    },
    {
      tema:
        'Conocer y aplicar conceptos y técnicas de auditoría a los requisitos y controles de un SGSI',
      referencia:
        'MINTIC. (2016). Guía Gestión de riesgos. Seguridad y privacidad de la información.',
      tipo: 'PDF',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Autenticación',
      significado:
        'Uno de los significados más acordes se encuentra en educalingo (educalingo, s.f.)<br>Acto de establecimiento o confirmación de algo como auténtico. La autenticación de un objeto puede significar la confirmación de su procedencia, mientras que la autenticación de una persona a menudo consiste en verificar su identidad. La autenticación depende de uno o varios factores. Desde el punto digital existen varios tipos de autenticación como las contraseñas, biométricos, token y otros.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Un significado que no da la empresa (ORACLE, 2022)<br>Es una recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático. Normalmente una base de datos está controlada por un sistema de gestión de base de datos (DBMS). En un conjunto, los datos y el DBMS, junto con las aplicaciones asociadas a ellos, reciben el nombre de sistema de base de datos, abreviado normalmente a simplemente base de datos.',
    },
    {
      termino: 'Evidencia digital',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia se encuentran definiciones de la unidad de delitos informáticos de la fiscalía general de la nación (FGN, 2009).<br>También conocida como evidencia computacional, única y conocida como: registros o archivos generados por computador u otro medio equivalente, registros o archivos no generados sino simplemente almacenados por o en computadores o medios equivalentes y registros o archivos híbridos que incluyen tanto registros generados por computador o medio equivalente como almacenados en los mismos.',
    },
    {
      termino: 'Log',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia se encuentran definiciones de la unidad de delitos informáticos de la fiscalía general de la nación (FGN, 2009).<br>Un Log es un registro oficial de eventos durante un periodo de tiempo en particular. Para los profesionales en seguridad informática un Log es usado para registrar datos o información sobre quien, que, cuando, donde y por qué (who, what, when, where y why, W5) un evento ocurre para un dispositivo en particular o aplicación. La mayoría de los logs son almacenados o desplegados en el formato estándar, el cual es un conjunto de caracteres para dispositivos comunes y aplicaciones. De esta forma cada log generado por un dispositivo en particular puede ser leído y desplegado en otro diferente. A su vez la palabra log se relaciona con el término Evidencia Digital. Un tipo de evidencia física construida de campos magnéticos y pulsos electrónicos que pueden ser recolectados y analizados con herramientas y técnicas especiales, lo que implica la lectura del log y deja al descubierto la actividad registrada en el mismo.',
    },
    {
      termino: 'PHVA',
      significado:
        'Enfoque de gestión simple e iterativo para probar cambios en procesos o soluciones a problemas, e impulsar su optimización continua a través del tiempo. Por sus siglas Planear, Hacer, Verificar, Actuar.',
    },
    {
      termino: 'Redes',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia se encuentran definiciones de la unidad de delitos informáticos de la fiscalía general de la nación (FGN, 2009).<br>Una red de computadoras (también llamada red de ordenadores o red informática) es un conjunto de equipos (computadoras y/o dispositivos) conectados, que comparten información (archivos), recursos (CD-ROM, impresoras, etc.) y servicios (acceso a internet, e-mail, chat, juegos), etc.',
    },
    {
      termino: 'SGSI',
      significado: 'Sistema de Gestión de Seguridad de la Información.',
    },
    {
      termino: 'Seguridad informática',
      significado:
        'Gómez (2006) define la seguridad informática como cualquier medida que impida la ejecución de operaciones no autorizadas sobre un sistema o red informática cuyos efectos puedan conllevar daños sobre la información, equipo o software. Por su parte, Kissel (2012) la define como la protección de información y sistemas de información de acceso no autorizado.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'Dentro de la guía de subproceso policía judicial en Colombia se encuentran definiciones de la unidad de delitos informáticos de la fiscalía general de la nación (FGN, 2009).<br>Es el conjunto de procesos que, operando sobre una colección de datos estructurada de acuerdo con una empresa o entidad, recopila, elabora y distribuye (parte de) la información necesaria para el buen funcionamiento de ella. Además, apoya actividades de dirección y control correspondientes, apoyando al menos en parte, la toma de decisiones necesarias de acuerdo con su estrategia.',
    },
    {
      termino: 'Transmisión de datos',
      significado:
        'Movimiento de información codificada de un punto a otro/s punto/s. Estos datos se transmitirán mediante señales eléctricas, ópticas, radio o electromagnéticas (FGN, 2009).',
    },
    {
      termino: 'Riesgo',
      significado:
        'En el ámbito informático la definición de riesgo son las amenazas digitales de las que se está expuesto día a día cuando se hace uso de la tecnología.',
    },
  ],
  referencias: [
    {
      referencia: 'Congreso de Colombia. (agosto 21 de 1999). Ley 527 de 1999.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      referencia: 'Congreso de Colombia. (enero 5 de 2009). Ley 1273 de 2009.',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      referencia: 'DNP. (abril 11 de 2016). Conpes 3854 de 2016.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3854.pdf',
    },
    {
      referencia: 'DNP. (julio 14 de 2011). Conpes 3701 de 2011.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia:
        'Erb, M. (2009). Gestión de riesgo en la seguridad informática.',
      link:
        'https://protejete.wordpress.com/gdr_principal/amenazas_vulnerabilidades/',
    },
    {
      referencia:
        'FGN. (2009). Procedimientos Forenses de Policía Judicial. Bogotá.',
    },
    {
      referencia:
        'Gómez, A. (2006). Enciclopedia de la Seguridad Informática. España: RA-Ma.',
    },
    {
      referencia: 'ICONTEC. (2013). ISO 27001.',
      link:
        'https://www.nqa.com/medialibraries/NQA/NQA-Media-Library/PDFs/Spanish%20QRFs%20and%20PDFs/NQA-ISO-27001-Guia-de-implantacion.pdf',
    },
    {
      referencia: 'ICONTEC. (agosto 19 de 2009). ISO 27005.',
      link:
        'https://gmas2.envigado.gov.co/gmas/downloadFile.public?repositorioArchivo=000000001071&ruta=/documentacion/0000001359/0000000107',
    },
    {
      referencia:
        'Instituto Nacional de Ciberseguridad (INCIBE). Guía de Ciberataques.',
      link:
        'https://www.osi.es/sites/default/files/docs/guia-ciberataques/osi-guia-ciberataques.pdf',
    },
    {
      referencia: 'Mifsud, E. (2012). Introducción a la seguridad informática.',
      link:
        'http://recursostic.educacion.es/observatorio/web/es/software/software-general/1040-introduccion-a-la-seguridad-informatica',
    },
    {
      referencia:
        'MINTIC, M. d. (abril 1 de 2016). Guía Gestión de riesgos MINTIC.',
      link: 'https://acortar.link/aGHdJn',
    },
    {
      referencia: 'National Institute of Standards and technology. (2002).',
      link:
        'https://instituciones.sld.cu/dnspminsap/files/2013/08/Metodologia-PSI-NUEVAProyecto.pdf',
    },
    {
      referencia: 'OAS. (2001). Convenio sobre la Ciberdelincuencia.',
      link: 'https://www.oas.org/juridico/english/cyb_pry_convenio.pdf',
    },
    {
      referencia: 'ORACLE. (2022). ORCALE.',
      link: 'https://www.oracle.com/co/database/what-is-database/',
    },
    {
      referencia: 'OWASP Top 10 2021. (2021).',
      link: 'https://owasp.org/Top10',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Cesar Antonio Villamizar Núñez',
        cargo: 'Experto temático',
        centro:
          'Región Norte de Santander - Centro de la industria, la empresa y los servicios',
      },
      {
        nombre: 'Gustavo Santis Mancipe',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
