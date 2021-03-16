class Missle{

    constructor(x,y){

        this.pos = createVector(x, y);
        this.vel = createVector(0.1, 4);  //velocidade no eixo x e no eixo y

        // this.vel
        // this.accel
        // this.angle

        this.life = 40;

        this.color = [210, 210, 210];
    }

    makeMove(){
        //update the position and life of
        this.pos.y = this.pos.y - this.vel.y;
        this.pos.x = this.pos.x - this.vel.x;
        this.life -= 1;
        if(this.life == 0){
            this.explode();
        }
    }

    explode(){
        //create the particles and send them
        this.Particle = new Particles(200);
        this.Particle.createParticles(this.pos.x, this.pos.y);

    }

    show(){
        // stroke(this.color[0], this.color[1], this.color[2])
        strokeWeight(0);
        if(this.life > 0){
            fill(this.color[0], this.color[1], this.color[2], this.lifetime);
            ellipse(this.pos.x, this.pos.y, 10);    
        } else{
            //means that I need to draw the particles
            this.Particle.drawParticles();
        }
        
    }

}