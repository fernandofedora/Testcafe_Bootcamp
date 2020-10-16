//Operadores Condicionaes

let edad = 24;
let masDe18 

if (edad < 18) {
    console.log ("No drink")
    masDe18 = false
}else {
    console.log("Salud")
    masDe18 = true
}

console.log(masDe18)

masDe18 = (edad < 18) ? false : true

console.log(masDe18)