function setup() {
  createCanvas(400, 400);
  recortar(5,0,10)
}
function recortar(numero,minimo,maximo){
  if(numero < minimo){
    console.log(minimo)
  } else if (numero > maximo){
    console.log(maximo)
  } else {
    console.log(numero)
  }
}