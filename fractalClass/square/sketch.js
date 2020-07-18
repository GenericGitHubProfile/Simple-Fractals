let carpet = [];

function setup() {
    createCanvas(900,900, WEBGL);
    rectMode(CENTER);
    noStroke();

    let s = new Square(0,0,900);
    carpet.push(s);
}

function draw() {
    background(0);
    carpet.forEach((item, i) => {
        item.show();
    });
}

function mouseClicked(e) {
    let next = [];
    carpet.forEach((item, i) => {
        let s = item;
        let newSquares = s.generate();
        next = next.concat(newSquares);
    });
    carpet=next;
}
