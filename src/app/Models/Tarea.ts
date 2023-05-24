export class Tarea{
    id?:number;
    nombre: string;
    diaSemana:string;
    descripcion:string;

    constructor(id:number,nombre:string,diaSemana:string,descripcion:string){
        
        this.id = id;
        this.nombre = nombre;
        this.diaSemana = diaSemana;
        this.descripcion = descripcion;
    }
}