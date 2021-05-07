class Rubber {
    constructor(x,y,r) {
      var options = {
         density:1,
         friction:4,
         restitution:0.3
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position; 
      ellipseMode(CENTER);
      fill("blue");
      ellipse(pos.x, pos.y, this.r,this.r);
    }
  }
  ;