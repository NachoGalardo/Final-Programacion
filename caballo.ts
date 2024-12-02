export class Caballo {
    public nombre: string;
    protected velocidad: number; // Velocidad máxima en km/h
    protected resistencia: number; // Resistencia en %
    public numeroCaballo: number;
    
    constructor(nombre: string, numeroCaballo: number) {
        this.nombre = nombre;
        this.velocidad = Math.floor(Math.random()*(100-10+1))+10;
        this.resistencia = Math.floor(Math.random()*(100-70+1))+10;
        this.numeroCaballo = numeroCaballo;
    }

    public getNumeroCaballo () : number {
        return this.numeroCaballo;
    }
    public correr(distancia: number): number {
        // Simular el tiempo en base a la velocidad y resistencia
        const tiempo = distancia / (this.velocidad * (this.resistencia / 100));
        return tiempo;
    }
}