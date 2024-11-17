export abstract class Maquina {
    public apuestaMinima : number;
    public pozoAcumulativo : number;
    
    constructor (apuestaMinima : number, pozoAcumulativo : number) {
        this.apuestaMinima = apuestaMinima;
        this.pozoAcumulativo = pozoAcumulativo;
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

    public abstract apostar () ;

}