let ps = [];
let particles = [];
let scale = 1; 
let expansionRate = 0.05; 
let bgImg; 
let hmImg;
let bgMusic; 


function preload() {
  bgImg = loadImage('bg03.jpg');
  hmImg = loadImage('1.png');
  bgMusic = loadSound('bgmusic.mp3'); 
}

function setup() {
  createCanvas(700, 530);
  noCursor();
  
  bgMusic.loop(); 
}

function draw() {
  
  // shake~~
  let shakeX = random(-6, 6);
  let shakeY = random(-6, 6);

  // image shake
  image(bgImg, shakeX, shakeY, width, height);

  fill(0, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);
  
  let dynamicCenterY = (height / 2);
  

  for (let i = 0; i < 10; i++) {
    let p1 = new Part(width / 2, dynamicCenterY, 0, 0, 0);
    ps.push(p1);
  }

  for (let i = ps.length - 1; i >= 0; i--) {
    ps[i].show();
    ps[i].move();
    if (ps[i].fd()) {
      ps.splice(i, 1);
    }
  }
  
  // update particle
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].applyForce(createVector(random(-0.1, 0.1), random(-0.1, 0.1))); // particle xuanwo
    particles[i].expand(expansionRate); 
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
  
  if (frameCount % 2 == 0) {
    generateParticlesAtLimbs(scale);
  }
  // people shape
  drawFilledHumanFigure(width / 2, height / 2, scale);

  scale *= 0.995; 
    
}


function drawFilledHumanFigure(centerX, centerY, scale) {
  let imgWidth = hmImg.width * scale;
  let imgHeight = hmImg.height * scale;
  
 
  let drawX = centerX - imgWidth / 2;
  let drawY = centerY - imgHeight / 2;

 
  image(hmImg, drawX, drawY, imgWidth, imgHeight);
}



class Part {
  constructor(x, y, r, g, b) {
    this.x = x;
    this.y = y;

    let mx = map(mouseX, 0, width/6, 0, 3);
    let my = map(mouseY, 0, width/6, 0, 2);
    
    this.vx = random(-mx, mx);
    this.vy = random(-my, my);

    this.a = 100;
   
    this.s = random(3, 8); 

    this.r = r;
    this.g = g;
    this.b = b;
  }

  fd() {
    return this.a < 0;
  }

  show() {
    fill(this.r, this.g, this.b, this.a);
    noStroke();
    ellipse(this.x, this.y, this.s);
  }

  move() {
    this.a -= width / 1000;
    this.s -= width / 10000;
    this.x += this.vx;
    this.y += this.vy;
  }
}
function generateParticlesAtLimbs(scale) {
  let imgWidth = hmImg.width * scale;
  let imgHeight = hmImg.height * scale;
  let centerX = width / 2;
  let centerY = height / 2;

  
  let positions = [
    {x: centerX - imgWidth * 0.4, y: centerY - imgHeight * 0.4}, 
    {x: centerX + imgWidth * 0.4, y: centerY - imgHeight * 0.4},
    {x: centerX - imgWidth * 0.4, y: centerY + imgHeight * 0.4}, 
    {x: centerX + imgWidth * 0.4, y: centerY + imgHeight * 0.4} 
  ];
  positions.forEach(pos => {
    let angle = atan2(pos.y - centerY, pos.x - centerX); 
    let spread = PI / 8; // fashe fanwei
    angle += random(-spread, spread); // 在限制的范围内随机化角度
    let size = random(3, 7); 
    let alpha = random(100, 255); 
    particles.push(new Particle(pos.x, pos.y, angle, size, alpha));
  });
}

class Particle {
  constructor(x, y, angle, size, alpha) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.fromAngle(angle).mult(random(1, 2));
    this.size = size; 
    this.alpha = alpha; 
    this.acc = createVector(0, 0); 
  }

  applyForce(force) {
    this.acc.add(force);
  }

  expand(rate) {
    this.vel.mult(1 + rate); 
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel); 
    this.acc.mult(0); 
    this.alpha -= 2; 
    if (this.alpha < 0) {
      this.alpha = 0; 
    }
  }

  finished() {
    return this.alpha == 0;
  }

  show() {
    noStroke();
    fill(0, this.alpha);
    ellipse(this.pos.x, this.pos.y, this.size); 
  }
}
