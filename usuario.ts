export class Usuario {
    public nombreUsuario : string;
    public saldo : number;
    
    constructor(nombreUsuario : string) {
        this.nombreUsuario = nombreUsuario;
        this.saldo = 0;
    }

    //getters

    public getNombre(): string {
        return this.nombreUsuario;
    }    
    public setNombre(nombre: string): void {
        this.nombreUsuario = nombre;
    }    
    
    public getSaldo(): number {
        return this.saldo;
    }    
    public setSaldo(saldo: number): void {
        this.saldo += saldo;
    }
    
}