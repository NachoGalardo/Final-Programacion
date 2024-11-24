import * as rls from "readline-sync";
import { CasinoOnline } from "./casinoOnline";
import { Ruleta } from "./ruleta";


let salidaSistema : boolean = false; //este se usa para salir del do while que finaliza el sistema
let respuestaNumerica : number;
let nombreUsuario : string; 
let nuevoNombreUsuario : string; //se usa en la validacion
let salidaMenu : boolean = false; //este es el do while del final de la eleccion de modificar usuario o ir a salas de juegos

let casino : CasinoOnline = new CasinoOnline ();

console.log("|--------------------------------|");
console.log("|BIENVENIDOS AL BINGO DESPISTADOS|");
console.log("|--------------------------------|");

do {
    respuestaNumerica = rls.questionInt (`Ingrese 1 para Iniciar. \nIngrese 0 para salir. \nElija: `);
    if (respuestaNumerica == 1) {
        console.clear();
        console.log ('\x1b[33m%s\x1b[0m', "Ingreso la opcion 1, ahora vamos a crear tu Usuario: ");
        do {
            nombreUsuario = rls.question ("Ingrese un nombre de usuario (minimo de 5 caracteres): ");
            if (nombreUsuario.length < 5) {
                console.log ('\x1b[31m%s\x1b[0m', "Ingreso un nombre con menos de 5 caracteres, intentelo de nuevo: ");
            }
        } while (nombreUsuario.length < 5);
        console.log (casino.usuario.getSaldo());
        casino.usuario.setNombre(nombreUsuario);
        console.clear();
        console.log ('\x1b[33m%s\x1b[0m', `Su nombre fue creado con exito, su usuario es: ${casino.usuario.getNombre()}`);
        console.log ('\x1b[33m%s\x1b[0m', `Su saldo actual es de: ${casino.usuario.getSaldo()}`);
        //-------------------------------------------------------------------------------------------------------------------------\\
        do {
            salidaMenu = false;
            respuestaNumerica = rls.questionInt (`Ingrese 1 para modificar el usuario. \nIngrese 2 para ir a la Sala de Juegos. \nIngrese 0 para volver. \nElija: `);
            console.clear();
            if (respuestaNumerica == 1) {
                console.log ('\x1b[33m%s\x1b[0m', "Ingreso la opcion 1, ahora vamos a modificar el nombre de Usuario: ");
                do {
                    nuevoNombreUsuario = rls.question ("Ingrese un nuevo nombre de usuario (minimo de 5 caracteres): ");
                    if (nuevoNombreUsuario.length < 5) {
                        console.log ('\x1b[31m%s\x1b[0m', "Ingreso un nombre con menos de 5 caracteres, intentelo de nuevo: ");
                    }
                } while (nuevoNombreUsuario.length < 5);
                casino.usuario.setNombre (nuevoNombreUsuario);
                console.log ('\x1b[33m%s\x1b[0m', `Su nuevo nombre de usuario es: ${casino.usuario.getNombre()}`);
            }
            //-------------------------------------------------------------------------------------------------------------------------\\
            else if (respuestaNumerica == 2) {
                let salidaSalaJuegos : boolean = false;
                do {
                    let salidaJuegos: boolean = false;
                    respuestaNumerica = rls.questionInt (`Ingrese 1 para cargar Saldo. \nIngrese 2 para ver su saldo actual. \nIngrese 3 para Elegir el juego al que desea jugar. \nIngrese 0 para volver. \nElija: `);
                    console.clear();
                    //.......................................................................................
                    if (respuestaNumerica == 1) {
                        console.log ('\x1b[33m%s\x1b[0m', `Ingreso la opcion 1, vamos a cargar su saldo.`);
                        let salida : boolean = false;
                        do {
                            respuestaNumerica = rls.questionInt (`Ingrese la cantidad de Saldo a Cargar (Minimo 100): `);
                            console.clear();
                            if (respuestaNumerica < 100) {
                                console.log ('\x1b[31m%s\x1b[0m', `Ingreso un valor menor a 100, vuelva a intentar`);
                            } else {
                                casino.usuario.setSaldo(respuestaNumerica);
                                console.log ('\x1b[33m%s\x1b[0m', `Su saldo fue cargado con exito, su nuevo saldo es: ${casino.usuario.getSaldo()}`);
                                salida = true;
                            }
                        } while (salida == false);
                    }
                    //........................................................................................
                    else if (respuestaNumerica == 2) {
                        console.log ('\x1b[33m%s\x1b[0m', `Ingreso la opcion 2, su saldo actual es de: ${casino.usuario.getSaldo()} creditos.`);
                    }
                    //........................................................................................
                    else if (respuestaNumerica == 3) {
                        console.log ('\x1b[33m%s\x1b[0m', `Ingreso la opcion 3, estos son nuestros juegos disponibles. Seleccione un juego.`);
                        if (casino.usuario.getSaldo() < 100) {
                            console.clear();
                            console.log ('\x1b[31m%s\x1b[0m', `Su saldo es menor a 100, realice una carga.`);
                        } else {
                            do{
                                respuestaNumerica = rls.questionInt (`1- Ruleta (0-36). \n2- Tragamonedas (3x3 Lineas). \n3- Bingo. \n4- Ruleta de Premios \n5- Tragamonedas (5x5 Lineas). \n0- Volver al menu anterior. \nElija: `);
                                console.clear();
                                if (respuestaNumerica == 1){
                                    console.log ('\x1b[33m%s\x1b[0m', `Ingreso la opcion 1, Ruleta (0-36).`);
                                    if (casino.usuario.getSaldo() < 100) {
                                        console.clear();
                                        console.log ('\x1b[31m%s\x1b[0m', `Su saldo es menor a 100, realice una carga.`);
                                    } else {
                                        let numeroApostado:number;
                                        do {
                                            numeroApostado = rls.questionInt (`Ingrese el numero al que desea apostar (entre 0 y 36 inclusive): `);
                                            if (numeroApostado < 0 || numeroApostado > 36) {
                                                console.log ('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                            }
                                        } while (numeroApostado < 0 || numeroApostado > 36);
                                        let valorApuesta:number;
                                        let salir : boolean= false;
                                        do {
                                            valorApuesta = rls.questionInt (`Ingrese cuanto desea apostar (minimo 100 - maximo 500): `);
                                            if (valorApuesta < 100 || valorApuesta > 500) {
                                                console.log ('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                            }
                                            do {
                                                if (casino.usuario.getSaldo() < valorApuesta) {
                                                    console.log ('\x1b[31m%s\x1b[0m', "Ingreso un monto mayor al total de sus creditos disponibles");
                                                    console.log (`Su saldo es de ${casino.usuario.getSaldo()}.`);
                                                    valorApuesta = rls.questionInt (`Ingrese cuanto desea apostar (minimo 100 - maximo 500): `);
                                                }
                                            } while (casino.usuario.getSaldo() < valorApuesta);
                                        } while (valorApuesta < 100 || valorApuesta > 500);
                                        console.clear();
                                        console.log (`Aposto ${valorApuesta} creditos, al numero: ${numeroApostado}.`);
                                        let ruleta : Ruleta = new Ruleta (numeroApostado, valorApuesta);
                                        console.log (`La ruleta esta girando...`);
                                        console.log (`...`);
                                        console.log (`El numero ganador es...`);
                                        casino.usuario.setSaldo (ruleta.resultadoJuego(numeroApostado,valorApuesta));
                                        console.log (`Tu saldo quedo en ${casino.usuario.getSaldo()} creditos.`);
                                    }
                                } 
                                else if (respuestaNumerica == 2){
                                    
                                }
                                else if (respuestaNumerica == 3){
                                    
                                }
                                else if (respuestaNumerica == 4){
                                    
                                }
                                else if (respuestaNumerica == 5){
                                    
                                }
                                else if (respuestaNumerica == 0){
                                    console.log ('\x1b[31m%s\x1b[0m', "Usted a salido del menu");
                                    salidaJuegos = true;
                                }
                                else {
                                    console.log ('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");

                                } 
                            } while (salidaJuegos == false);   
                        }
                    }
                    //.......................................................................................
                    else if (respuestaNumerica == 0) {
                        console.log ('\x1b[31m%s\x1b[0m', "Usted a salido del menu");
                        salidaSalaJuegos = true;
                    }
                    //.......................................................................................
                    else {
                        console.log ('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
                    }
                } while (salidaSalaJuegos == false) //
            }
            //-------------------------------------------------------------------------------------------------------------------------\\
            else if (respuestaNumerica == 0) {
                console.log ('\x1b[31m%s\x1b[0m', "Usted a salido del menu");
                salidaMenu = true;
                casino.usuario.setSaldo(-casino.usuario.getSaldo()); //set saldo 0 para que cuando regrese al menu inicial el saldo comience en 0
            } 
            //-------------------------------------------------------------------------------------------------------------------------\\
            else {
                console.log ('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
            }
        } while (salidaMenu == false) //este es el do while del final de la eleccion si modificar usuario o ir a salas de juegos
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (respuestaNumerica == 0) {
        console.log ('\x1b[31m%s\x1b[0m', "Usted a salido del sistema");
        salidaSistema = true;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
        console.log ('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
    }
} while (salidaSistema == false); //este se usa para salir del do while que finaliza el sistema

