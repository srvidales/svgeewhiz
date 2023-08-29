const Shape = require('./shape')

class Square extends Shape {
    constructor() {
        super();
        this.x = 10;
        this.y = 10;
        this.width = 100;
        this.height = 100;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }

}

module.exports = Square;
