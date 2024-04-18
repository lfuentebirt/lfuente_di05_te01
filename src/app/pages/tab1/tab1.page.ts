import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  datosTablaTab1 = [
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 }
  ];

  datosLista = [
    "Esta será la línea 1 de la lista, vamos a poner un texto muy largo para ver qué es lo que hace en estos casos y como podemos corregirlo",
    "Esta será la línea 2 de la lista, será más corta que la anterior, pero entrará bastante justo en el ancho A4.",
    "Esta será la línea 3 de la lista, este entra bien",
    "Esta será la línea 4 de la lista, este entra bien",
    "Esta será la línea 5 de la lista, este entra bien",
    "Esta será la línea 6 de la lista, este entra bien",
    "Esta será la línea 7 de la lista, este entra bien",
    "Esta será la línea 8 de la lista, este entra bien",
    "Esta será la línea 9 de la lista, este entra bien",
    "Esta será la línea 10 de la lista, este entra bien",
    "Esta será la línea 11 de la lista, este entra bien",
    "Esta será la línea 12 de la lista, este entra bien",
    "Esta será la línea 13 de la lista, este entra bien",
    "Esta será la línea 14 de la lista, este entra bien",
    "Esta será la línea 15 de la lista, este entra bien",
    "Esta será la línea 16 de la lista, este entra bien",
    "Esta será la línea 17 de la lista, este entra bien",
    "Esta será la línea 18 de la lista, este entra bien",
    "Esta será la línea 19 de la lista, este entra bien",
    "Esta será la línea 20 de la lista, este entra bien",
  ];

  categorias: string[] = [
    "business",
    "entertainment",
    "general",
    "technology",
    "health",
    "science",
    "sports"
  ];
  backgroundColorCat: string[] = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
  ];

  borderColorCat: string[] =[
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ];

  @ViewChild('container') container!: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  generarPDF() {
    // datos para A4
    const anchoMax = 794;
    const altoMax = 1123;
    const doc = new jsPDF({
      orientation: 'portrait', //Orientación normal
      unit: 'px', 
      format: [anchoMax,altoMax]
    });
    
    // por cada seccion de html
    const sections = this.container.nativeElement.querySelectorAll('.seccion') as NodeListOf<HTMLElement>;
    const totalSections = sections.length;

    let currentSectionIndex = 0;
    let contSections = 0;

    let headerHeight = 65; //header
    let footerHeight = 42; //footer
    let currentPageHeight = headerHeight + footerHeight;

    while (currentSectionIndex < totalSections) {
      const section = sections[currentSectionIndex];
      html2canvas(section).then(canvas => {
        const imageData = canvas.toDataURL('image/jpg');
        let width = doc.internal.pageSize.getWidth();
        let height = canvas.height * (width / canvas.width);
        
        console.log(section + " : width " + width + " height : " + height);

        if (currentPageHeight + height >= doc.internal.pageSize.getHeight()) {
          // redimensionamiento si la imagen es muy grande, calculamos la anchura a partir de la altura
          if(height > altoMax){
            height = altoMax - currentPageHeight;
            width = canvas.width * (height / canvas.height);
          }
          doc.addPage();
          currentPageHeight = headerHeight + footerHeight;
        }

        doc.addImage(imageData, 'JPG', 0, currentPageHeight, width, height);
        currentPageHeight += height;
        contSections++;
        if (contSections === totalSections) {
          this.addPageConfig(doc);
          doc.save('dashboard.pdf');
        }
      });
      currentSectionIndex++;
    }
  }

  addPageConfig(doc:jsPDF) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // Añadimos la págin
      doc.setPage(i);
     
      this.generarCabecera(doc);
      this.generarPie(doc, i);
    }
  }
  generarPie(doc: jsPDF, paginaActual: number) {
    // Definir el espacio alrededor del rectángulo gris
    const espacio = 10;

    // Calcular la posición del pie de página
    const footerX = espacio;
    const footerY = doc.internal.pageSize.height - espacio;


    // Definir el texto del pie de página
    const textoFooter = "Página " + paginaActual + " de " + doc.getNumberOfPages();

    // Obtener el ancho y la altura del texto del pie de página
    const textoFooterHeight = 12; // Altura estimada del texto del pie de página

    // Calcular la altura del rectángulo gris
    const footerRectHeight = textoFooterHeight + 2 * espacio;

    // Calcular la posición del texto
    const textX = footerX + (doc.internal.pageSize.width - 2 * espacio) / 2;
    const textY = footerY - footerRectHeight + espacio; // Ajustar la posición vertical

    // Agregar rectángulo gris como fondo del pie de página
    doc.setFillColor('#CCCCCC');
    doc.rect(footerX, footerY - footerRectHeight, doc.internal.pageSize.width - 2 * espacio, textoFooterHeight, 'F');

    // Agregar el texto del pie de página centrado horizontalmente dentro del rectángulo gris
    doc.text(textoFooter, textX, textY, { align: 'center' });
  }

// metodo para la generacion de la cabecera 
  generarCabecera(doc: jsPDF){
    // variables
     // Añadimos el logotipo, sus valores y posición
     const imagen = "/assets/icon/favicon.png";
     const imgWidth = 50; // Ancho de la imagen
     const imgHeight = 50; // Alto de la imagen
     const imgX = (doc.internal.pageSize.width - imgWidth) / 2; // Posición X de la imagen
     const imgY = 10; // Posición Y de la imagen

     
     // Añadimos información de la empresa
     const nombreEmpresa = "Nombre de la Empresa";
     const telefono = "Teléfono: 123-456-789";
     const direccion = "Dirección: Calle Principal, 123";
     const texto = nombreEmpresa+'\n'+telefono+'\n'+direccion;

      // Agregar rectángulo gris como fondo
    doc.setFillColor('#CCCCCC');
    doc.rect(10, 10, doc.internal.pageSize.width - 20, 50, 'F');

    // Agregar la imagen
    doc.addImage(imagen, "PNG", imgX, imgY, imgWidth, imgHeight);

    // Le asignamos un tamaño a las letras
    doc.setFontSize(12);
    doc.line(0, 65, doc.internal.pageSize.width, 65);
    doc.text(texto, 17, 25);

  }
}
