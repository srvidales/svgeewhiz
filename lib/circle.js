import Shape from "./shape";

class Circle extends Shape {
    constructor(cx, cy, r, stroke, strokeWidth, fill) {
        super();
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" stroke="${this.stroke}" stroke-width="${this.strokeWidth}" fill="${this.fill}" />`
    }

}

module.exports = Circle;
