const Square = require("./square");
describe('Square', () => {
    it('can render', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
    })
});
