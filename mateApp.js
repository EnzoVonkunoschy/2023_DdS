/* comando necesario para poder importar funciones
desde otro archivo */

const Funciones = require('./funciones.js')
const Clases = require('./clases.js')

console.log(Funciones.cuadrado(4))

console.log(Funciones.doble(16))

const otraPersona = new Clases.Persona("Alex",20,false)
console.log(otraPersona)