let nombres = []

nombres.push("Gimena")
nombres.push("Alfredo")
nombres.push("Iván")
nombres.push("Paula")
nombres.push("Ayelén")
nombres.push("Alex")

console.log(nombres)

nombres.splice(3,1)
console.log(nombres)

let lugar = nombres.indexOf("Iván")
console.log(lugar)

lugar = nombres.indexOf("Vanina")
console.log(lugar)