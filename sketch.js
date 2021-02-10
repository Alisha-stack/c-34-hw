const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bgImg;
var ground;
var hero;
var fly;
function preload() {
//preload the images here
bgImg=loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1800, 600);
  // create sprites here
  
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(450,400,900,20);
  hero=new Hero(200,240,20,20);
 fly = new Fly(hero.body, { x: 500, y: 50 });
}

function draw() {
  
  background(bgImg);
  Engine.update(engine);
  ground.display();
  hero.display();
fly.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}
