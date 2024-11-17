import { Maquina } from "./maquina";

export class Bingo extends Maquina {
    public nombreMaquina : string;
        
    constructor (nombreMaquina: string, apuestaMinima : number, pozoAcumulativo : number) {
        super (apuestaMinima, pozoAcumulativo);
        this.nombreMaquina = nombreMaquina;
    }
    
    public getNombreMaquina(): string {
        return this.nombreMaquina;
    }
    public setNombreMaquina(nombreMaquina: string): void {
        this.nombreMaquina = nombreMaquina;
    }
    
    public apostar (){
        
    }
}