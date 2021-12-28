//Sound bool
var ready = false;
var playing;
let img;
let angle = 5;

function preload(){
  sound = loadSound("Assets/11AM.mp3");
  img = loadImage("Assets/acCharacter.png");
}

function setup(){
  createCanvas(1000, 450);
}


function draw(){
  if(ready){
    background("#d8ccb6");
    image(img, 50, 50, 450, 450);
    playing = true;
  }
}

function mousePressed(){
  ready = true;
  sound.play()
}
