/*
* For Fractal Tree
*/
class Line {
    constructor(x,y,r,a) {
        this.generated = false;
        this.r = r;
        // Angle in degrees relative to straight up, clockwise
        if(a < 0) {
            this.a = 360 + a;
        } else {
            this.a = a;
        }
        // this.a = a;
        this.pos1 = createVector(x,y);
        this.pos2 = this.calculatePointTwo(this.angleBelowNinety(this.a));
    }

    generate() {
        if(this.generated) {
            return this;
        }
        let lines = [];
        lines.push(this);
        let newR = this.r/2;
        for(let i=-1; i<2; i++) {
            let newA = this.a + (30 * i);
            let l = new Line(this.pos2.x,this.pos2.y,newR,newA);
            lines.push(l);
        }
        this.generated = true;
        return lines;
        // let newR = this.r/2;
        // new Line(this.pos2.x, this.pos2.y, newR, ((i*30) + this.a)% 360);
    }

    show() {
        push();
        // let col = color(Math.abs(Math.floor(this.pos1.x))%255,Math.abs(Math.floor(this.pos2.y))%255,Math.abs(Math.floor(this.r))%255);
        stroke(255);
        line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
        pop();
    }

    angleBelowNinety(a) {
        if(a > 90) {
            return this.angleBelowNinety(a-90);
        } else {
            return a;
        }
    }

    calculatePointTwo(a) {
        let dx = Math.sin(this.angleToRadians(a)) * this.r;
        let dy = Math.sin(this.angleToRadians(90-a)) * this.r;

        let point2;

        if(this.a <= 90) {
            point2 = createVector(this.pos1.x + dx, this.pos1.y - dy);
        }
        else if (this.a <=180) { // BUG:
            // console.log(`pos1 X: ${this.pos1.y}\tdX: ${dy}`);
            // console.log(`pos1 Y: ${this.pos1.x}\tdY: ${dx}\n\n`);
            // point2 = createVector(this.pos1.y + dy, this.pos1.x + dx);
            // point2 = createVector(this.pos1.x + dx, this.pos1.y + dy);
            point2 = createVector(dx + this.pos1.x, dy + this.pos1.y);
            // point2 = createVector(dy + this.pos1.y, dx + this.pos1.x);
        }
        else if (this.a <=270) {
            point2 = createVector(this.pos1.x - dx, this.pos1.y + dy);
        } else { // BUG:
            // console.log(`pos1 X: ${this.pos1.y}\tdX: ${dy}`);
            // console.log(`pos1 Y: ${this.pos1.x}\tdY: ${dx}\n\n`);
            // point2 = createVector(this.pos1.y - dy, this.pos1.x - dx);
            point2 = createVector(this.pos1.x - dx, this.pos1.y - dy);
            // point2 = createVector((this.pos1.y - dy), (this.pos1.x - dx));
            // point2 = createVector((dy * -1) + this.pos1.y, (dx * -1) + this.pos1.y);
        }

        return point2;
    }

    angleToRadians(a) {
        return a * (Math.PI / 180);
    }

    getPoints() {
        return [this.pos1, this.pos2];
    }
}
