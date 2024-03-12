let bgImg; 
let bgMusic;

function preload() {
  bgImg = loadImage('bg01.png'); 
  bgMusic = loadSound('background.mp3');
}
 
class Snowflake {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.branches = floor(random(5, 8));
    this.circlePositions = [0.3, 0.6, 0.9].map(pos => pos * this.size / 2);     //snow-circle position(in branches)
  }

  update() {
    // snow falling
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  }

  draw() {
    
    push();
    translate(this.x, this.y);
    stroke(255); 
    strokeWeight(2);
    noFill();
    for (let i = 0; i < this.branches; i++) {
      this.drawBranch(0, 0, this.size / 2);
      rotate(TWO_PI / this.branches);
      
    }
    pop();
      background(bgImg);
  }

  drawBranch(startX, startY, length) {
    // branches and circle
    line(startX, startY, startX + length, startY);
    this.circlePositions.forEach(pos => {
      ellipse(startX + pos, startY, this.size / 10);
      ellipse(startX - pos, startY, this.size / 10); // 对称
    });
  }

}

let snowflakes = [];
let circleCenterX, circleCenterY, circleRadius;

function setup() {
  bgMusic.play(); 
  bgMusic.loop(); 
  createCanvas(520, 520);
  circleCenterX = width / 2;
  circleCenterY = height / 2;
  circleRadius = min(width, height) / 3; 
  gif = createImg('01.gif');
  gif.position(100, 150); // 
  gif.size(220,220);
  // generted snow
  for (let i = 0; i < 50; i++) {
    let angle = random(TWO_PI);
    let r = sqrt(random()) * circleRadius;
    let x = circleCenterX + r * cos(angle);
    let y = circleCenterY + r * sin(angle);
    let size = random(10, 30);
    let speed = random(1, 3);
    snowflakes.push(new Snowflake(x, y, size, speed));
  }
}

function draw() {
  background(bgImg,0,0,0,0);
  background(0)
  noFill();
  stroke(255);
  
  // update snow
  snowflakes.forEach(flake => {
    flake.update();
    flake.draw();
  });
}