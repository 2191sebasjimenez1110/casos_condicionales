/*cree en Javascript un programa que reciba por teclado el nombre del empleado, luego, 
que reciba su estrato socio-económico (debe estar ubicado entre 1 y 6), Dado un número 
del 1 al 12, escribir el nombre del mes correspondiente. por ejemplo, si el número es 
3, el resultado debería ser "Marzo".*/

let numDia = parseInt(prompt("Ingrese un numero del uno al 12"));

switch (numDia) {
  case 1:
    console.log("enero");
    break;
  case 2:
    console.log("febrero");
    break;
  case 3:
    console.log("marzo");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("mayo");
    break;
  case 6:
    console.log("junio");
    break;
  case 37:
    console.log("julio");
    break;
  case 8:
    console.log("agosto");
    break;
  case 9:
    console.log("septiembre");
      break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("noviembre");
    break;
  case 12:
    console.log("diciembre");
    break;
  default:
    console.log("ingrese un numero del uno al 12");
    break;
}