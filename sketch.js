
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var engine, world;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
for (var k=0; k <=width; k = k+80) {
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));

}
  //createSprite(400, 200, 50, 50);
  Engine.run(engine);
}

function draw() {
  background(255,255,255);
  for  (var k = 0; k<divisions.length;k++) {
    divisions[k].display();
  }
  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }
  drawSprites();
}