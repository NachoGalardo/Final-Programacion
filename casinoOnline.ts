import { Usuario } from "./usuario";
import { Maquina } from "./maquina";

export class CasinoOnline  {
    public maquinas : Maquina [];
    public usuario : Usuario;

    constructor () {
        this.maquinas = [];
        this.usuario = new Usuario ("")
    }
    
    public getmaquinas():Maquina[] {
       return this.maquinas;
    }
}