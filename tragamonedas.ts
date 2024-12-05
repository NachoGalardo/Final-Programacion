import { Comportamiento } from "./comportamiento";
import { TragamonedaPadre } from "./tragamonedasPadre";

export class Tragamoneda extends TragamonedaPadre implements Comportamiento {
    private multiplicadorDeApuesta : number;

    constructor (cantidadPosiciones : number, minimo : number, maximo : number, nombreJuego : string) {
        super (cantidadPosiciones, minimo, maximo, nombreJuego);
        this.multiplicadorDeApuesta = 2;
    }

    public bonus () : number {
        let multiplicadorBonus :number = this.multiplicadorDeApuesta*2;
        return multiplicadorBonus;
    }
    public perderJuego (numero:number) :number {
        let resultado:number = - numero;
        return resultado;
    }
    public darGananciaJuego (numero : number) :number {
        let ganancia:number = numero * this.multiplicadorDeApuesta;
        return ganancia;
    }
    public resultadoJuego (valorApuesta: number) : number {
        let tabla : number [] = [];
        for (let i=0; i < this.getCantidadPosiciones(); i++) {
            tabla[i] = Math.floor(Math.random() * (this.getMaximo() - this.getMinimo() + 1)) + this.getMinimo();
        } 
        console.table([tabla.slice(0, 3), tabla.slice(3, 6), tabla.slice(6)]); 
        if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) && ((tabla [3] === tabla [4]) && (tabla [4] === tabla [5])) && ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8]))) {
            console.log ('\x1b[32m%s\x1b[0m', "FELICIDADES GANASTE EL POZO MAYOR");
            let resultado:number = this.darGananciaJuego(valorApuesta)*10;
            if (valorApuesta > 400){
                resultado = this.darGananciaJuego (valorApuesta) * this.bonus(); //si apuesta mas de 400 y saca el gordo se cuatriplica lo apostado*10
            }
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) && ((tabla [3] === tabla [4]) && (tabla [4] === tabla [5]))){
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*2;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        }
        else if (((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) && ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8]))) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*2;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if (((tabla [3] === tabla [4]) && (tabla [4] === tabla [5])) && ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8]))) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en dos lineas");
            let resultado:number = this.darGananciaJuego(valorApuesta)*2;
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [0] === tabla [1]) && (tabla [1] === tabla [2])) { 
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en la primera linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [3] === tabla [4]) && (tabla [4] === tabla [5])) {
            console.log ('\x1b[32m%s\x1b[0m', "Ganaste en la segunda linea");
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } 
        else if ((tabla [6] === tabla [7]) && (tabla [7] === tabla [8])) {
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
}