import { Comportamiento } from "./comportamiento";
import { Maquina } from "./maquina";

export class Ruleta extends Maquina implements Comportamiento {
    private tipoRuleta: string;

    constructor (nombreJuego : string, tipoRuleta: string) {
        super (nombreJuego);
        this.tipoRuleta = tipoRuleta;
        this.nombreJuego = nombreJuego;
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
            console.log ('\x1b[32m%s\x1b[0m',`Felicidades tu numero salio!!`);
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } else {
            console.log ('\x1b[31m%s\x1b[0m',`Lo lamentamos, el numero ganador es el ${ruleta} !!`);
            let resultado:number = this.perderJuego(valorApuesta);
            return resultado;
        }
    }
}