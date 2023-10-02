const Shape = require('./shape')

/**
 * Circle class that extends the base class Shape.
 */
class Circle extends Shape {
    /**
     * Circle class constructor. Initializes values.
     */
    constructor() {
        super();
        this.cx = 150;
        this.cy = 100;
        this.r = 80;
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
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`
    }

}

module.exports = Circle;
