class Food {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.radius = random(5, 10);
        this.col = createVector(random(255), random(255), random(255));
    }

    show() {
        noStroke();
        fill( this.col.x, this.col.y, this.col.z);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }
}
