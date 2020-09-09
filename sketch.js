var Submarine,Diver;
var bg, bgPic;
var start;
var gameState="start";
function preload(){
  bgPic= loadImage("Background.jpg");
  start= loadImage("Start.png");
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-50);
  bg=createSprite(width/2,height/2,displayWidth*2,height);
  bg.x= bg.width/2;
  bg.addImage(bgPic);
  bg.scale=2;
 Submarine = createSprite(400, 200, 50, 50);
 Submarine.visible=false;
 Diver = createSprite(100,200,100,50);
 Diver.visible=false;
 Submarine.shapeColor = "yellow";
 Diver.shapeColor = "red";
 startButton=createSprite(400,350,100,100);
    startButton.addImage(start);
    startButton.scale=0.3;
 textSize(30);
 fill ("red");
}

function draw() {
  background(255,255,255);
  if(gameState=="start"){
    
    if(mousePressedOver(startButton)){
      startButton.visible=false;
      gameState="play";
    }

  }else if(gameState=="play"){
    bg.velocityX=-3;
    if(bg.x<0){
      bg.x=bg.width/2;
    }
  }
  
  drawSprites();
  if(gameState=="start"){
    text("Fellow Hero,help the fishes and", 150,200);
    text(" save them from the evils of the Mausosaurus", 60,250);
  }
}