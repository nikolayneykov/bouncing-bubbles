class BotController {
    constructor(x, y, bubbleWidth) {
        this.pos = createVector(x, y);
        this.width = bubbleWidth;
        this.pos.dx = random(1, 2);
        this.pos.dy = random(1, 2);
        this.vel = createVector(0, 0);
    }

    wander() {
        if (this.pos.x > width || this.pos.x < 0) {
            this.pos.dx = -this.pos.dx;
        }
        if (this.pos.y > height || this.pos.y < 0) {
            this.pos.dy = -this.pos.dy;
        }

        this.pos.x += this.pos.dx;
        this.pos.y += this.pos.dy;
    }

    bounce() {
        this.pos.dx = -this.pos.dx;
        this.pos.dy = -this.pos.dy;
        this.pos.x += this.pos.dx * 15;
        this.pos.y += this.pos.dy * 15;
    }
}
