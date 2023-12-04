import { imprimir } from "./main.js"; /* Importo el método para imprimir y exporto la clase */
import { vehiculo } from "./vehiculos.js";

export class autoDeportivo extends (vehiculo){
  // Hago las propiedades privadas:
  #potenciaMotor;
  // Creo el construtor pro parámetros
  constructor(marca, modelo, color, anio, cilindrada, potenciaMotor) {
    super(marca, modelo, color, anio, cilindrada); //Utilizo las propiedades heredadas de la clase padre "vahiculo"
    this.#potenciaMotor = potenciaMotor;
  }
  // Hago Getter
  get potenciaMotor() {
    return this.#potenciaMotor;
  }
  //Hago setter
  set potenciaMotor(potenciaMotor) {
    this.#potenciaMotor = potenciaMotor;
  }
//   Método para activar el turbo
  activarModoDeportivo() {
    imprimir("El modo deportivo se ha activado");
  }
}