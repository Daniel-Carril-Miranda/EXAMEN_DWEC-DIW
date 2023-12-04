import { imprimir } from "./main.js"; /* Importo el método para imprimir y exporto la clase */
import { vehiculo } from "./vehiculo.js";

export class autoDeportivo extends (vehiculo){
  // Hago las propiedades privadas:
  #potenciaMotor;
  // Creo el construtor pro parámetros
  constructor(marca, modelo, color, anio, cilindrada, potenciaMotor) {
    super(marca, modelo, color, anio, cilindrada); //Utilizo las propiedades de la clase Main
    this.#potenciaMotor = potenciaMotor;
  }
  // Hago Getters
  get potenciaMotor() {
    return this.#potenciaMotor;
  }
  //Hago setters
  set potenciaMotor(potenciaMotor) {
    this.#potenciaMotor = potenciaMotor;
  }
//   Método para activar el turbo
  activarModoDeportivo() {
    imprimir("El modo deportivo se ha activado");
  }
}