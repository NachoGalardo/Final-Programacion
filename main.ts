import * as rls from "readline-sync";
import { CasinoOnline } from "./casinoOnline";
import { Usuario } from "./usuario";
import { Maquina } from "./maquina";
import { Tragamoneda } from "./tragamonedas";
import { Bingo } from "./bingo";
import { Ruleta } from "./ruleta";

let casino : CasinoOnline = new CasinoOnline ();
console.log ("BIENVENIDOS AL BINGO DESPISTADOS");

let respuesta = rls.questionInt (`Ingrese 1 para crear un usuario. Ingrese 2 iniciar su usuario. Ingrese 3 para salir. Elija: `);

if (respuesta == 1) {
    console.log ("Ingreso la opcion 1, ahora vamos a crear tu Usuario: ");
    let nombreUsuario = rls.question ("Ingrese su nombre de usuario: ");
    let usuarioNuevo : Usuario = new Usuario (nombreUsuario); //falta validacion de nombre
    casino.crearUsuario (usuarioNuevo)

    console.log ("Su nuevo Usuario fue creado, su saldo actual es de : 0");
    let respuesta = rls.questionInt ("Ingrese 1 para cargar saldo. Ingrese 2 para salir.");
    if (respuesta == 1) {
        casino.cargarSaldo(200);        
    }
}

/*for (let i = 0; i < array.length; i++) {
    let nombreUsuario = rls.question ("Ingrese su nombre: ");
    
}


let a :number = 1;
let usuario1 : Usuario = new Usuario (nombreUsuario, a, 1);

*/

