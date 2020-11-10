var bullet, wall
var speed, weight
var thickness
var wallLeftEdge, wallRightEdge

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thikness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
 
  wall=createSprite(1200, 200, thickness, height/2);
  
}
 
function draw() {
  background(0); 


  hasCollided( bullet , wall );

  if (wall.x - bullet.x < (bullet.width+wall.width)/2)
  {bullet.velocityX=0;}
 
 
  var deformation=0.5 * weight * speed * speed /22500;
  if (deformation>180) 
  {
    bullet.shapeColor=(225,0,0);
  }
  if (deformation<180 && deformation>100)  
  {
    bullet.shapeColor=(230,230,0);
  }
  if (deformation<100);
  {
    bullet.shapeColor=(0,255,0);
  }

  


  






  drawSprites();
}


function hasCollided(bullet,wall )
{


bulletRightEdge = bullet.x + bullet.width
wallLeftEdge = wall.x
if ( bulletRightEdge >= wallLeftEdge)
{
 return true 
}

return false;

if (hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness);

  if(damage>10) 
  {
    wall.shapeColor= color(255,0,0);
  }

  if (damage<10)
  {

    wall.shapeColor= color(0,255,0);

  }
}







}
