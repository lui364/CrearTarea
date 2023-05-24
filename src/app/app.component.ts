import { Component } from '@angular/core';
import { Tarea } from './Models/Tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listTarea: any[] = [];


  agregarTarea(tarea:Tarea){
    this.listTarea.push(tarea);
    console.log(this.listTarea);
  }

  eliminarTareaListado(index:number){
    this.listTarea.splice(index,1);
  }
}
