// Particle System Simulation
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/syR0klfncCk
// https://thecodingtrain.com/learning/nature-of-code/4.1-particle-system-simulation.html
// https://editor.p5js.org/codingtrain/sketches/QRzgzQLnQ


//basicamente quero fazer particulas para uma pequena explosao



class Particle {
  constructor(x, y, force) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 2;
    this.lifetime = 255;
    this.force = force;
    
    
    // this.red = random(190, 201);
    // this.green = random(20, 40);
    // this.blue = random(0, 10);
    
    this.red = random(100, 201);
    this.green = random(20, 100);
    this.blue = random(0, 50);
  }



  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.lifetime -= round(5 - this.force/7);
    
  }

  show() {

    // stroke(this.red, this.green, this.blue, this.lifetime);
    strokeWeight(0);
    fill(this.red, this.green, this.blue, this.lifetime);

    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
