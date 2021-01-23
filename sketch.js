
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player,player2;
var playerImg,playerImg1,playerImg2,playerImg3;
var rightFlag = false;
var leftFlag = false;

var player2RightFlag = false;
var player2LeftFlag = false;

var fireball,fireballImg;
var back2;


var player2Img,player2Img1,player2Img2;

var engine,world;
var rect1 ,rect2,rect3,rect4;
var back,backImg;
var home1,home2;

var ground;
var brick;

var doorimg,door,doorimg1;
var displayDiamondFlag = true;

var box;
var dinoGroup;
var dino,dinoImg;
var wall;
var doorimg2;

var player1Score = 0;
var player2Score = 0;
var doorFlag = true;
var bullet1,bullet2,bullet3,bullet4;
var bullet1Img,bullet2Img,bullet3Img,bullet4Img;

var player1RightBulletGroup,player1LeftBulletGroup;
var player2RightBulletGroup,player2LeftBulletGroup;

var player16Img;

var bckImg;
var fireballGroup;
var gameState = 1;



function preload(){
  playerImg = loadImage("flash/plr1.png");
  playerImg1 = loadAnimation("flash/plr1.png","flash/plr2.png","flash/plr3.png","flash/plr4.png","flash/plr5.png","flash/plr6.png","flash/plr7.png");
  playerImg2 = loadAnimation("flash/plr8.png","flash/plr9.png","flash/plr10.png","flash/plr11.png","flash/plr12.png","flash/plr13.png","flash/plr14.png");
  playerImg3 = loadAnimation("flash/plr14.png");

  player2Img = loadImage("flash/player1.png"); 
  player2Img1 = loadAnimation("flash/player1.png","flash/player2.png","flash/player3.png","flash/player4.png","flash/player5.png","flash/player6.png","flash/player7.png","flash/player8.png");
  player2Img2 = loadAnimation("flash/player9.png","flash/player10.png","flash/player11.png","flash/player12.png","flash/player13.png","flash/player14.png","flash/player15.png","flash/player16.png");
 
  backImg = loadImage("wall.png");
  fireballImg = loadAnimation("flash/fireball1.png","flash/fireball2.png","flash/fireball3.png","flash/fireball4.png","flash/fireball5.png",)
  
 
  brick = loadImage("flash/brick.png");

  player16Img = loadAnimation("flash/player16.png")

  bullet1Img = loadImage("flash/bullet1.png");
  bullet2Img = loadImage("flash/bullet2.png");
  bullet3Img = loadImage("flash/bullet3.png");
  bullet4Img = loadImage("flash/bullet4.png");

  dinoImg = loadAnimation("flash/dino1.png","flash/dino2.png","flash/dino3.png","flash/dino4.png","flash/dino5.png","flash/dino6.png","flash/dino7.png"); 

  bckImg = loadImage("flash/back.png");
  
  doorimg = loadAnimation("flash/door1.png");
  doorimg2 = loadAnimation("flash/door6.png");
  doorimg1 = loadAnimation("flash/door1.png","flash/door2.png","flash/door3.png","flash/door4.png","flash/door5.png","flash/door6.png");  
}

function setup() {
  engine = Engine.create();
  world = engine.world;

 
     box = createSprite(10,10,10,10);
     box.visible = false;
     ground = createSprite(displayWidth/2,displayHeight-110,displayWidth,20);
     player2 = createSprite(displayWidth/1.20,displayHeight/10,10,10);
    player2.scale = 0.5;
    player2.addAnimation("standing",player2Img);
    player2.addAnimation("runing",player2Img1);
    player2.addAnimation("bck",player2Img2);
    player2.addAnimation("bk",player16Img);
 
    player = createSprite(displayWidth/10,displayHeight/1.20,10,10);
    player.scale = 0.3;
    player.addAnimation("stand",playerImg);
    player.addAnimation("run",playerImg1);
    player.addAnimation("back",playerImg2);
    player.addAnimation("backWords",playerImg3);

    fireballGroup = new Group;

     if(gameState === 0){
     
  createCanvas(displayWidth,displayHeight-100);
 
    player.collide(ground);

console.log("1");
//player.addImage(playerImg);

    
    player2.collide(ground);
    console.log("2");

   player1RightBulletGroup = new Group(); 
    player1LeftBulletGroup = new Group();

    player2RightBulletGroup = new Group(); 
    player2LeftBulletGroup = new Group();
    console.log("3");
   
   
   
    dinoGroup = new Group;

    boxGroup = new Group;

    back  = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    back.scale = 4;
    back.addImage(backImg);
    console.log("4");

    wall = createSprite(10,height/2,10,height);


   
    

    
  
    rect2 = createSprite(displayWidth/1.25,displayHeight/6,displayWidth/2,displayHeight/90)
    rect1 = createSprite(displayWidth/6 ,displayHeight/1.5,displayWidth/2,displayHeight/90);

    console.log("6");
    door =  createSprite(width/2-100,height/2-100,20,20);
    door.addAnimation("closed",doorimg);
    door.addAnimation("open",doorimg1);
    door.addAnimation("opened",doorimg2);
    door.scale = 0.3;
    player2.collide(rect1);

player2.collide(rect2);

//player.addAnimation("run",playerImg1);

player.collide(rect1);
player.collide(rect2);

//player.collide(box);
rect1.display(); 

if(player.isTouching(dinoGroup)){
  dinoGroup.setVelocityXEach(0);
 // player.collide(dinoGroup);
  player1Score = player1Score-1

}
if(player.isTouching(fireballGroup)){
  dinoGroup.setVelocityXEach(0);
 // player.collide(dinoGroup);
  player1Score = player1Score-1;
}
if(player2.isTouching(dinoGroup)){
  dinoGroup.setVelocityXEach(0);
 // player.collide(dinoGroup);
  player1Score = player1Score-1

}
if(player2.isTouching(fireballGroup)){
  dinoGroup.setVelocityXEach(0);
 // player.collide(dinoGroup);
  player1Score = player1Score-1;
}

if(player1LeftBulletGroup.isTouching(dinoGroup)){

  player1LeftBulletGroup.destroyEach();
  dinoGroup.destroyEach();

 }
 if(player1RightBulletGroup.isTouching(dinoGroup) ){

  player1RightBulletGroup.destroyEach();
  dinoGroup.destroyEach();
 }
 if(player2LeftBulletGroup.isTouching(dinoGroup)){

  player2LeftBulletGroup.destroyEach();
  dinoGroup.destroyEach();
 }
 if(player2RightBulletGroup.isTouching(dinoGroup) ){
  player2RightBulletGroup.destroyEach();
  dinoGroup.destroyEach();
 }
 if( player1LeftBulletGroup.isTouching(fireballGroup)){

  player1LeftBulletGroup.destroyEach();
  fireballGroup.destroyEach();
 }
 if(player1RightBulletGroup.isTouching(fireballGroup)){
  player1RightBulletGroup.destroyEach();
  fireballGroup.destroyEach();
 }
 if( player2LeftBulletGroup.isTouching(fireballGroup)){

  player2LeftBulletGroup.destroyEach();
  fireballGroup.destroyEach();
 }
 if( player2RightBulletGroup.isTouching(fireballGroup)){

  player2RightBulletGroup.destroyEach();
  fireballGroup.destroyEach();
 }

if(player2.isTouching(dinoGroup)){
  //player2.collide(dinoGroup);
  player2Score = 0;
} 


 } else{
  back2 = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  back2.addImage(bckImg);
  back2.scale = 5;
 }
 
  
  

  console.log(displayWidth/4);
  console.log(displayHeight);

 //if(boxGroup.isTouching(player) || boxGroup.isTouching(player2)){
   // box.destroy();
   
 // }
 setInterval(function(){
  box.destroy();
  spawnDiamonds();
},10000);




}

function draw() {
  
  if(keyDown("right")){
    player.x = player.x+5;
    player.changeAnimation("run",playerImg1);
    rightFlag = true;
    leftFlag = false;
    
  }else if(keyDown("left")){
   player.x = player.x-5;
   player.changeAnimation("back",playerImg2);
   rightFlag = false;
    leftFlag = true;
   
 }
   else{
     if(rightFlag){
      player.changeAnimation("stand",playerImg);
     }else if(leftFlag){
       player.changeAnimation("backWords",playerImg3);
     }
     
  }
  
 if(keyDown("up")) {
   player.velocityY= -12;
 
   
 }
 player.velocityY = player.velocityY +0.7;
 
 if(keyDown("d")){
  player2.x = player2.x+5;
  player2.changeAnimation("runing",player2Img1);
  player2RightFlag = true;
  player2LeftFlag  = false;
  
}else if(keyDown("a")){
 player2.x = player2.x-5;
 player2.changeAnimation("bck",player2Img2);
 player2RightFlag = false;
  player2LeftFlag  = true;
 
} 
else{
  if(player2RightFlag){
    player2.changeAnimation("standing",player2Img);
   }else if(player2LeftFlag){
     player2.changeAnimation("bk",player16Img);
   }
   
}




if(keyDown("w")) {
 player2.velocityY= -12;

 
}



player2.velocityY = player2.velocityY +0.7;


 
 

player2.depth = box.depth+1
player.depth = box.depth+1

 createEdgeSprites();

 if(displayDiamondFlag){
 // spawnDiamonds();
  displayDiamondFlag = false;
}
 
if(player.isTouching(box) ){
player1Score++;
player.collide(box);
box.destroy();

}


spawnDinos();
if(player2.isTouching(box) ){
  player2Score++;
  player2.collide(box);
  box.destroy();
  
  }

  if(player1Score === 10 && doorFlag){
    door.changeAnimation("open",doorimg1);
    doorFlag = false;
    door.changeAnimation("opened",doorimg2);
  }
 
  
  if(keyWentDown("enter")){
    player1SpawnBullets();
  }

  if(keyWentDown("space")){
    player2SpawnBullets();
  }
    
  spawnFireball();

  drawSprites();
  textSize(40);
text("Player1 Score : " + player1Score,50,30);
text("Player2 Score : " + player2Score,width-400,30);
}

 function spawnDiamonds(){ 
   //box.destroy();


   var x =Math.round(random(10,width-100));
   var y =Math.round(random(10,height-100));
  
   box = createSprite(x,y,10,10);
   box.addImage(brick);
   box.scale = 0.2;
  
//debug
   //boxGroup.add(box);
  

  
}
function spawnDinos(){
  if (frameCount % 300 === 0) {
    dino = createSprite(10,Math.round(random(10,height-100)),10,10);
    dino.addAnimation("fly",dinoImg);
    dino.scale = 0.3;
    
   
    dino.velocityX = 3;
    
     //assign lifetime to the variable
    dino.lifetime = 500;
    
   
    dinoGroup.add(dino);
    console.log(dino.x);
}
}
function spawnFireball(){
  if (frameCount % 250 === 0) {
    fireball = createSprite(width,Math.round(random(10,height-100)),10,10);
    fireball.addAnimation("move",fireballImg);
    fireball.scale = 0.3;
    
   
    fireball.velocityX = -3;
    
     //assign lifetime to the variable
     fireball.lifetime = 500;
    
    fireballGroup.add(fireball);
    
}
}
  function player1SpawnBullets(){

   var bullet = createSprite(player.x,player.y,10,10);
   bullet.scale = 0.4;
   if(rightFlag){
     bullet.addImage(bullet1Img);
     bullet.velocityX = 4;
    
     player1RightBulletGroup.add(bullet);

   } else if(leftFlag) {
    bullet.addImage(bullet3Img);
    bullet.velocityX = -4;
   
    player1LeftBulletGroup.add(bullet);

   }


  } 
  function player2SpawnBullets(){
    var bullet = createSprite(player2.x,player2.y,10,10);
    bullet.scale = 0.4
    if(player2RightFlag){
      bullet.addImage(bullet2Img);
      bullet.velocityX = 4;
     
      player2RightBulletGroup.add(bullet);
 
    } else if(player2LeftFlag) {
     bullet.addImage(bullet4Img);
     bullet.velocityX = -4;
    
     player2LeftBulletGroup.add(bullet);
 
    }
 
 
   }