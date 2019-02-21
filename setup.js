var player;
var playerController;
var bestScore = 0;
var food = [];
var zoom = 0;
var enemies = [];
const initialWidth = 50;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    playerController = new PlayerController(width / 2, height / 2, initialWidth);
    player = new Bubble(playerController, width / 2, height / 2);

    //adding bots
    for (let i = 0; i < 20; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let botController = new BotController(x, y, initialWidth);
        let enemy = new Bubble(botController, x, y);
        enemies.push(enemy);
    }

    //adding food
    for (let i = 0; i < 100; i++) {
        let x = random(width);
        let y = random(height);
        let f = new Food(x, y);
        food.push(f);
    }
}