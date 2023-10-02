class Text {
    constructor() {
        this.x = 150;
        this.y = 125;
        this.fontSize = 60;
        this.textAnchor = 'middle'
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text
    }

    render() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.color}">${this.text}</text>`
    }

}

module.exports = Text
