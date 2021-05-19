var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var wallpaper;
var score

function preload(){
  
  bg= loadImage("jungle.jpg");
  monkey_running =            loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400, 400);
  
  ground= createSprite(400,390,900,10);
  
  wallpaper= createSprite(200,200,400,400);
  wallpaper.addImage(bg);
  wallpaper.velocityX=-4;
  wallpaper.x= wallpaper.width/2;
  
  monkey= createSprite(80,375,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  score=0;
  
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
   background(220);
   drawSprites();
  
    fill("white")
    textSize(20);
    text("Survial Time:"+score, 250,30);
  
  if(touches.length>0|| keyDown("space")){    
    monkey.velocityY=-10;
    touches=[];
  }
  
  monkey.velocityY= monkey.velocityY+0.9;
  
  if(wallpaper.x<0){
    wallpaper.x= wallpaper.width/2;   
  }
  
  monkey.collide(ground);
  
  if(monkey.isTouching(FoodGroup)){
      
    FoodGroup.destroyEach();
    score=score+1;
      }
  
  switch(score){
      
    case 10:monkey.scale=0.12;
            break;
            
    case 20:monkey.scale=0.14;
            break;
            
    case 30:monkey.scale=0.16;
            break;  
            
    case 40:monkey.scale=0.18;
            break;
            
    default: break;
  }
  if(monkey.isTouching(obstacleGroup)){
    monkey.scale=0.1;
  }
  food();
  obstacles();
}

function food(){
  
  if(frameCount% 80===0){
    banana= createSprite(400,200,10,10); 
    banana.addImage(bananaImage);
    banana.y= Math.round(random(120,200));
    banana.velocityX= -8;
    banana.scale=0.1;
    banana.lifeTime=50;
    FoodGroup.add(banana);
  }
}

function obstacles(){
  
   if(frameCount% 300===0){
    obstacle= createSprite(400,375,10,10); 
    obstacle.addImage(obstacleImage);
    //obstacle.x= Math.round(random(120,200));
    obstacle.velocityX= -8;
    obstacle.scale=0.1;
    obstacle.lifeTime=50;
    obstacleGroup.add(obstacle);
  }
}