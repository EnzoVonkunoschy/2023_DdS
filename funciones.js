
/* funcion tradicional */
function doble(a){
    return a*2
}
//console.log(doble(4))

/* funcion declarada como variable */
let cuadrado = (x)=>{return x**2}
//console.log(cuadrado(3))

/* función anónima */
//setTimeout( ()=>{console.log("Tiempo cumplido")}    ,3000)

/* comando necesario para poder exportar
hacia otros archivos */
module.exports = {doble, cuadrado}