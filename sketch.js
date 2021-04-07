var fixed,moving
function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(600,300,40,40)
}

function draw() {
  background("cyan"); 
  moving.x=mouseX
  moving.y=mouseY
  if(moving.x-fixed.x<=(moving.width/2+fixed.width/2)&&
  fixed.x-moving.x<=(moving.width/2+fixed.width/2)&&
  fixed.y-moving.y<=(moving.height/2+fixed.height/2)&&
  moving.y-fixed.y<=(moving.height/2+fixed.height/2)
  ){
    moving.shapeColor="black"
    fixed.shapeColor="black"
  } 
  else{
    moving.shapeColor="grey"
    fixed.shapeColor="grey"
  }
  drawSprites();
}