export abstract class Maquina {
    
    constructor (){
    }

    public darGananciaRuleta (numero : number) :number {
        let ganancia:number = numero * 4 + numero;
        return ganancia;
    }
    public perderJuego (numero:number) :number {
        let resultado:number = 0;
        numero = resultado - numero;
        return numero;
    }
}
