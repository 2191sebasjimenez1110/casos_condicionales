let estadoCivil = prompt("Ingrese estado civil");
let casado = estadoCivil == "casado";

switch (casado) {
  case true:
    console.log("Felicidades es usted ed casado");
    break;
  default:
    console.log("Que bueno usted no es casado");
    break;
}