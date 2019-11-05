import { Component, OnInit, Input , Output, EventEmitter, Directive } from '@angular/core';
import { Alumno } from '../clases/alumno';

@Component({
  selector: '[appFilaAlumno]',
  // tslint:disable-next-line: max-line-length
  template: "hola"
})
export class FilaAlumnoDirective {
  @Output() alumnoSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() unAlumno: Alumno;

  constructor() { }
  mostrarDetalles(parametro)
  {// tslint:disable-next-line: indent
  	console.log(' fila');
   this.alumnoSeleccionado.emit(parametro);
  }
}
