var bullet,wall,speed,weight


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1500,200,60,height/2);
bullet.shapeColor="white"
  wall.shapeColor=rgb(80,80,80);
  speed=random(223,321);
  thickness=random(22.83);
  weight=random(30,52)
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
if(collided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*  speed*speed/(thickness*thickness*thickness);
if(damage>10){
  wall.shapeColor="red"
}  

if(damage<10){
  wall.shapeColor="green"
}
}
  drawSprites();
}
function collided(lbullet,lwall){
if(lbullet.x+lbullet.width>=lwall.x){
return true
}
else{
  return false
}
}