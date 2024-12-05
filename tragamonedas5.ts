import { Comportamiento } from "./comportamiento";
import { TragamonedaPadre } from "./tragamonedasPadre";

export class Tragamoneda5x3 extends TragamonedaPadre implements Comportamiento{
    private tipo: string;
    
    constructor (cantidadPosiciones : number, minimo : number, maximo : number, nombreJuego : string, tipo : string) {
        super (cantidadPosiciones, minimo, maximo, nombreJuego);
        this.tipo = tipo;
    }
    public bonus () : number {
        let multiplicadorBonus: number = Math.floor(Math.random() * 10) + 1; //del 1 al 10
        return multiplicadorBonus;
    }
    public perderJuego (numero:number) :number {
        let resultado:number = - numero;
        return resultado;
    }
    public darGananciaJuego (numero : number) :number {
        let ganancia:number = numero * 4;
        return ganancia;
    }
    public resultadoJuego (valorApuesta: number) : number {
        let tabla : string [] = [];
        for (let i=0; i < 15; i++) {
            const codigoAscii = Math.floor(Math.random() * (this.getMaximo() - this.getMinimo() + 1)) + this.getMinimo(); //va de la A a la E
            tabla[i] = String.fromCharCode(codigoAscii);
        } 
        console.table([tabla.slice(0, 5), tabla.slice(5, 10), tabla.slice(10)]); 
        if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) && ((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9])) && ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14]))) {
            console.log ('\x1b[32m%s\x1b[0m', "FELICIDADES GANASTE EL POZO MAYOR");
            let resultado:number = this.darGananciaJuego(valorApuesta)*20;
            if (valorApuesta> 10000) {
                resultado = this.darGananciaJuego (valorApuesta) * this.bonus();
            }
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9])) && ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14]))) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*3;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) && ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14]))) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*3;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) && ((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9]))) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*3;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [0] === tabla [1]) && (tabla [1] === tabla [2]) && (tabla [2] === tabla [3]) && (tabla [3] === tabla [4])) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en la primera linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else if ((tabla [5] === tabla [6]) && (tabla [6] === tabla [7]) && (tabla [7] === tabla [8]) && (tabla [8] === tabla [9])) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en la segunda linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [10] === tabla [11]) && (tabla [11] === tabla [12]) && (tabla [12] === tabla [13]) && (tabla [13] === tabla [14])) { 
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en la tercera linea");
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
    public tiradasAutomaticas (valorApuesta:number, cantidadTiradas : number, saldoActualUsuario : number) : number {
        let resultado: number = 0;
        console.log (`La tragamonedas esta girando...`);
        console.log (`...`);
        for (let i = 0; i < cantidadTiradas; i++) {
            if (saldoActualUsuario < valorApuesta) {
                i = cantidadTiradas;
                console.log ('\x1b[31m%s\x1b[0m','Tus tiradas automaticas se detuvieron por tener saldo insuficiente');
            } else {
                console.log (`El numero de tiradas restantes es: ${cantidadTiradas - i}`);
                resultado = this.resultadoJuego(valorApuesta);
                console.log ("resultado", resultado);
                saldoActualUsuario +=  resultado;
                console.log ("saldo", saldoActualUsuario)
            }
        }
        return saldoActualUsuario;
    } 
       
}
