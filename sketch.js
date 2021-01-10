let buttercup;
let cImg;
let mImg;
let bImg;
let mojos =[];


function preload() {
  
  cImg = loadImage('bb.png');
  mImg = loadImage('mh.png');
  bImg = loadImage('background.jpg');
}




function setup() {
  createCanvas(950, 600);
  buttercup = new Buttercup();

}

function keyPressed() {
  if (key == ' ') {
    buttercup.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    mojos.push(new Mojodojo());
  }
  
  background(bImg);
  for (let m of mojos) {
    m.move();
    m.show();
    if (buttercup.hits(m)) {
     console.log('Game over');
     noLoop();
    }
  }
  buttercup.show();
  buttercup.move();
  
  
}
