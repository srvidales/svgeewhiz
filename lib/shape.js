class Shape {
    setColor(color) {
        this.color = color
    }

    render() {
        throw new Error('Not implemented exception.');
    }
}

module.exports = Shape;
