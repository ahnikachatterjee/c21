var fixedrect,movingrect
var rect1, rect2
var car,wall
function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400,500,50,80)
  movingrect=createSprite(400,800,80,30)
  rect1=createSprite(200,500,50,80)
  rect2=createSprite(400,800,80,30)
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  car=createSprite(400,100,50,80)
  wall=createSprite(700,100,80,30)
  car.velocityX=+3
}

function draw() {
  background("black"); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  rect2.x = World.mouseX
  rect2.y = World.mouseY
  console.log(movingrect.x - fixedrect.x);
  console.log(movingrect.width/2 + fixedrect.width/2);
  bounceoff (car,wall)
if(istouching(fixedrect,movingrect)){
  fixedrect.x = 100;
  fixedrect.y = 100;  
}
if(istouching(rect1,rect2)){
  rect1.shapeColor = "yellow"; 
}

  drawSprites();
}
