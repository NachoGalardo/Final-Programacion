import { Usuario } from "./usuario";
import { Maquina } from "./maquina";

export class CasinoOnline  {
    public maquinas : Maquina [];

    constructor () {
        this.maquinas = [];
    }

    public crearUsuario (nombre:string):Usuario{
        let usuario:Usuario = new Usuario(nombre);
        return usuario;
    }

    public getmaquinas():Maquina[] {
       return this.maquinas;
    }
}