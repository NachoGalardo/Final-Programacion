import * as rls from "readline-sync";
import { Usuario } from "./usuario";

export  class Maquina {
    public apuestaMinima : number;
    public pozoAcumulativo : number;
    
    constructor () {
        this.apuestaMinima = 50;
        this.pozoAcumulativo = 1000;
    }

    public getApuestaMinima(): number {
        return this.apuestaMinima;
    }
    public setApuestaMinima(apuestaMinima: number): void {
        this.apuestaMinima = apuestaMinima;
    }
    public getPozoAcumulativo(): number {
        return this.pozoAcumulativo;
    }
    public setPozoAcumulativo(pozoAcumulativo: number): void {
        this.pozoAcumulativo = pozoAcumulativo;
    }

    public apostar (usuario:Usuario) :number {
        let apuestaUsuario = rls.questionInt("Ingrese 1 para apostar 50 creditos: \nIngrese 2 para apostar 100 creditos: \nIngrese 3 para apostar 200 creditos: ");
        if (apuestaUsuario==1){usuario.setSaldo(-50)}
        else if (apuestaUsuario==2){usuario.setSaldo(-100)}
        else if (apuestaUsuario==3){usuario.setSaldo(-200)}
        return usuario.getSaldo();
    };

}

let maquina = new Maquina ();
let usuario = new Usuario ("Ignacio");
let apuesta = maquina.apostar (usuario);

usuario.setSaldo(200);
let resultado = usuario.saldo+apuesta;
console.log(resultado);

