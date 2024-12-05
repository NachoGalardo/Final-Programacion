export abstract class Maquina {
    protected nombreJuego : string;
    
    constructor (nombreJuego : string) {
        this.nombreJuego = nombreJuego;
    }
   
    protected abstract perderJuego (numero:number) :number;
}
