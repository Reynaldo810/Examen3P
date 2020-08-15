let mario
let bowser
let marioimagen
let bowserimagen

function preload(){
  marioimagen = loadImage('mario.png')
  bowserimagen = loadImage('bowser.png')
}

function setup() {
  createCanvas(400, 400);
  mario = new m()
  bowser = new b()
}

function draw() {
  background(220);
  mario.show()
  mario.move()
  mario.salir()
  bowser.show()
  bowser.mover()
  bowser.salir()
}
class m {
  constructor(x,y,xv,yv){
    this.x=100
    this.y=100
    this.xv=2
    this.yv=5
  }
  show(){
    image(marioimagen,this.x,this.y,50,50)
  }
  move(){
    if (keyIsPressed){
      if (keyCode==39){
      this.x=this.x+this.xv
      } else if(keyCode==37){
        this.x=this.x-this.xv
      } else if(keyCode==40){
        this.y=this.y+this.yv
      } else if(keyCode==38){
        this.y=this.y-this.yv
      }
    }
  }
  salir(){
    if(this.x>400){
      this.x = 1
    } else if (this.x<0){
      this.x = 400
    }
    if (this.y>400){
      this.y=0
    } else if (this.y<0){
      this.y=400
    }
    }
}
class b {
  constructor(x,y,xv,yv){
    this.x=300
    this.y=300
    this.xv=3
    this.yv=5
  }
  show(){
    image(bowserimagen,this.x,this.y,70,70)
  }
  mover(){
    if (keyIsPressed){
      if (keyCode==68){
        this.x=this.x+this.xv
      } else if(keyCode==65){
        this.x=this.x-this.xv
      } else if(keyCode==83){
        this.y=this.y+this.yv
      } else if(keyCode==87){
        this.y=this.y-this.yv
      }
    }
  }
  salir(){
    if(this.x>400){
      this.x = 1
    } else if (this.x<0){
      this.x = 400
    }
    if (this.y>400){
      this.y=0
    } else if (this.y<0){
      this.y=400
    }
    }
}