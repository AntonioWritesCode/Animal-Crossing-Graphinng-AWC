//Small dumb variables
let ready = false;
var playing;
var can

//Data Data data
var acTable;
var items = [];
var colors = []
var bValue = [];
var sz = [];

function preload(){
  //Test image ACPlank
  img = loadImage("Assets/ACPlank.jpg");
  sound = loadSound("Assets/11AM.mp3");
  acTable = loadTable("Assets/accessories1.csv")
}

function setup(){
  createCanvas(1050, 500);
  colorMode(HSB, 300, 100, 100);
  strokeWeight(5);


  //Graph test
  for(var i = 0; i < acTable.getRowCount(); i++){
    items[i] = acTable.getString(i, 0);
    bValue[i] = acTable.getNum(i, 1);
    colors[i] = acTable.getString(i, 2);

    sz[i] = map(bValue[i], 1, 5, 5, 100);
  }
}

function draw() {
  if(ready){
    background(img);
    for(var i = 0; i < acTable.getRowCount(); i++){
      fill(bValue[i], 80, 80);
      translate(-100, 5);
      rect(25*(i + 1), 100, sz[i], sz[i]);

      fill(0);
      textSize(10);
      translate(10, 10);
      text(items[i], 100*(i + 1), 100);

      playing = true;

    }
  }
}


function mousePressed(){
  ready = true;
  //sound.play()
}
