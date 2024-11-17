import * as rls from "readline-sync";

let min = 0;
let max = 36;

let finDelJuego : boolean = false;
let ruleta : number;

let respuesta : number = rls.questionInt ("Ingrese 1 para girar la ruleta. 2 para salir: ");

do {
    //Comienza ruleta
    if (respuesta == 1) {
        let respGiraRuleta : number = rls.questionInt ("Elija el numero al que desea apostar: ");
        if (respGiraRuleta < 0 || respGiraRuleta > 36) {
            do {
                console.log ("Ingreso un numero incorrecto, vuelva a ingresar: ");
                respGiraRuleta = rls.questionInt ("Elija el numero al que desea apostar: ");
            } while (respGiraRuleta < 0 || respGiraRuleta > 36);
        }

        ruleta = Math.floor(Math.random() * (max - min + 1)) + min;
        //mostrar matriz
        console.log("Salio el numero: " + ruleta); 
        //comparar numeros
        if (respGiraRuleta == ruleta) {
            console.log ("Felicidades ganaste!");
        } else {console.log('\x1b[31m%s\x1b[0m', 'Perdiste');}
        respuesta = rls.questionInt ("Ingrese 1 para jugar. 2 para salir: ");
    } else if (respuesta == 2) {
        finDelJuego = true;
        console.log('\x1b[33m%s\x1b[0m', 'Has salido del juego');
} else {
    console.log ("Ingreso un valor incorrecto! Vuelva a ingresar: ");
    respuesta = rls.questionInt ("Ingrese 1 para jugar. 2 para salir: ");
}
} while (finDelJuego == false);
