import { Comportamiento } from "./comportamiento";
import { Maquina } from "./maquina";

export class Ruleta extends Maquina implements Comportamiento {
  
    constructor (nombreJuego : string) {
        super (nombreJuego);
    }
    public perderJuego (numero:number) :number {
        let resultado:number = - numero;
        return resultado;
    }
    public darGananciaJuego (numero : number) :number {
        let ganancia:number = numero * 35 + numero;
        return ganancia;
     }
    public resultadoJuego (numeroApostado:number, valorApuesta: number) : number {
        let ruleta: number;
        let minimo: number= 0;
        let maximo: number= 36;
        ruleta = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if (numeroApostado == ruleta) {
            console.log (`Felicidades tu numero salio!!`);
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } else {
            console.log (`Lo lamentamos, el numero ganador es el ${ruleta} !!`);
            let resultado:number = this.perderJuego(valorApuesta);
            return resultado;
        }
    }
}