const Shape = require('./shape')

class Square extends Shape {
    constructor() {
        super();
        this.x = 90;
        this.y = 40;
        this.width = 120;
        this.height = 120;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }

}

module.exports = Square;
