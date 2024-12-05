import { Maquina } from "./maquina";

export abstract class TragamonedaPadre extends Maquina {
    private cantidadPosiciones: number;
    private minimo : number;
    private maximo : number;

    constructor(cantidadPosiciones : number, minimo : number, maximo : number, nombreJuego : string) {
        super (nombreJuego);
        this.cantidadPosiciones = cantidadPosiciones;
        this.minimo = minimo;
        this.maximo = maximo;
        this.nombreJuego = nombreJuego;
    }
    
    protected abstract bonus (multiplicadorBonus:number) : number;

    protected getCantidadPosiciones(): number {
        return this.cantidadPosiciones;
    }
    protected getMinimo(): number {
        return this.minimo;
    }
    protected getMaximo(): number {
        return this.maximo;
    }
}