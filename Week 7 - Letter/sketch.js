const word = "YI YI";
let myFont;
let points;
let textBox;
const fSize = 160;
const wiggle = 1;
let dotSize = 10;
let startColor;
let endColor;
let bgmusic;

function preload() {
  myFont = loadFont("qillo regular.otf");
  bgmusic = loadSound("bgmusic.m4a"); 
}

function setup() {
  createCanvas(600, 500);
  textLeading(fSize);

  points = myFont.textToPoints(word, 0, 0, fSize, { sampleFactor: 0.1 });
  textBox = myFont.textBounds(word, 0, 0, fSize);

  startColor = color(0, 255, 0); 
  endColor = color(255, 255, 0); 

  bgmusic.loop();
}

function draw() {
  background(0);

  let d = dist(mouseX, mouseY, width / 2, height / 2);
  let volume = map(d, 0, dist(0, 0, width, height), 1, 0);
  volume = constrain(volume, 0, 1); 
  bgmusic.setVolume(volume);

  let numberOfSquares = 100; 
  for (let i = 0; i < numberOfSquares; i++) {
    let x = random(width);
    let y = random(height);
    let squareSize = random(10, 20); 
    let squareAlpha = random(50, 150); 
    let squareColor = lerpColor(color(255, 20, 147), color(128, 0, 128), random());
    
    fill(red(squareColor), green(squareColor), blue(squareColor), squareAlpha);
    rect(x, y, squareSize, squareSize);
  }

  let sizeMultiplier = max(1, 9 - d / 40);
  let currentDotSize = dotSize * sizeMultiplier;

  translate(width / 2 - textBox.w / 2, height / 2 + textBox.h / 2);
  noStroke();

  let t = (sin(millis() / 2000) + 1) / 2;
  let currentColor = lerpColor(startColor, endColor, t);

  for (let i = 0; i < points.length; i++) {
    let alpha = random(50, 255);
    let x = points[i].x + random(-wiggle, wiggle);
    let y = points[i].y + random(-wiggle, wiggle);
    fill(red(currentColor), green(currentColor), blue(currentColor), alpha);
    rect(x, y, currentDotSize, currentDotSize);
  }
}
