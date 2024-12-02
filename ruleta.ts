import { Comportamiento } from "./comportamiento";

export class Ruleta implements Comportamiento {
  
    constructor (numeroApostado: number, valorApostar: number) {}
    
    public darGananciaRuleta (numero : number) :number {
        let ganancia:number = numero * 35 + numero;
        return ganancia;
     }
    public perderJuego (numero:number) :number {
        let resultado:number = 0;
        numero = resultado - numero;
        return numero;
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
            let resultado:number = this.perderJuego(valorApuesta);
            return resultado;
        }

    }

}