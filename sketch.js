var fruit1,fruit2,fruit3,fruit4,alien1,alien2,sword,monster;
var swordImage,monsterImage,gameOverImage;

var PLAY=1;
var END =0;
var gameState=PLAY;
 var swordSound;



function preload(){
swordImage=loadImage("sword.png");
  monsterImage = loadAnimation("alien1.png","alien2.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  swordSound=loadSound("knifeSwooshSound.mp3"); 
 
}

function setup(){
  sword= createSprite(40,200,20,20);
sword.addImage (swordImage);
sword.scale = 0.7;
  
  score=0;
  fruitGroup=createGroup();
  
  enemyGroup=createGroup();
  
}

function draw(){
background ('white');
  if(gameState===PLAY){
    enemy();
  fruits();
  
  
   sword.x=200;
  sword.y=200;
  
   
  
  sword.y=World.mouseY
  sword.x=World.mouseX 
  
  if (fruitGroup.isTouching(sword)){
    swordSound.play()
    fruitGroup.destroyEach();
    score=score+2
  }
  else if (enemyGroup.isTouching(sword)){ 
    gameState=END;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach(); 
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0); 
    sword.addImage(gameOverImage);
  } 
  }
  text("score:"+score,350,10);
  
 drawSprites();
  
}
  
  function fruits() {
 if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;

  r=Math.round(random(1,4));
    if(r==1){
      fruit.addImage(fruit1);
    } else if(r==2){
      fruit.addImage(fruit2);
    }else if(r==3){
      fruit.addImage(fruit3);
    }else{
      fruit.addImage(fruit4);
    }
  
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
      fruit.setLifeTime=100;
    fruitGroup.add(fruit);
  }
  }

function enemy(){ 
  if(World.frameCount%200===0){ 
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8; monster.setLifetime=50;
    enemyGroup.add(monster); 
  }
}
