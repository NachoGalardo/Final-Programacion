import { Comportamiento } from "./comportamiento";
import { Maquina } from "./maquina";

export class Tragamoneda5x5 extends Maquina implements Comportamiento {

    constructor () {
        super ();
    }
    
    public resultadoJuego (valorApuesta: number) : number {
        let tabla : string [] = [];
        let minimo: number= 0;
        let maximo: number= 7;
        for (let i=0; i < 15; i++) {
            const codigoAscii = Math.floor(Math.random() * (69 - 65 + 1)) + 65; //va de la A a la E
            tabla[i] = String.fromCharCode(codigoAscii);
        } 
        //mostrar tabla 
        console.table([tabla.slice(0, 5), tabla.slice(5, 10), tabla.slice(10)]); 

        if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) && ((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9])) && ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14]))) {
            console.log ('\x1b[31m%s\x1b[0m', "FELICIDADES GANASTE EL POZO MAYOR");
            let resultado:number = this.darGananciaRuleta(valorApuesta)*20;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9])) && ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14]))) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaRuleta(valorApuesta)*3;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) && ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14]))) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaRuleta(valorApuesta)*3;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) && ((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9]))) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaRuleta(valorApuesta)*3;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en la primera linea");
            let resultado:number = this.darGananciaRuleta(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else if ((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9])) {
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en la segunda linea");
            let resultado:number = this.darGananciaRuleta(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14])) { 
            console.log ('\x1b[31m%s\x1b[0m', "Ganaste en la tercera linea");
            let resultado:number = this.darGananciaRuleta(valorApuesta);
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