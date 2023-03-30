/*Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. 
Realice una versión con estructura switch-case*/
let num = parseFloat(prompt("ingrese un numero entre 1 y 15"));

    if(num >=1 && num<=15){
        switch (num) {
            case 2: console.log("el numero es primo")
                break;
            case 3: console.log("el numero es primo")
                break;
            case 5: console.log("el numero es primo")
                break;
            case 7: console.log("el numero es primo")
                break;
            case 11: console.log("el numero es primo")
                break;
            case 13: console.log("el numero es primo")
                break;
        default:
            console.log("el numero no es primo")
                break;
        }
    }