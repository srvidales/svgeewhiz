const Shape = require('./shape')

/**
 * Triangle class that extends the base class Shape.
 */
class Triangle extends Shape {
    /**
     * Triangle class constructor. Initializes values.
     */
    constructor() {
        super();
        this.points = '150, 18 244, 182 56, 182';
    }

    /**
     * Sets the shape's color.
     * @param {string} color
     */
    setColor(color) {
        this.color = color;
    }

    /**
     * Generates partial code to render shape.
     * @returns {string}
     */
    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }

}

module.exports = Triangle;
