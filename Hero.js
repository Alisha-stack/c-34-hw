class Hero {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        friction: 0.005,
        isStatic:true
    };
    this.width = width;
    this.height = height;
    this.image = loadImage("Superhero-01.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
   
     
      World.add(world, this.body);
      
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     
      imageMode(CENTER);
        image(this.image, 0, 0, 250, 150);
      pop();
    }
  }

