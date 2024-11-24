import * as rls from "readline-sync";

export abstract class Maquina {
    public apuestaMinima : number;
    public pozoAcumulativo : number;
    
    constructor (apuestaMini:number, pozoAcu: number){
        this.apuestaMinima = apuestaMini;
        this.pozoAcumulativo = pozoAcu;
    }
    public getApuestaMinima(): number {
        return this.apuestaMinima;
    }
    public setApuestaMinima(apuestaMinima: number): void {
        this.apuestaMinima = apuestaMinima;
    }
    public getPozoAcumulativo(): number {
        return this.pozoAcumulativo;
    }
    public setPozoAcumulativo(pozoAcumulativo: number): void {
        this.pozoAcumulativo = pozoAcumulativo;
    }

    public darGananciaRuleta (numero : number) :number {
       let ganancia:number = numero * 35 + numero;
       return ganancia;
    }
    public perderRuleta (numero:number) :number {
        let resultado:number = 0;
        numero = resultado - numero;
        return numero;
    }
}
