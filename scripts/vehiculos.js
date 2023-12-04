import { imprimir } from "./main.js"; /* Importo el método para imprimir y exporto la clase */
export class vehiculo {
  // Hago las propiedades privadas:
  #marca;
  #modelo;
  #color;
  #anio;
  #cilindrada;
  // Creo el construtor pro parámetros
  constructor(marca, modelo, color, anio, cilindrada) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#anio = anio;
    this.#cilindrada = cilindrada;
  }
  // Hago Getters
  get marca() {
    return this.#marca;
  }
  get modelo() {
    return this.#modelo;
  }
  get color() {
    return this.#color;
  }
  get anio() {
    return this.#anio;
  }
  get cilindrada() {
    return this.#cilindrada;
  }
  //Hago setters
  set marca(marca) {
    this.#marca = marca;
  }
  set modelo(modelo) {
    this.#modelo = modelo;
  }
  set color(color) {
    this.#color = color;
  }
  set anio(anio) {
    this.#anio = anio;
  }
  set cilindrada(cilindrada) {
    this.#cilindrada = cilindrada;
  }
  // Creo el método para mostrar datos
  mostrarDatos() {
    const datos = `
    Marca: ${this.#marca} <br>
    Modelo: ${this.#modelo} <br>
    Color: ${this.color} <br>
    Año: ${this.anio} <br>
    Cilindrada: ${this.cilindrada}CC <br>
    `
    imprimir(datos);
  }
    //   Método acelerar, arrancar y frenar
    acelerar(velocidad) {
        const mensaje = `El vehiculo ha acelerado hasta ${velocidad}km/h`
        imprimir(mensaje);
    }
    arrancar(){
        const mensaje = `El vehiculo ha arrancado`
        imprimir(mensaje);
    }
    frenar(){
        const mensaje = `El vehiculo ha frenado`
        imprimir(mensaje);
    }
}
