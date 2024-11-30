import { Comportamiento } from "./comportamiento";
import { Maquina } from "./maquina";

export class Tragamoneda extends Maquina implements Comportamiento {

    constructor () {
        super ();
    }
    public darGananciaJuego (numero : number) :number {
        let ganancia:number = numero * 2;
        return ganancia;
    }
    
    public resultadoJuego (valorApuesta: number) : number {
        let tabla : number [] = [];
        let minimo: number= 0;
        let maximo: number= 6;
        for (let i=0; i < 9; i++) {
            tabla[i] = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        } 
        console.table([tabla.slice(0, 3), tabla.slice(3, 6), tabla.slice(6)]); 
        if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) && ((tabla [3] === tabla [4]) && (tabla [4] === tabla [5])) && ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8]))) {
            console.log ('\x1b[31m%s\x1b[0m', "FELICIDADES GANASTE EL POZO MAYOR");
            let resultado:number = this.darGananciaJuego(valorApuesta)*10;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) && ((tabla [3] === tabla [4]) && (tabla [4] === tabla [5]))){
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*2;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) && ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8]))) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*2;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [3] === tabla [4]) && (tabla [4] === tabla [5])) && ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8]))) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*2;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) { 
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en la primera linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [3] === tabla [4]) && (tabla [4] === tabla [5])) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en la segunda linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8])) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en la tercera linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', 'Lo lamentamos. Perdiste');
            let resultado:number = this.perderJuego(valorApuesta);
            console.log (`Se restaran de tu saldo un total de: ${resultado}.`);
            return resultado;
        }
    }
}