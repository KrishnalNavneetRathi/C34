class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'frictionAir': 0.005
      }
      this.body = Bodies.circle(x, y, radius ,options);
      this.width = width;
      this.height = height;
      this .radius=radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(255);
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
  