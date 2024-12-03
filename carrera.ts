import { Caballo } from "./caballo";
import { Comportamiento } from "./comportamiento";
import { Maquina } from "./maquina";

export class Carrera extends Maquina implements Comportamiento{
    protected distancia: number;
    protected caballos: Caballo[];
    
    constructor(nombreJuego : string) {
        super (nombreJuego);
        this.distancia = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
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
    public perderJuego (numero:number) :number {
        let resultado:number = - numero;
        return resultado;
    }
    public getListaCaballos(): Caballo[] {
        return this.caballos;
    }
    public getDistanciaPista () : void {
        console.log (`El largo de la pista es ${this.distancia} mts`);
        return;
    }
    public darGananciaJuego(numero: number): number {
        let ganancia:number = numero * 8 + numero;
        return ganancia;
    }
    public resultadoJuego(numeroCaballoApostado:number, valorApuesta:number) : number {
        let podio =  this.ordenarPodio(this.caballos, this.distancia);            
        if (numeroCaballoApostado == podio[0].numeroCaballo) {
            console.log ('\x1b[32m%s\x1b[0m',`Felicidades tu caballo es el ganador!!`);
            let resultado:number = this.darGananciaJuego(valorApuesta);
            console.log (`Tu ganancia total es de: ${resultado}.`);
            return resultado;
        } else {
            console.log (`Cruzaron el disco. El caballo ganador es ${podio[0].nombre} con el numero ${podio[0].numeroCaballo} !!`);
            console.log ('\x1b[31m%s\x1b[0m',`Lo lamentamos has perdido. Esta es la tabla de posiciones: `);
            console.table (podio);
            let resultado:number = this.perderJuego(valorApuesta);
            return resultado;
        }
    }
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
}
