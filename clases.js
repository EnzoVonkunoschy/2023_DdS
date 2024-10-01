class Persona{
    constructor(nom, ed=0, afil = false){
        this.nombre = nom
        this.edad = ed
        this.afiliado = afil
        this.nacionalidad=''
    }

    setNombre(nom){
        this.nombre = nom
    }

    getNombre(){
        return this.nombre
    }

    setAfiliado( afil){
        this.afiliado = afil
    }
}

const unaPersona = new Persona("Enzo",56,)
console.log(unaPersona)
unaPersona.setAfiliado(true)
console.log(unaPersona)

module.exports = {Persona}