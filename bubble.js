class Bubble {
    constructor(controller, x, y) {
        this.controller = controller;
        this.body = new Sketch(x, y, controller.width);
        this.color = createVector(random(255), random(255), random(255));
    }

    show() {
        let currentScore = this.body.width.toFixed() - 50;
        $('#score').text(currentScore);

        this.body.show(this.color);
        this.body.drawFace();

        if (bestScore < currentScore) {
            bestScore = currentScore;
        }
    }

    update() {
        this.body.follow(this.controller.pos.x, this.controller.pos.y);
    }
}
