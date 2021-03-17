class Missle{

    constructor(x, y, force, colorPallet){

        this.pos = createVector(x, y);
        this.vel = createVector(random(-1,1), 5 + force/5);  //velocidade no eixo x e no eixo y
        this.force = force;

        // this.accel
        console.log(colorPallet.base[0]);
        this.explodeStatus = -1; //-1 -> not exploding; 0 -> exploding; 1 -> exploded
        this.life = round(random(40,60) + force/5);
        //red green blue
        this.color = [round(random(230, 255)), 150, 130];
        this.colorPallet = colorPallet;

        
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
        this.Particle = new Particles(round(130+this.force/1.1), this.force, this.colorPallet);
        this.Particle.createParticles(this.pos.x, this.pos.y);

    }

    show(){
        // stroke(this.color[0], this.color[1], this.color[2])
        strokeWeight(0);
        if(this.explodeStatus == -1){
            fill(this.color[0], this.color[1], this.color[2], this.lifetime);
            ellipse(this.pos.x, this.pos.y, random(6,8)+this.force/4, random(6,10)+this.force/2);    
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