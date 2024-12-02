export interface Comportamiento {
    resultadoJuego (numero:number, numero2:number) : number;
    darGananciaRuleta (numero : number) :number;
    perderJuego (numero:number) :number;
}