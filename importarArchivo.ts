import * as fs from 'fs';

export function leerArchivoTXT(rutaArchivo: string): void { 
    try { 
        const data = fs.readFileSync(rutaArchivo, 'utf8'); 
    console.log(data); 
    } catch (err) { 
        console.error(`Error al leer el archivo: ${err}`); 
    } 
}