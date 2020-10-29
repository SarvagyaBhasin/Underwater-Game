var Submarine,Diver;
var bg, bgPic;
var start;
var gameState="start";
var level1, level2, level3, level4, level5, level6, level7, level8, level9, level10;
var levelImage, road;
var diverImage;
var cursor;

function preload(){
  bgPic= loadImage("BG.png");
  start= loadImage("Start.png");
  levelImage=loadImage("Levelmap.png");
  diverImage= loadImage("Diver.png");
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-50);
  bg=createSprite(width/2,height/2,displayWidth*2,height);
  bg.x= bg.width/2;
  bg.addImage(bgPic);
  road=createSprite(width/2,height/2,500,500);
  road.addImage(levelImage);
  road.visible=false;
   // bg.scale=2;
 cursor=createSprite(100,100,20,20);
 cursor.visible=false;
 level1=createSprite(displayWidth/2-165,displayHeight-290,40,40);
 //level1.visible=false;
 level2=createSprite(displayWidth/2+40,displayHeight-290,40,40);
 level2.visible=false;
 level3=createSprite(displayWidth/2+125,displayHeight/2-20,40,40);
 level3.visible=false;
 level4=createSprite(displayWidth/2-60,displayHeight/2-20,40,40);
 level4.visible=false;
 level5=createSprite(displayWidth/2-240,displayHeight/2-20,40,40);
 level5.visible=false;
 level6=createSprite(displayWidth/2-245,displayHeight/2-140,40,40);
 level6.visible=false;
 level7=createSprite(displayWidth/2-30,displayHeight/2-140,40,40);
 level7.visible=false;
 level8=createSprite(displayWidth/2+150,displayHeight/2-140,40,40);
 level8.visible=false;
 level9=createSprite(displayWidth/2+185,displayHeight/2-265,40,40);
 level9.visible=false;
 level10=createSprite(displayWidth/2-30,displayHeight/2-265,40,40);
 level10.visible=false;
 Diver = createSprite(100,200,200,50);
 Diver.visible=false;
 Diver.addImage(diverImage);
 startButton=createSprite(width/2,350,100,100);
    startButton.addImage(start);
    startButton.scale=0.3;
 textSize(30);
 fill ("red");
}

function draw() {
  background(255,255,255);
  if(gameState=="start"){
    cursor.x=mouseX;
    cursor.y=mouseY;
    if(mousePressedOver(startButton)){
      startButton.visible=false;
    var map=createSprite(displayWidth/2,displayHeight/2,width/2,height-300);
     map.addImage(levelImage);
    
     gameState="level";
     
     if(level1.isTouching(cursor)){
       gameState="play";
       console.log(gameState);
     }

      //gameState="play";
    }

  }else if(gameState=="play"){
    bg.velocityX=-3;
    if(bg.x<0){
      bg.x=bg.width/2;
    }
      Diver.visible=true;
  }
  
  drawSprites();
  if(gameState=="start"){
    text("Fellow Hero,help the fishes and", width/2-200,200);
    text(" save them from the evils of the Mausosaurus", width/2-300,250);
  }
}
/*function mouseClicked(){
  console.log(gameState);
  if(cursor.isTouching(level1)){
    gameState="play";
    
  }
}*/