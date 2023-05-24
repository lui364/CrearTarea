import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from 'src/app/Models/Tarea';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tarea',
  templateUrl: './list-tarea.component.html',
  styleUrls: ['./list-tarea.component.css']
})
export class ListTareaComponent {
  eliminar = 0;
  completada = 0;
  @Input() listadoTarea:any;
  @Output() eliminarTarea = new EventEmitter<number>();
 
  alertT(index:number){
    this.completada = ++ this.completada;
    Swal.fire(
      'Buen Trabajo!',
      'Tu tarea fue completada con exito!',
      'success'
    )
    this.eliminarTarea.emit(index);
  }
  
  alertF(index: number){
    this.eliminar = ++ this.eliminar;
    Swal.fire({
      icon: 'error',
      title: 'Eliminar',
      text: 'Esta tarea fue eliminada!',
    })
     
    this.eliminarTarea.emit(index);
  }
}
