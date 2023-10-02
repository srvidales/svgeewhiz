const Triangle = require('./triangle')

describe('Triangle', () => {
    it('can render', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
});
