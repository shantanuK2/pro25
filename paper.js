class paper {
  constructor(x, y,radius) {
    var options = {
        isStatic:false,
        restitution:0.8,
        friction:0.3,
        density:1.0
    }
    this.radius = radius
    this.x = x
    this.y = y
    this.body = Matter.Bodies.circle(this.x,this.y,this.radius, options);
   this.image = loadImage("paper.png")
    
    World.add(world, this.body);
  
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle 
    push()
    translate(pos.x,pos.y)
    rotate(0 - angle)
    image(this.image,0,0,this.radius,this.radius);
    pop();
  }
};