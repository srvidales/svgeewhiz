const Shape = require('./shape')

class Circle extends Shape {
    constructor() {
        super();
        this.cx = 10;
        this.cy = 10;
        this.r = 100;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`
    }

}

module.exports = Circle;
