const Turno = require('./clases.js')

function testCliente(){
    const miTurno = new Turno("lunes",2,true)
    console.log(miTurno.dia == 'lunes');
    console.log(miTurno.hora == 2);
    console.log(miTurno.libre == true)

}

testCliente()
