class Particles{

    constructor(quant, force){
        this.quant = quant + round(force/5);
        this.partList = [];
        this.force = force
    }


    createParticles(x, y){
        for(let i = 0; i < this.quant; i++){
            this.partList.push(new Particle(x ,y, this.force));
        }
    }

    drawParticles(){
        if(this.partList.length == 0){
            return 1;
        }
        for (let particle of this.partList) {
          let gravity = createVector(0, 0.03);
          particle.applyForce(gravity);
          particle.update();
          particle.show();
        }
      
        for (let i = this.partList.length - 1; i >= 0; i--) {
          if (this.partList[i].finished()) {
            this.partList.splice(i, 1);
          }
        }
        return 0;
      }
}