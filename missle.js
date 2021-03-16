class Missle{

    constructor(x, y, force){

        this.pos = createVector(x, y);
        this.vel = createVector(random(-1,1), 4 + force/10);  //velocidade no eixo x e no eixo y
        this.force = force;
        // this.vel
        // this.accel
        // this.angle
        this.explodeStatus = -1; //-1 -> not exploding; 0 -> exploding; 1 -> exploded
        this.life = round(50 + force/5);
        this.color = [210, 210, 210];
    }

    makeMove(){
        //update the position and life of
        this.pos.y = this.pos.y - this.vel.y;
        this.pos.x = this.pos.x - this.vel.x;
        this.life -= 1;

        if(this.life < 1 && this.explodeStatus == -1){
            this.explode();
            this.explodeStatus = 0;
        }
    }

    explode(){
        //create the particles and send them
        console.log("Particle has exploded");
        this.Particle = new Particles(150+this.force/20, this.force);
        this.Particle.createParticles(this.pos.x, this.pos.y);

    }

    show(){
        // stroke(this.color[0], this.color[1], this.color[2])
        strokeWeight(0);
        if(this.explodeStatus == -1){
            fill(this.color[0], this.color[1], this.color[2], this.lifetime);
            ellipse(this.pos.x, this.pos.y, 10);    
            return 0;
        }
        if(this.explodeStatus == 0){
        //means that I need to draw the particles
            this.explodeStatus = this.Particle.drawParticles();
            return 0;
        }
        if(this.explodeStatus == 1){
            //means that I am done
            return 1;
        }
            
        
    }

}