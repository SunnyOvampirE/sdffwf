class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,width,height,options);
    World.add(world, this.body);
    this.Visiblity = 255;
    this.image= loadImage("box_img.png")
  }
  display(){
   if(this.body.speed < 3){
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, this.width, this.height);
    pop();
  }
   else{
     World.remove(world, this.body);
     push();
     var pos =this.body.position;
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     imageMode(CENTER);
     image(this.image,pos.x, pos.y, this.width, this.height);
     pop();
   }
    
  }


  score(){
    if (this.Visiblity< 0 && this.Visiblity >-105){
      score++;
    }


  }
};

