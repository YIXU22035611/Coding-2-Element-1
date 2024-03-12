let imgs = [];
let boids = [];
let backgroundimg;
let catsound; 

function preload() {

  for (let i = 1; i <= 8; i++) {
    imgs[i - 1] = loadImage(i + ".png"); 
  }
 
  backgroundimg = loadImage("11.jpeg");
  catsound = loadSound("catsound.mp3");
}

function setup() {
  createCanvas(620, 530);
}

function draw() {
    
  clear();
  
  tint(255, 166); // alpha透明度
  image(backgroundimg, 0, 0, width, height); 
  noTint(); // 重置tint
  
  for (let boid of boids) {
    boid.run(boids);
  }
  
  
  for (let boid of boids) {
    boid.run(boids);
  }
  
  // mouse presing- - 
  // background(backgroundimg);
  // if (mouseIsPressed) {
  // let newBoid = new Boid(mouseX, mouseY);
  // boids.push(newBoid);
  // }

}

function mousePressed() {
  let newBoid = new Boid(mouseX, mouseY);
  boids.push(newBoid);
  if (!catsound.isPlaying()) { 
    catsound.play(); 
  }
   
}

