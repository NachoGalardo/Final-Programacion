import { Maquina } from "./maquina";
import { Comportamiento } from "./interface";
import { Usuario } from "./usuario";

export class Ruleta extends Maquina implements Comportamiento {
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
    
    public resultadoJuego(): number {

        return 0;
    }

    public apostar (){
        
    }
}