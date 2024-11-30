import { Caballo } from "./caballo";
import { Comportamiento } from "./comportamiento";

export class Carrera implements Comportamiento{
    longitud: number; // Longitud de la pista en km
    caballos: Caballo[];

    public getCaballo(): Caballo[] {
        return this.caballos;
    }


    constructor() {
        this.longitud = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
        this.caballos = [
            new Caballo("Relampago",7),
            new Caballo("Trueno",11),
            new Caballo("Viento",17),
            new Caballo("Huracan",23),
            new Caballo("Tornado",32),
            new Caballo("Tiro al blanco",21),
            new Caballo("Spirit",25),
            new Caballo("Manchita",12)
        ];
    }
    
    public darGananciaJuego(numero: number): number {
        let ganancia:number = numero * 8 + numero;
        return ganancia;
    }
    
    public perderJuego(numero: number): number {
        let resultado:number = 0;
        numero = resultado - numero;
        return numero;
    }
    
    public resultadoJuego(numeroCaballoApostado:number, valorApuesta:number) : number {
        let podio =  this.ordenarPodio(this.caballos,1000);            
        if (numeroCaballoApostado == podio[0].numeroCaballo) {
            console.log (`Felicidades tu caballo es el ganador!!`);
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } else {
            console.log (`Cruzaron el disco. El caballo ganador es ${podio[0].nombre} con el numero ${podio[0].numeroCaballo} !!`);
            let resultado:number = this.perderJuego(valorApuesta);
            return resultado;
        }
        // Simular la carrera
    }
        //resultados.sort((a, b ) => a.tiempo - b.tiempo);
        //Metodo burbuja
        public ordenarPodio(arr: Caballo[], distancia: number): Caballo[] {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j].correr(distancia) > arr[j + 1].correr(distancia)) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        return arr;
    }

    // Crear una lista de caballos

}
