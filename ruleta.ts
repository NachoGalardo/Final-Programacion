import { Maquina } from "./maquina";
import { Comportamiento } from "./comportamiento";

export class Ruleta extends Maquina implements Comportamiento {
  
    constructor (numeroApostado: number, valorApostar: number) {
        super(10,10);
    }
    public resultadoJuego (numeroApostado:number, valorApuesta: number) : number {
        let ruleta: number;
        let minimo: number= 0;
        let maximo: number= 36;
        ruleta = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if (numeroApostado == ruleta) {
            console.log (`Felicidades tu numero salio!!`);
            let resultado:number = this.darGananciaRuleta(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } else {
            console.log (`Lo lamentamos, el numero ganador es el ${ruleta} !!`);
            let resultado:number = this.perderRuleta(valorApuesta);
            return resultado;
        }

    }

}