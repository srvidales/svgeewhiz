const Text = require("./text");
describe('Text', () => {
    it('can render', () => {
        const text = new Text();
        text.setColor('blue');
        text.setText('Hello!');
        expect(text.render()).toEqual('<text x="10" y="10">Hello!</text>');
    })
});
