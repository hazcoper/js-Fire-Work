class Particles{

    constructor(quant){
        this.quant = quant;
        this.partList = [];
    }

    createParticles(x, y){
        for(let i = 0; i < this.quant; i++){
            this.partList.push(new Particle(x ,y));
        }
    }

    drawParticles(){
        for (let particle of this.partList) {
          let gravity = createVector(0, 0.01);
          particle.applyForce(gravity);
          particle.update();
          particle.show();
        }
      
        for (let i = this.partList.length - 1; i >= 0; i--) {
          if (this.partList[i].finished()) {
            this.partList.splice(i, 1);
          }
        }
      
      }
}