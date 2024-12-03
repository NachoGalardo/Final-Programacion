export class Usuario {
    protected nombreUsuario : string;
    protected saldo : number;
    
    constructor(nombreUsuario : string) {
        this.nombreUsuario = nombreUsuario;
        this.saldo = 0;
    }

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
        this.saldo = saldo;
    }

    public agregarSaldo(saldo: number): void {
        this.saldo += saldo;
    }
}