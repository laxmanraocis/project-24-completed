class Stone {
    constructor(x,y) {
      var options = {
         density:5,
         friction:1,
         restitution:0
      }
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.width = 100;
      this.height = 100;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
      rect(pos.x, pos.y, this.width, this.height);
    }
  }
  ;