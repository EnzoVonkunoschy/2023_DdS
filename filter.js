let personas = []

personas.push({nombre: "Enzo", edad: 56, afiliado: true})
personas.push({nombre: "Priscila", edad: 24, afiliado: false})
personas.push({nombre: "Ayelén", edad: 23, afiliado: true})
/*  Devuelve una colección solo con los elementos que cumplen
la condición del filtro (x.edad < 30 )*/
let personas_fil = personas.filter((x)=>{return x.edad < 30})
console.log(personas_fil)

/* Aplica una función argumento a cada uno de los elmentos de una colección */
let personas_fil_map = personas.map((x)=>{return x.edad < 30})
console.log(personas_fil_map)

/*  Itera, aplicando una función, entre elementos contiguos de una colección a 
partir de un valor inicial (en este caso 0)*/
let personas_fil_red = personas.reduce((a,b)=>{return a = a + b.edad },0)
console.log(personas_fil_red)
