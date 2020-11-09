var fixedRect, movingRect;
var Rect3, Rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  Rect3=createSprite(100,100,50,50);
 Rect3.shapeColor="green";
 Rect3.debug=true;
 Rect4=createSprite(200,100,50,50);
 Rect4.shapeColor="green";
 Rect4.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,Rect4)){
    movingRect.shapeColor="blue";
    Rect4.shapeColor="blue";
    }
    else{
      movingRect.shapeColor="green";
      Rect4.shapeColor="green";
    }
  drawSprites();
}
