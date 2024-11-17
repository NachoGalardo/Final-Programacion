import { Usuario } from "./usuario";
import { Maquina } from "./maquina";

export class CasinoOnline {
    public usuarios : Usuario [];
    public maquinas : Maquina [];

    constructor () {

    }

    public crearUsuario (usuarioNuevo : Usuario){
        this.usuarios.push (usuarioNuevo);

    }

    public eliminarUsuario (usuarioAEliminar : Usuario){
        if (usuarioAEliminar != undefined && this.usuarios.includes(usuarioAEliminar)) {
            const iUsuario : number = this.usuarios.indexOf (usuarioAEliminar);
            this.usuarios.slice (iUsuario, 1);
        } else {
            console.log ("El usuario NO existe en la base de datos");
        }
    }
//buscar la forma para usar el setter de usuario
    public setModificarUsuario (usuarioAModificar : Usuario) {
        if (usuarioAModificar != undefined && this.usuarios.includes(usuarioAModificar)) {
            let usuario = this.usuarios.indexOf (usuarioAModificar);
            this.usuarios.slice (usuario);
            this.usuarios.push (usuarioAModificar);
        } else {
            console.log ("El usuario NO existe en la base de datos");
        }
    }

    public cargarSaldo (saldoACargar:number) : number {
        saldoACargar = usuarios.saldo + saldoACargar;
        return saldoACargar;
    }
}