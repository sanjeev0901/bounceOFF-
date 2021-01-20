var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY=-5;

  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;
  movingRect.velocityY=5;
}

function draw() {
  background(0,0,0);  
 
  bounceOff(fixedRect,movingRect);

  
  drawSprites();
}

