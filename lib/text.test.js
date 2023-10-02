const Text = require("./text");
describe('Text', () => {
    it('can render', () => {
        const text = new Text();
        text.setColor('blue');
        text.setText('Hello!');
        expect(text.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Hello!</text>');
    })
});
