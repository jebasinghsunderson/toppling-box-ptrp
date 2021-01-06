const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world
var box1,box2
var ground;

function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;

box1 =  new Box(500,400,50,50);
box2 = new Box(480,300,50,100)
ground = new Ground(500,970,1000,30)
}

  function draw() {
     background(0);  
    Engine.update(engine);

box1.display();
box2.display();
ground.display();
  }
  