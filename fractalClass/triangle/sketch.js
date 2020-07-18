let tris = [];

function setup() {
    createCanvas(900,900, WEBGL);

    let t = new Triangle(0,-400, 600);
    tris.push(t);
}

function draw() {
    background(0);
    tris.forEach((item, i) => {
        item.show();
    });
}

function mouseClicked(e) {
    background(0);
    let next = [];
    tris.forEach((item, i) => {
        let newTris = item.generate();
        next = next.concat(newTris);
    });
    tris=next;
}
