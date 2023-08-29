const Circle = require("./circle");
describe('Circle', () => {
    it('can render', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="10" cy="10" r="100" fill="blue" />');
    })
});
