import * as rls from "readline-sync";

let matriz : number [] = [];

let min = 0;
let max = 10;

let finDelJuego : boolean = false;

let respuesta : number = rls.questionInt ("Ingrese 1 para jugar. 2 para salir: ");
do {
    //llenar matriz
    if (respuesta == 1) {
        for (let i=0; i < 9; i++) {
            matriz[i] = Math.floor(Math.random() * (max - min + 1)) + min;
        } 
        //mostrar matriz 
        console.table([matriz.slice(0, 3), matriz.slice(3, 6), matriz.slice(6)]); 
        //comparar numeros
        if (((matriz [0] === matriz [1]) && (matriz [1] === matriz [2])) && ((matriz [3] === matriz [4]) && (matriz [4] === matriz [5])) && ((matriz [6] === matriz [7]) && (matriz [7] === matriz [8]))) {
            console.log ("FELICIDADES TENES EL GANASTE EL POZO");
        } else if ((matriz [0] === matriz [1]) && (matriz [1] === matriz [2])) { 
            console.log ("ganaste en la primera linea");
        } else if ((matriz [0] === matriz [4]) && (matriz [4] === matriz [8])) { 
            console.log ("ganaste por escalera");
        } else if ((matriz [3] === matriz [4]) && (matriz [4] === matriz [5])) {
            console.log ("ganaste en la segunda linea");
        } else if ((matriz [6] === matriz [4]) && (matriz [4] === matriz [2])) {
            console.log ("ganaste por escalera");
        } else if ((matriz [6] === matriz [7]) && (matriz [7] === matriz [8])) {
            console.log ("ganaste en la tercera linea");
        }
        else {console.log('\x1b[31m%s\x1b[0m', 'Perdiste');}
            respuesta = rls.questionInt ("Ingrese 1 para jugar. 2 para salir: ");
        } else if (respuesta == 2) {
            finDelJuego = true;
            console.log('\x1b[33m%s\x1b[0m', 'Has salido del juego');
    } else {
        console.log ("Ingreso un valor incorrecto! Vuelva a ingresar: ");
        respuesta = rls.questionInt ("Ingrese 1 para jugar. 2 para salir: ");
    }
} while (finDelJuego == false);
