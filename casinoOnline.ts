import { Usuario } from "./usuario";

export class CasinoOnline {
    private nombre: string;
    private direccion: string;
    private usuario: Usuario;

    constructor(nombre: string, direccion: string) {
        this.usuario = new Usuario(""); //se inicia vacio, luego se le setea con el nombre ingresado por el usuario
        this.nombre = nombre;
        this.direccion = direccion;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre : string): void {
        this.nombre = nombre;
    }
    public getDireccion () : string {
        return this.direccion;
    }
    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }
    public getUsuario (){
        return this.usuario;
    }
    public setUsuario ():void{
        this.usuario = new Usuario("");
    }
}