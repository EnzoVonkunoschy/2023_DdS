let i = 1 /*
do{
    console.log(i+" elefantes")
    i += 1;
}while(i<5)

console.log("---------------------------")

let j=1
while(j<5){
    console.log(j+" jirafas")
    j += 1
}

console.log("--------------------------")

for(let k=0 ; k<5 ; k++){
    console.log(k + " leones")
} */

let personas = []

personas.push({nombre: "Enzo", edad: 56, afiliado: true})
personas.push({nombre: "Priscila", edad: 24, afiliado: false})
personas.push({nombre: "Ayelén", edad: 23, afiliado: true})

personas.forEach((x)=>{x.edad = x.edad+1})

console.log(personas)

console.log("-----------------------")

for(var elemento of personas){
    console.log(elemento);
}

console.log("-----------------------")
for(var atributo in personas[0]){
    console.log(atributo+"  "+personas[0][atributo])
    
}

console.log("-----------------------")

let atrib = Object.keys(personas[1])
console.log(atrib)

atrib.forEach(x=>console.log(x))

for(let m=0 ; m<3 ; m++){
    console.log(personas[0][atrib[m]])
}

// hombre.nombre  <--->  hombre[nombre]