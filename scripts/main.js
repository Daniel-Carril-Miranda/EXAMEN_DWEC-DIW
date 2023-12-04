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

// instancio un objeto vehículo usando la clase vehiculo
const coche1 = new vehiculo("BMW", "CLK", "rojo", 1992, 2400);
imprimir(`<u>Coche Estandar</u>`)
coche1.mostrarDatos();
coche1.arrancar();
coche1.acelerar(140); 
coche1.frenar();

// instancio un objeto automovilDeportivo
const deportivo1 = new autoDeportivo("Ferrari", "Spider", "amarillo", 2000, 4000, 500);
imprimir(`<u>Coche Deportivo</u>`)
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140); 
deportivo1.frenar();



