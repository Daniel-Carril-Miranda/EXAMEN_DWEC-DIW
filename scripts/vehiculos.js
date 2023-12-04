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
}
