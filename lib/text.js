/**
 * Text class.
 */
class Text {
    constructor() {
        this.x = 150;
        this.y = 125;
        this.fontSize = 60;
        this.textAnchor = 'middle'
    }

    /**
     * Sets the text's color.
     * @param {string} color
     */
    setColor(color) {
        this.color = color;
    }

    /**
     * Sets the text.
     * @param {string} color
     */
    setText(text) {
        this.text = text
    }

    /**
     * Generates partial code to render text.
     * @returns {string}
     */
    render() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.color}">${this.text}</text>`
    }

}

module.exports = Text
