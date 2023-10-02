const Shape = require('./shape')

class Circle extends Shape {
    constructor() {
        super();
        this.cx = 150;
        this.cy = 100;
        this.r = 80;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`
    }

}

module.exports = Circle;
