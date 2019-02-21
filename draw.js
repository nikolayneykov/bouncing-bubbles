

function draw() {
    background(0, 0, 0);
    translation();

    for (let i = 0; i < enemies.length; i++) {
        enemies[i].controller.wander();
        enemies[i].update();
        enemies[i].show();
    }

    for (let i = food.length - 1; i >= 0; i--) {
        food[i].show();

        if (player.controller.eats(food[i])) {
            player.body.width = player.controller.thicken(food[i]);
            food.splice(i, 1);
            let newFood = new Food(random(width), random(height));
            food.push(newFood);
        }
    }
    player.controller.speed(2);
    player.update();
    player.show();

    for (let i = enemies.length - 1; i >= 0; i--) {

        if (player.controller.isHit(enemies[i])) {
            enemies[i].controller.bounce();
            player.controller.width = Math.max(50, player.body.width - 1);
            player.body.width = player.controller.width;
        }
    }

    if (mouseIsPressed && player.body.width > 50) {
        player.controller.speed(3);
        player.body.width -= 0.05;
    }
}

function translation() {
    translate(width / 2, height / 2);
    zoom = lerp(zoom, 1, 0.02);
    scale(zoom);
    translate(-playerController.pos.x, -playerController.pos.y);
}