class DropPit{
    constructor(x,y,height,angle){
        this.body=rectangle(x,y,20,height)
        this.width=20;
        this.height=height
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body);
    }
    display(){
        var posx=this.body.position.x;
        var posy=this.body.position.y;
        var angle=this.body.angle;
        push();
        translate(posx,posy);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height)
        pop();
        }
}