// Author: Daniel Carril Miranda (Student 2ºDAW)
// GitHub: https://github.com/Daniel-Carril-Miranda/EXAMEN_DWEC-DIW.git

console.log("JS cargado");

// Importaciones de las clases
import { vehiculo } from "./vehiculos.js";
import { autoDeportivo } from "./automovilDeportivo.js";

// Creo la función que imprime en la división "main" del html resumido todo en una línea
export function imprimir(mensaje){
    document.querySelector("main").appendChild(document.createElement("div")).innerHTML += `<p>${mensaje}</p>`;
}

// instancio un objeto vehículo usando la clase vehiculo
const coche1 = new vehiculo("BMW", "CLK", "Rojo", 1992, 2400);
imprimir(`<h2><u>Coche Estandar</u></h2>`)
coche1.mostrarDatos();
coche1.arrancar();
coche1.acelerar(140); 
coche1.frenar();

// Variable de tipo Objet de un objeto Moto:
const vehiculoObject = {
    Marca: "BMW",
    Modelo: "CLK",
    Color: "Rojo",
    Anio: 1992,
    Cilindrada: 2400
}

console.log(vehiculoObject);
localStorage.clear(); /* Esto limpia por completo el localStorage */
localStorage.setItem("vehiculo", JSON.stringify(vehiculoObject));
// Recuperación de Datos del LocalStorage
console.log(localStorage.getItem("vehiculo"));
console.log(JSON.parse(localStorage.getItem("vehiculo"))); /* Es lo mismo que console.log(vehiculoObject); */

// ---------------------------------------------------

// instancio un objeto automovilDeportivo
const deportivo1 = new autoDeportivo("Ferrari", "Spider", "Amarillo", 2000, 4000, 500);
imprimir(`<h2><u>Coche Deportivo</u></h2>`)
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140); 
deportivo1.frenar();

// Genere variable tipo Object con POO
const deportivoObject = {
    Marca: deportivo1.marca,
    Modelo: deportivo1.modelo,
    Color: deportivo1.color,
    Anio: deportivo1.anio,
    Cilindrada: deportivo1.cilindrada,
    Potencia: deportivo1.potenciaMotor
}

// Almacenar los datos en el LocalStorage mediante un bcle iterativo
for (const key in deportivoObject){
    if (deportivoObject.hasOwnProperty(key)){
        localStorage.setItem(key, deportivoObject[key]);
    }
};

localStorage.setItem("vehiculo2", JSON.stringify(deportivoObject));
// Mostrar los datos en el LocalStorage
console.log(deportivoObject);
console.log(JSON.parse(localStorage.getItem("vehiculo2")));

// Elimina parámetros del loalstorage
localStorage.removeItem("Color");
localStorage.removeItem("Cilindrada");
localStorage.removeItem("Modelo");

console.log(JSON.parse(localStorage.getItem("Anio"))); //Con esto podríamos sacar sólo un parámetro
// Eliminar del localStorage
localStorage.removeItem("vehiculo"); //Esto borra la Key "vehiculo"






