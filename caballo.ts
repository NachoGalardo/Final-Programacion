export class Caballo {
    private nombre: string;
    private velocidad: number; // Velocidad máxima en km/h
    private resistencia: number; // Resistencia en %
    private numeroCaballo: number;
    
    constructor(nombre: string, numeroCaballo: number) {
        this.nombre = nombre;
        this.velocidad = Math.floor(Math.random()*(100-10+1))+10;
        this.resistencia = Math.floor(Math.random()*(100-70+1))+10;
        this.numeroCaballo = numeroCaballo;
    }
    
    public getNombre(): string {
        return this.nombre;
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