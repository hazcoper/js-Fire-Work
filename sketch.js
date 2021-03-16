// Particle System Simulation
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/syR0klfncCk
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-system-simulation.html
// https://editor.p5js.org/codingtrain/sketches/QRzgzQLnQ

let particles = [];
let myRocket;

function setup() {
  createCanvas(600, 600);
  createParticles(100);
  myRocket = new Missle(300,300);
}

function createParticles(number){
  for (let i = 0; i < number; i++) {
    particles.push(new Particle(200, 200));  //estou a criar uma nova particula no ponto 200, 200
  }


}


function draw() {
  background(0);
  myRocket.makeMove();
  myRocket.show();
  
  
}
