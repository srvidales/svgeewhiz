const Square = require("./square");
describe('Square', () => {
    it('can render', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect x="10" y="10" width="100" height="100" fill="blue" />');
    })
});

