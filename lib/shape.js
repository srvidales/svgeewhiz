/**
 * Shape class. Base class for shapes.
 */
class Shape {
    /**
     * Set shape's color.
     * @param {string} color
     */
    setColor(color) {
        this.color = color
    }

    /**
     * Base class render method. Not intended for use.
     */
    render() {
        throw new Error('Not implemented exception.');
    }
}

module.exports = Shape;
