import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablePipe'
})
export class TablePipePipe implements PipeTransform {

  transform(array: any[], trozoSize: number): any[][] {
    // si no tenemos contenido
    if (!array || !Array.isArray(array) || trozoSize <= 0) {
      return [];
    }

    const trozos = [];
    let i = 0;

    // recorremos el array
    while (i < array.length) {
      //  si no nos quedan elementos para completar el último trozo
      if (i + trozoSize >= array.length) {
        trozos.push(array.slice(i));
      } else {
        trozos.push(array.slice(i, i + trozoSize));
      }
      i += trozoSize;
    }
    return trozos;
  }
}
