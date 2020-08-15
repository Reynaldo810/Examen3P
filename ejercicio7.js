var serie = [3, 8, 9, 7, 6]

function setup() {
  createCanvas(400, 400);
  rotacion(1)
}


function rotacion(k){
  for(var x = 0; x<k; x++){
    serie.unshift(serie.pop())
  }
  console.log(serie)
}