import {  Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Alumno } from '../../clases/alumno';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent implements OnInit {
  @Input()  listadoAlumnos: Alumno[];
  @Output() alumnoSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  constructor() { 


  }

  ngOnInit() {
      // tslint:disable-next-line: no-console
      console.info('tabla',this.listadoAlumnos);
  }
  mostrarDetalles(parametro)
  {
  	// tslint:disable-next-line: indent
  	console.log('tabla');
   this.alumnoSeleccionado.emit(parametro);
  }
}
