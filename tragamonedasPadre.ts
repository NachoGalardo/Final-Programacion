import { Maquina } from "./maquina";

export abstract class TragamonedaPadre extends Maquina {
    protected cantidadPosiciones: number;
    protected minimo : number;
    protected maximo : number;

    constructor(cantidadPosiciones : number, minimo : number, maximo : number, nombreJuego : string) {
        super (nombreJuego);
        this.cantidadPosiciones = cantidadPosiciones;
        this.minimo = minimo;
        this.maximo = maximo;
        this.nombreJuego = nombreJuego;
    }

    abstract bonus (multiplicadorBonus:number) : number;
}