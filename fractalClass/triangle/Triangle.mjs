/*
* for the Sierpiński triangle
*/
class Triangle {
    constructor(x,y,r) {
        this.pos = createVector(x,y);
        this.points = [this.pos];
        this.r = r;
        this.calculateOtherPoints(x,y,r);
    }

    generate() {
        let tris = [];
        let newR = this.r/2;
        let temp = new Triangle(this.pos.x, this.pos.y, newR);
        let points = temp.getPoints();
        points.forEach((item, i) => {
            let t = new Triangle(item.x,item.y,newR);
            tris.push(t);
        });
        return tris;
    }

    show() {
        push();
        let col = color(Math.abs(Math.floor(this.pos.x))%255,Math.abs(Math.floor(this.pos.y))%255,Math.abs(Math.floor(this.r))%255);
        fill(col);
        triangle(this.points[0].x,this.points[0].y,this.points[1].x,this.points[1].y,this.points[2].x,this.points[2].y,);
        pop();
    }

    calculateOtherPoints(x, y, r) {
        let angles = [];
        this.middleDist = (r/Math.tan(60))/5;
        for(let i=-1; i<2; i+=2) {
            // Multiply by i for -1 and +1
            let p = createVector(x+(i*this.middleDist), y+r);
            this.points.push(p);
        }
    }

    getPoints() {
        return this.points;
    }
}
