const Shape = require('./shape')

/**
 * Square class that extends the base class Shape.
 */
class Square extends Shape {
    /**
     * Square class constructor. Initializes values.
     */
    constructor() {
        super();
        this.x = 90;
        this.y = 40;
        this.width = 120;
        this.height = 120;
    }

    /**
     * Generates partial code to render shape.
     * @returns {string}
     */
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`
    }

}

module.exports = Square;
