function Sketch(x, y, bubbleWidth) {
    this.pos = createVector(x, y);
    
    this.b = this.pos.copy();
    this.width = bubbleWidth;    
}

Sketch.prototype.show = function (color) {
    stroke(color.x, color.y, color.z);
    strokeWeight(this.width);
    line(this.pos.x, this.pos.y, this.b.x, this.b.y);
}

Sketch.prototype.calcB = function () {
   
}

Sketch.prototype.follow = function (targetX, targetY) {
    let target = createVector(targetX, targetY);
    let dir = p5.Vector.sub(target, this.pos);
    let newTarget = p5.Vector.add(target, dir);
    this.pos.lerp(newTarget, 0.2);
    this.b.set(this.pos.x, this.pos.y);
}


//ok
Sketch.prototype.drawFace = function () {
    stroke(255);
    strokeWeight(this.width / 3);
    point(this.pos.x - this.width / 4, this.pos.y - this.width / 5);

    stroke(0);
    strokeWeight(this.width / 5);
    point(this.pos.x - this.width / 4, this.pos.y - this.width / 5);

    stroke(255);
    strokeWeight(this.width / 3);
    point(this.pos.x + this.width / 4, this.pos.y - this.width / 5);

    stroke(0);
    strokeWeight(this.width / 5);
    point(this.pos.x + this.width / 4, this.pos.y - this.width / 5);

    stroke(0);
    strokeWeight(this.width / 25);
    arc(this.pos.x, this.pos.y + this.width / 5, this.width / 2, this.width / 4, radians(0), radians(180));
}