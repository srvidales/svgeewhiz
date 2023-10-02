const Circle = require("./circle");
describe('Circle', () => {
    it('can render', () => {
        const circle = new Circle();
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    })
});
