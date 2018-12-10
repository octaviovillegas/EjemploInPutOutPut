import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/clases/profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  @Output() SeCreoUnProfesor: EventEmitter<any>= new EventEmitter<any>();
  
  nuevoProfesor:Profesor;
  
  constructor() { }

  ngOnInit() {
  }

  crearProfesor()
  {
    //hacer cosas
    this.nuevoProfesor=new Profesor("fonte","analisis",666);
    this.SeCreoUnProfesor.emit(this.nuevoProfesor);
  }

}
