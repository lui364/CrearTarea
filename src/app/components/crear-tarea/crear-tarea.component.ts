import { Component, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/Models/Tarea';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {
  
  nombre = "";
  diaSemana = "Lunes";
  descripcion = "";
  formulario = false;
  agregar = 0;
  eliminado = 0;

  @Output() nuevaTarea = new EventEmitter<Tarea>();

  addTarea(){
    if(this.nombre == "" || this.diaSemana == "" || this.descripcion ==""){ 
      this.formulario = true;
      return;
    }
    this.formulario = false;
    

    const TAREA = {
      nombre:this.nombre,
      diaSemana:this.diaSemana,
      descripcion:this.descripcion
    }
    this.nuevaTarea.emit(TAREA);
    this.reset();
  }

  reset(){
    this.nombre = "";
    this.diaSemana = "Lunes";
    this.descripcion = "";
  }
}
