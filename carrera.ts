import { Caballo } from "./caballo";

class Carrera {
    longitud: number; // Longitud de la pista en km
    caballos: Caballo[];

    constructor(caballos: Caballo[]) {
        this.longitud = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
        this.caballos = caballos;
    }

    iniciar(): void {
        console.log("La carrera ha comenzado!");

        // Simular la carrera
        const resultados = this.caballos.map(caballo => {
            const tiempo = caballo.correr(this.longitud);
            return { caballo: caballo.nombre, tiempo: tiempo };
        });

        //resultados.sort((a, b ) => a.tiempo - b.tiempo);
        //Metodo burbuja
        function ordenarPodio(arr: Caballo[], distancia: number): Caballo[] {
            const n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (arr[j].correr(distancia) > arr[j + 1].correr(distancia)) {
                        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    }
                }
            }
            return arr;
        }
        
        // Crear una lista de caballos
       
    }
}

const caballos: Caballo[] = [
    new Caballo("Relámpago"),
    new Caballo("Trueno"),
    new Caballo("Viento"),
];

// Definir la distancia de la carrera
const distancia = 1000;


let carrera : Carrera = new Carrera(caballos);


// Ordenar y mostrar el resultado
console.log("Caballos ordenados por tiempo en recorrer la distancia:");
const podio = carrera.ordenarPodio(caballos, distancia);
podio.forEach((caballo, index) => {
    console.log(
        `Lugar ${index + 1}: ${caballo.nombre}, Tiempo: ${caballo.correr(distancia).toFixed(2)} segundos`
    );
});

