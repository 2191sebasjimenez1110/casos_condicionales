/*Cree un programa que lea un número y muestre si este es par o impar. 
Realice una versión switch-case.*/
let num = parseFloat(prompt("ingrese un numero"));
let logica = num%2==0;

    switch (logica) {
        case true: console.log("el numero es par")
            break;
    
        default:
            console.log("el numero es impar")
            break;
    }
    