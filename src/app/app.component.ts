import { Component } from '@angular/core';
import { Alumno } from '../app/clases/alumno';
import { Profesor } from './clases/profesor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo  @Input()  @Output()  ';
  listadoPrincipal: Alumno[] ;
  alumnoSeleccionado:Alumno;
  profesorParaMostrar:Profesor;
  ListadoProfesoresPrincipal:Profesor[];

  constructor() { 
        this.profesorParaMostrar= new Profesor("Clementina","Programacion",777);
        this.listadoPrincipal = [
          { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
          { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
        ];

        this.ListadoProfesoresPrincipal= [
          { apellido: "Alvarez" ,materia:"matematicas",legajo: 666 },
          { apellido: "Villagran" ,materia:"prog 1",legajo: 333 }
        ];
    }
  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    this.listadoPrincipal.push(NuevoAlumno);   
  }
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;   
  }
  tomarProfesorParaDetalles(NuevoProfe: Profesor)
  {
    this.profesorParaMostrar=NuevoProfe;   
  }
  mostrarProfesor(parametroProfesor:Profesor)
  {
      console.info("profesor",parametroProfesor);
      //this.profesorParaMostrar=parametroProfesor;
      this.ListadoProfesoresPrincipal.push(parametroProfesor);
  }
}
