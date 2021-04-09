class Umbrella {
cpnstructor(x,y){
    var option = {
        "iStatic": true,
    }
    this.body = Bodies.circle(x,y,50,options);
    this.radius = 50;
    this.image = loadImage("images/Walking Frame/walking-1.png","images/Walking Frame/walking-2.png","images/Walking Frame/walking-3.png","images/Walking Frame/walking-4.png","images/Walking Frame/walking-5.png","images/Walking Frame/walking-6.png","images/Walking Frame/walking-7.png","images/Walking Frame/walking-8.png")
    World.add(world,this.body)
} 

display(){
    var pos = this.body.position;
    imageMode(CENTER);
    this.image(this.image, pos.x,pos.y=70,300,300)
}
}