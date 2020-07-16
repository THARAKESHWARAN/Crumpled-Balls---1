class Paper {

    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x, y, 15, options);
        this.diameter = 10;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("purple");
        strokeWeight(2);
        ellipse(pos.x, pos.y, 30, 30);
    }
}