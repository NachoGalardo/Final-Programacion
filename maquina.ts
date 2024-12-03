export abstract class Maquina {
    protected nombreJuego : string;
    
    constructor (nombreJuego : string) {
        this.nombreJuego = nombreJuego;
    }
   
    abstract perderJuego (numero:number) :number;
}
