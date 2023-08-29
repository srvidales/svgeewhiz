class Text {
    constructor() {
        this.x = 10;
        this.y = 10;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text
    }

    render() {
        return `<text x="${this.x}" y="${this.y}">${this.text}</text>`
    }

}

module.exports = Text
