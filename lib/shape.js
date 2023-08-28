class Shape {
    constructor() {
    }

    setColor(color) {
        this.color = color
    }

    render() {
        throw new Error('Not implemented.');
    }
}

module.exports = Shape;
