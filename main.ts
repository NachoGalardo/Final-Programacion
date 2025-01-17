import * as rls from "readline-sync";
import { CasinoOnline } from "./casinoOnline";
import { Ruleta } from "./ruleta";
import { Tragamoneda } from "./tragamonedas";
import { Tragamoneda5x3 } from "./tragamonedas5";
import { Carrera } from "./carrera";
import { leerArchivoTXT } from "./importarArchivo";


let salidaSistema: boolean = false; //este se usa para salir del do while que finaliza el sistema
let respuestaNumerica: number;
let nombreUsuario: string;
let nuevoNombreUsuario: string; //se usa en la validacion
let salidaMenu: boolean = false; //este es el do while del final de la eleccion de modificar usuario o ir a salas de juegos

let casino: CasinoOnline = new CasinoOnline("Magic Star", "BS. AS. Colon 2781");

do {
    console.log('\x1b[35m%s\x1b[0m',"|--------------------------------|");
    console.log('\x1b[35m%s\x1b[0m',`|BIENVENIDOS AL BINGO ${casino.getNombre()}|`);
    console.log('\x1b[35m%s\x1b[0m',"|--------------------------------|");
    respuestaNumerica = rls.questionInt(`Ingrese 1 para Iniciar. \nIngrese 2 para ver el reglamento de los juegos. \nIngrese 0 para salir. \nElija: `);
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++INICIA SISTEMA PIDIENDO USUARIO+++++++++++++++++++++++++++++++++++++++++++++++++++++//
    if (respuestaNumerica == 1) {
        console.clear();
        console.log('\x1b[33m%s\x1b[0m', "Ingreso la opcion 1, ahora vamos a crear tu Usuario: ");
        do {
            nombreUsuario = rls.question("Ingrese un nombre de usuario (minimo de 5 caracteres): ");
            if (nombreUsuario.length < 5) {
                console.log('\x1b[31m%s\x1b[0m', "Ingreso un nombre con menos de 5 caracteres, intentelo de nuevo: ");
            }
        } while (nombreUsuario.length < 5);
        console.log(casino.getUsuario().getSaldo());
        casino.getUsuario().setNombre(nombreUsuario);
        console.clear();
        console.log('\x1b[33m%s\x1b[0m', `Su nombre fue creado con exito, su usuario es: ${casino.getUsuario().getNombre()}`);
        console.log('\x1b[33m%s\x1b[0m', `Su saldo actual es de: ${casino.getUsuario().getSaldo()}`);
        //---------------------------------------------------MODIFICAR USUARIO----------------------------------------------------------------------\\
        do {
            salidaMenu = false;
            respuestaNumerica = rls.questionInt(`Ingrese 1 para modificar el usuario. \nIngrese 2 para ir a la Sala de Juegos. \nIngrese 0 para volver. \nElija: `);
            console.clear();
            if (respuestaNumerica == 1) {
                console.log('\x1b[33m%s\x1b[0m', "Ingreso la opcion 1, ahora vamos a modificar el nombre de Usuario: ");
                do {
                    nuevoNombreUsuario = rls.question("Ingrese un nuevo nombre de usuario (minimo de 5 caracteres): ");
                    if (nuevoNombreUsuario.length < 5) {
                        console.log('\x1b[31m%s\x1b[0m', "Ingreso un nombre con menos de 5 caracteres, intentelo de nuevo: ");
                    }
                } while (nuevoNombreUsuario.length < 5);
                casino.getUsuario().setNombre(nuevoNombreUsuario);
                console.log('\x1b[33m%s\x1b[0m', `Su nuevo nombre de usuario es: ${casino.getUsuario().getNombre()}`);
            }
            //------------------------------------------------SALA DE JUEGOS-------------------------------------------------------------------------\\
            else if (respuestaNumerica == 2) {
                let salidaSalaJuegos: boolean = false;
                console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 2, se encuentra en la Sala de Juegos.`);
                do {
                    let salidaJuegos: boolean = false;
                    respuestaNumerica = rls.questionInt(`Ingrese 1 para cargar Saldo. \nIngrese 2 para ver su saldo actual. \nIngrese 3 para Elegir el juego al que desea jugar. \nIngrese 0 para volver. \nElija: `);
                    console.clear();
                    //..............................................CARGAR SALDO.........................................
                    if (respuestaNumerica == 1) {
                        console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 1, vamos a cargar su saldo.`);
                        let salida: boolean = false;
                        do {
                            respuestaNumerica = rls.questionInt(`Ingrese la cantidad de Saldo a Cargar (Minimo 100): `);
                            console.clear();
                            if (respuestaNumerica < 100) {
                                console.log('\x1b[31m%s\x1b[0m', `Ingreso un valor menor a 100, vuelva a intentar`);
                            } else {
                                casino.getUsuario().agregarSaldo(respuestaNumerica);
                                console.log('\x1b[33m%s\x1b[0m', `Su saldo fue cargado con exito, su nuevo saldo es: ${casino.getUsuario().getSaldo()}`);
                                salida = true;
                            }
                        } while (salida == false);
                    }
                    //..................................................VER SALDO ACTUAL.....................................
                    else if (respuestaNumerica == 2) {
                        console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 2, su saldo actual es de: ${casino.getUsuario().getSaldo()} creditos.`);
                    }
                    //...................................................LISTA JUEGOS.....................................
                    else if (respuestaNumerica == 3) {
                        console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 3, estos son nuestros juegos disponibles. Seleccione un juego.`);
                        if (casino.getUsuario().getSaldo() < 100) {
                            console.clear();
                            console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 100, realice una carga.`);
                        } else {
                            do {
                                respuestaNumerica = rls.questionInt(`1- Ruleta (0-36) (Apuesta min 100 - max 500). \n2- Tragamonedas (3x3 Lineas) (Apuesta min 100 - max 500). \n3- Tragamonedas (5x3 Lineas)(Apuesta minima 1000). \n4- Carrera de caballos (Apuesta minima 1000)  \n0- Volver al menu anterior. \nElija: `);
                                console.clear();
                                //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´RULETA´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
                                if (respuestaNumerica == 1) {
                                    console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 1, Ruleta (0-36).`);
                                    if (casino.getUsuario().getSaldo() < 100) {
                                        console.clear();
                                        console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 100, realice una carga.`);
                                    } else {
                                        let numeroApostado: number;
                                        do {
                                            numeroApostado = rls.questionInt(`Ingrese el numero al que desea apostar (entre 0 y 36 inclusive): `);
                                            if (numeroApostado < 0 || numeroApostado > 36) {
                                                console.log('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                            }
                                        } while (numeroApostado < 0 || numeroApostado > 36);
                                        let valorApuesta: number;
                                        let salir: boolean = false;
                                        do {
                                            valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 100 - maximo 500): `);
                                            if (valorApuesta < 100 || valorApuesta > 500) {
                                                console.log('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                            }
                                            do {
                                                if (casino.getUsuario().getSaldo() < valorApuesta) {
                                                    console.log('\x1b[31m%s\x1b[0m', "Ingreso un monto mayor al total de sus creditos disponibles");
                                                    console.log(`Su saldo es de ${casino.getUsuario().getSaldo()}.`);
                                                    valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 100 - maximo 500): `);
                                                }
                                            } while (casino.getUsuario().getSaldo() < valorApuesta);
                                        } while (valorApuesta < 100 || valorApuesta > 500);
                                        console.clear();
                                        console.log(`Aposto ${valorApuesta} creditos, al numero: ${numeroApostado}.`);
                                        let ruleta: Ruleta = new Ruleta("Ruleta", "Francesa");
                                        console.log(`La ruleta esta girando...`);
                                        console.log(`...`);
                                        console.log(`El numero ganador es...`);
                                        casino.getUsuario().agregarSaldo(ruleta.resultadoJuego(numeroApostado, valorApuesta));
                                        console.log(`Tu saldo quedo en ${casino.getUsuario().getSaldo()} creditos.`);
                                    }
                                }
                                //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´TRAGAMONEDAS 3X3´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
                                else if (respuestaNumerica == 2) {
                                    console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 2, Tragamonedas (3x3 Lineas).`);
                                    if (casino.getUsuario().getSaldo() < 100) {
                                        console.clear();
                                        console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 100, realice una carga.`);
                                    } else {
                                        let valorApuesta: number;
                                        let salir: boolean = false;
                                        do {
                                            valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 100 - maximo 500): `);
                                            if (valorApuesta < 100 || valorApuesta > 500) {
                                                console.log('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                            }
                                            do {
                                                if (casino.getUsuario().getSaldo() < valorApuesta) {
                                                    console.log('\x1b[31m%s\x1b[0m', "Ingreso un monto mayor al total de sus creditos disponibles");
                                                    console.log(`Su saldo es de ${casino.getUsuario().getSaldo()}.`);
                                                    valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 100 - maximo 500): `);
                                                }
                                            } while (casino.getUsuario().getSaldo() < valorApuesta);
                                        } while (valorApuesta < 100 || valorApuesta > 500);
                                        console.clear();
                                        console.log(`Aposto ${valorApuesta} creditos.`);
                                        let tragamonedas: Tragamoneda = new Tragamoneda(9, 0, 6, "Tragamonedas 3*3");
                                        console.log(`La tragamonedas esta girando...`);
                                        console.log(`...`);
                                        casino.getUsuario().agregarSaldo(tragamonedas.resultadoJuego(valorApuesta));
                                        console.log(`Tu saldo quedo en ${casino.getUsuario().getSaldo()} creditos.`);
                                    }
                                }
                                //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´TRAGAMONEDAS 5X3´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
                                else if (respuestaNumerica == 3) {
                                    console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 3, Tragamonedas (5x3 Lineas) para apuestas fuertes.`);
                                    let tragamonedas5: Tragamoneda5x3 = new Tragamoneda5x3(15, 69, 65, "Tragamonedas 5*3", "Deluxe");
                                    if (casino.getUsuario().getSaldo() < 1000) {
                                        console.clear();
                                        console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 1000, realice una carga.`);
                                    } else {
                                        let salirEleccionTiradas: boolean = false;
                                        do {
                                            respuestaNumerica = rls.questionInt(`1- Para tiradas manuales. \n2- Para tiradas automaticas. \n0- Volver al menu anterior. \nElija: `);
                                            if (casino.getUsuario().getSaldo() < 1000) {
                                                console.clear();
                                                console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 1000, realice una carga.`);
                                                salirEleccionTiradas = true;
                                            } else {
                                                if (respuestaNumerica == 1) {
                                                    let valorApuesta: number;
                                                    do {
                                                        valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 1000 - no hay tope maximo): `);
                                                        if (valorApuesta < 1000) {
                                                            console.log('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                                        }
                                                        do {
                                                            if (casino.getUsuario().getSaldo() < valorApuesta) {
                                                                console.log('\x1b[31m%s\x1b[0m', "Ingreso un monto mayor al total de sus creditos disponibles");
                                                                console.log(`Su saldo es de ${casino.getUsuario().getSaldo()}.`);
                                                                valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 1000 - no hay tope maximo): `);
                                                            }
                                                        } while (casino.getUsuario().getSaldo() < valorApuesta);
                                                    } while (valorApuesta < 1000);
                                                    console.clear();
                                                    console.log(`Aposto ${valorApuesta} creditos.`);
                                                    console.log(`La tragamonedas esta girando...`);
                                                    console.log(`...`);
                                                    casino.getUsuario().agregarSaldo(tragamonedas5.resultadoJuego(valorApuesta));
                                                    console.log(`Tu saldo quedo en ${casino.getUsuario().getSaldo()} creditos.`);
                                                }
                                                else if (respuestaNumerica == 2) {
                                                    if (casino.getUsuario().getSaldo() < 1000) {
                                                        console.clear();
                                                        console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 1000, realice una carga.`);
                                                    } else {
                                                        let valorApuesta: number;
                                                        let cantidadTiradas: number;
                                                        do {
                                                            cantidadTiradas = rls.questionInt(`Ingrese cuantas tiradas automaticas desea hacer: `);
                                                            valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 1000 - no hay tope maximo): `);
                                                            if (valorApuesta < 1000) {
                                                                console.log('\x1b[31m%s\x1b[0m', "Ingreso un monto menor a 1000, vuelva a ingresar: ");
                                                            }
                                                            do {
                                                                if (casino.getUsuario().getSaldo() < valorApuesta) {
                                                                    console.log('\x1b[31m%s\x1b[0m', "Ingreso un monto mayor al total de sus creditos disponibles");
                                                                    console.log(`Su saldo es de ${casino.getUsuario().getSaldo()}.`);
                                                                    valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 1000 - no hay tope maximo): `);
                                                                }
                                                            } while (casino.getUsuario().getSaldo() < valorApuesta);
                                                        } while (valorApuesta < 1000);
                                                        if (casino.getUsuario().getSaldo() < valorApuesta) {
                                                            console.log("Su credito es insuficiente, por favor regrese y cargue mas saldo");
                                                        }

                                                        let saldoActual: number = casino.getUsuario().getSaldo();
                                                        casino.getUsuario().setSaldo(tragamonedas5.tiradasAutomaticas(valorApuesta, cantidadTiradas, saldoActual));

                                                        console.log(`Tu saldo quedo en ${casino.getUsuario().getSaldo()} creditos.`);
                                                        /*  let saldoActual: number = casino.usuario.getSaldo();
                                                         saldoActual = tragamonedas5.tiradasAutomaticas(valorApuesta, cantidadTiradas, saldoActual);
                                                         casino.usuario.setSaldo(saldoActual);
 
                                                         console.log(`Tu saldo quedó en ${casino.usuario.getSaldo()} créditos.`); */

                                                    }
                                                }
                                                else if (respuestaNumerica == 0) {
                                                    console.log('\x1b[31m%s\x1b[0m', "Usted selecciono volver al menu anterior");
                                                    salirEleccionTiradas = true;
                                                }
                                                else {
                                                    console.log('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
                                                }
                                            }
                                        } while (salirEleccionTiradas == false);
                                    }
                                }
                                //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´CARRERA DE CABALLOS´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
                                else if (respuestaNumerica == 4) {
                                    console.log('\x1b[33m%s\x1b[0m', `Ingreso la opcion 4, Carrera de caballos.`);
                                    if (casino.getUsuario().getSaldo() < 1000) {
                                        console.clear();
                                        console.log('\x1b[31m%s\x1b[0m', `Su saldo es menor a 1000, realice una carga.`);
                                    } else {
                                        let valorApuesta: number;
                                        let numeroCaballo: number;
                                        let salir: boolean = false;
                                        let carrera: Carrera = new Carrera("Carrera de Caballos");
                                        console.table(carrera.getListaCaballos());
                                        carrera.getDistanciaPista();
                                        do {
                                            numeroCaballo = rls.questionInt(`Ingrese el numero del caballo a apostar: `);
                                            const numBuscado = carrera.getListaCaballos().findIndex(numCab => numCab.getNumeroCaballo() === numeroCaballo);
                                            if (numBuscado == -1) {
                                                console.log('\x1b[31m%s\x1b[0m', "El Numero que ingreso no pertenece a uno de los caballos existentes, vuelva a ingresar: ");
                                            } else {
                                                salir = true;
                                            }
                                        } while (salir == false);
                                        do {
                                            valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 1000 - no hay tope maximo): `);
                                            if (valorApuesta < 1000) {
                                                console.log('\x1b[31m%s\x1b[0m', "Ingreso un numero incorrecto, vuelva a ingresar: ");
                                            }
                                            do {
                                                if (casino.getUsuario().getSaldo() < valorApuesta) {
                                                    console.log('\x1b[31m%s\x1b[0m', "Ingreso un monto mayor al total de sus creditos disponibles");
                                                    console.log(`Su saldo es de ${casino.getUsuario().getSaldo()}.`);
                                                    valorApuesta = rls.questionInt(`Ingrese cuanto desea apostar (minimo 1000 - no hay tope maximo): `);
                                                }
                                            } while (casino.getUsuario().getSaldo() < valorApuesta);
                                        } while (valorApuesta < 1000);
                                        console.clear();
                                        console.log(`Aposto ${valorApuesta} creditos al caballo N° ${numeroCaballo}.`);
                                        console.log(`Largaron...`);
                                        console.log(`...`);
                                        casino.getUsuario().agregarSaldo(carrera.resultadoJuego(numeroCaballo, valorApuesta));
                                        console.log(`Tu saldo quedo en ${casino.getUsuario().getSaldo()} creditos.`);
                                    }
                                }
                                //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´SALIR´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
                                else if (respuestaNumerica == 0) {
                                    console.log('\x1b[31m%s\x1b[0m', "Usted a salido del menu");
                                    salidaJuegos = true;
                                }
                                //´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´VALOR INCORRECTO´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
                                else {
                                    console.log('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");

                                }
                            } while (salidaJuegos == false); //este es el do while de la lista de juegos   
                        }
                    }
                    //.............................................SALIR..........................................
                    else if (respuestaNumerica == 0) {
                        console.log('\x1b[31m%s\x1b[0m', "Usted a salido del menu");
                        salidaSalaJuegos = true;
                    }
                    //.............................................VALOR INCORRECTO..........................................
                    else {
                        console.log('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
                    }
                } while (salidaSalaJuegos == false) //este es el do while del final deL menu cargar o ver saldo 
            }
            //------------------------------------------------------SALIR-------------------------------------------------------------------\\
            else if (respuestaNumerica == 0) {
                console.log('\x1b[31m%s\x1b[0m', "Usted a salido del menu");
                salidaMenu = true;
                casino.getUsuario().setSaldo(-casino.getUsuario().getSaldo()); //set saldo 0 para que cuando regrese al menu inicial el saldo comience en 0
            }
            //-------------------------------------------------------VALOR INCORRECTO------------------------------------------------------------------\\
            else {
                console.log('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
            }
        } while (salidaMenu == false) //este es el do while del final de la eleccion si modificar usuario o ir a salas de juegos
        ///////////////////////////////////////////////////////////////////SALIR////////////////////////////////////////////////////////
    } else if (respuestaNumerica == 2) {
        console.clear();
        console.log('\x1b[33m%s\x1b[0m', "Ingreso la opcion 2, estos son los reglamentos para los Usuarios: ");
        leerArchivoTXT('./reglamento.txt');
        ///////////////////////////////////////////////////////////////////SALIR////////////////////////////////////////////////////////
    } else if (respuestaNumerica == 0) {
        console.log('\x1b[31m%s\x1b[0m', "Usted a salido del sistema");
        salidaSistema = true;
        ///////////////////////////////////////////////////////////////////VALOR INCORRECTO////////////////////////////////////////////////////////
    } else {
        console.log('\x1b[31m%s\x1b[0m', "Ingreso una opcion incorrecta, intente nuevamente");
    }
} while (salidaSistema == false); //este se usa para salir del do while que finaliza el sistema

