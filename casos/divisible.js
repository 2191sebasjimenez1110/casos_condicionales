let num = parseFloat(prompt("ingrese un numero"));

let logica = num%5 == 0;

switch (logica) {
    case true: console.log("el numero es divisible entre 5");
        
        break;

    default:
        console.log("el numero no es divisible entre 5");
        break;
}