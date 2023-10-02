const Shape = require('./shape')

class Triangle extends Shape {
    constructor() {
        super();
        this.points = '150, 18 244, 182 56, 182';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }

}

module.exports = Triangle;
