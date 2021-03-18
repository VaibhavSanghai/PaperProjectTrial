class Paper {
    construction(x,y,radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        //Adding the this. commands
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius; 

        //Adding this.body to the world
        World.add(world,this.body);
    }

    display() {
    //Making the variables
    var pos = this.body.position;
    
    //Properties
    push();
    ellipseMode(RADIUS);
    fill("red");
    ellipse(pos.x, pos.y, this.radius, this.radius);
    pop();
    }
}