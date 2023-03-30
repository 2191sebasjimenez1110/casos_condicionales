/* Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los 
ángulos corresponden a un triángulo o no. Realice una versión con switch-case. */

let A = parseFloat(prompt("ingrese el angulo A"))
let B = parseFloat(prompt("ingrese el angulo B"))
let C = parseFloat(prompt("ingrese el angulo C"))
let triangulo = (A+B+C)==180

    switch (triangulo) {
        case true:
            console.log("es un triangulo")
            break;
    
        default:
            console.log("no es un triangulo")
            break;
    }