/*
* For the Sierpiński carpet 
*/
class Square {
    constructor(x,y,r) {
        this.pos = createVector(x,y);
        this.r = r;
    }

    generate() {
        let squares = [];
        for(let x=-1; x<2; x++) {
            for(let y=-1; y<2; y++) {
                let newR = this.r/3;
                if(!(x === 0 && y === 0)) {
                    let s = new Square(this.pos.x + x * newR, this.pos.y + y * newR, newR);
                    squares.push(s);
                }
            }
        }
        return squares;
    }

    show() {
        push();
        let col = color(Math.abs(Math.floor(this.pos.x))%255,Math.abs(Math.floor(this.pos.y))%255,Math.abs(Math.floor(this.r))%255);
        fill(col);
        square(this.pos.x, this.pos.y, this.r);
        pop();
    }
}
