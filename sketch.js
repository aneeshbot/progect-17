
var monkey , monkey_running 
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0
var ground
var spawnbanana
var spawnObstacle

var survivalTime = 0

function preload(){
  
  
  monkey_running =          loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

createCanvas(400, 400);
 

  
monkey = createSprite(80,315,20,50);

monkey.addAnimation("moving",monkey_running);

 monkey .scale = 0.1;
  

ground = createSprite(400,350,900,10)
ground.velocityX=-4
ground.x=ground.width /2  
console.log(ground.x)
 
foodGroup = new Group();
obstacleGroup = new Group();

}


function draw() {


  
background(220);

   if(keyDown("space")&&  monkey.y >= 100) {
         monkey.velocityY = -12;
        
    }
    
    //add gravity
     monkey.velocityY = monkey.velocityY + 0.8
    monkey .collide( ground);
  
 if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  
  
  

  stroke=("red")
  textSize(20)
  fill("red")
  text("score"+ score ,300,50)
 survivalTime =Math.ceil(frameCount/frameRate())
  text("survival time"+survivalTime,100,50)
  
  
  spawnbanana();

  spawnObstacle();
  
 
  
  drawSprites();
  

}

 





function  spawnbanana(){
 
 if (frameCount % 80 === 0)  {
 
 var banana = createSprite(200,120,40,10)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 100
   foodGroup.add(banana);
 
 }
}


function  spawnObstacle(){
 
 if (frameCount % 300 === 0)  {
 
 var obstacle = createSprite(400,325,40,10)
   // obstacle.y = Math.round(random(100,400));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2    ;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100
   obstacleGroup.add(obstacle);

 }
}


