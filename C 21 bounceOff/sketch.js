var fixedRect, movingRect, r1, r2, r3, r4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200, 800,80,30);
  movingRect.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  r1 = createSprite(400, 100, 50, 80);
  r1.shapeColor = "blue";
  r2 = createSprite(400, 800,80,30);
  r2.shapeColor = "blue";

  r2.velocityY = -5;
  r1.velocityY = +5;

 r3 = createSprite(600, 100, 50, 80);
 r3.shapeColor = "yellow";
 r4 = createSprite(600, 800,80,30);
 r4.shapeColor = "yellow";

 r4.velocityY = -5;
 r3.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bouncing(r1,r2);
  bouncing(movingRect,fixedRect);
  bouncing(r3,r4);
  
  drawSprites();
}

function bouncing(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}

}