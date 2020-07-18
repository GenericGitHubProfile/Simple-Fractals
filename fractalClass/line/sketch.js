let lines = [];

function setup() {
    createCanvas(900,900);
    let l = new Line(450,850,400,0);
    lines.push(l);

    background(0);
    l.show();
}

function draw() {

}

function mouseClicked(e) {
    background(0);
    let next = [];
    lines.forEach((item, i) => {
        let newLines = item.generate();
        next = next.concat(newLines);
    });
    lines=next;
    lines.forEach((item, i) => {
        item.show();
    });

    console.log(lines);
}
