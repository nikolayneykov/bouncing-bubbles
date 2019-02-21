class PlayerController {
    constructor(x, y, bubbleWidth) {
        this.pos = createVector(width / 2, height / 2);
        this.vel = createVector(0, 0);
        this.width = bubbleWidth;
    }

    eats(food) {
        let distance = dist(this.pos.x, this.pos.y, food.pos.x, food.pos.y);

        if (distance < this.width / 2) {
            return true;
        }
        return false;
    }

    thicken(food) {
        this.width += food.radius / 10;
        return this.width;
    }

    isHit(enemy) {

        let distance = dist(this.pos.x, this.pos.y, enemy.controller.pos.x, enemy.controller.pos.y);

        if (distance < this.width / 2 + enemy.controller.width/2) {
            return true;
        }

        return false;
    }

    speed(mag) {
        if (this.pos.x > width) {
            this.pos.x = width;
        }

        if (this.pos.x < 0) {
            this.pos.x = 0;
        }

        if (this.pos.y > height) {
            this.pos.y = height;
        }

        if (this.pos.y < 0) {
            this.pos.y = 0;
        }

        let newvel = createVector(mouseX - width / 2, mouseY - height / 2);

        if (mag) {
            newvel.setMag(mag);
        } else {
            newvel.setMag(0.8);
        }

        this.vel.lerp(newvel, 0.2);
        this.pos.add(this.vel);
    }
}




