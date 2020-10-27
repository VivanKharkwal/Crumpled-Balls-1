const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,engine,world,dustbin,paper,line1,line2,line3;

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(125, 300, 10);
  ground = Bodies.rectangle(400, 400, 800, 10,{ isStatic: true });
  ground.shapeColor = color(255, 255, 0);
  World.add(world, ground);
}

function draw() {
    background(0);

    rectMode(CENTER);

    dustbin.display();
    paper.display();
    line1.display();  
    line2.display();  
    line3.display();  
}


function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
