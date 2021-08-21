
function preload(){
  seaimg = loadImage ("sea.png")
  ship_sailing = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200)
  sea.addImage(seaimg)
  sea.scale = 0.3
  sea.velocityX = -2

  ship = createSprite(150,180,100,20)
  ship.addAnimation("sailing",ship_sailing)
  ship.scale = 0.4


}

function draw() {
  background("blue");

  console.log(sea.x)
  if(sea.x < -200){
    sea.x = 200
  }

 drawSprites();
}