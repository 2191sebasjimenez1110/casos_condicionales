/*Crea un programa que convierta una longitud en una unidad de medida a otra. El programa
debe trabajar con el valor de la longitud, la unidad de medida original y la unidad de medida
de destino. Utiliza switch-case para determinar la unidad de medida original y la unidad de
medida de destino y realizar la conversión correspondiente.*/

let medidao = parseFloat(prompt("ingrese la longitud que quire comvertir"))

let medida = prompt("Inrese la unidad de medida")


let selec = prompt("ingrese la unidad de medida a la que lo quiere convertir entre estas (metros, centimetros, milimetros o pulgadas)")

switch (selec) {
    case "metros":
        sol=medidao*100
        console.log("la medida en metros es:",sol)
        break;
    case "centimetros":
        so=medidao/100
        console.log("la medida en centimetros es:",so)
        break;
    case "milimetros":
        sol1=medidao/1000
        console.log("la medida en milimetros es:",sol1)
        break;
    case "pulgadas":
        sol2=medidao*2,54
        console.log("la medida en metros es:",sol2)
    break;

    default:
        console.log("ingrese una de los opciones dadas")
        break;
}