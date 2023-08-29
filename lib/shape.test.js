const Shape = require("./shape");
describe('Shape', () => {
    it('throws not implemented error when calling setColor', () => {
        const shape = new Shape();
        shape.setColor('blue');
        expect(() => {
            shape.render()
        }).toThrow(new Error('Not implemented exception.'));
    })
});

test('throws on octopus', () => {
});
