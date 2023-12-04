// Author: Daniel Carril Miranda (Student 2ºDAW)
// GitHub: https://github.com/

console.log("JS cargado");

// Importaciones de las clases
import { vehiculo } from "./vehiculos.js";
import { autoDeportivo } from "./automovilDeportivo.js";

// Creo la función que imprime en la división "main" del html resumido todo en una línea
export function imprimir(mensaje){
    document.querySelector("main").appendChild(document.createElement("div")).innerHTML += `<p>${mensaje}</p>`;
}

// Creo un objeto vehículo usando la clase
const coche1 = new vehiculo("BMW", "CLK", "rojo", 1992, 2400);
imprimir(`<u>Coche 1</u>`)
coche1.mostrarDatos();
coche1.arrancar();
coche1.acelerar(140); 
coche1.frenar();




