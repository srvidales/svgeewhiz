const Triangle = require('./triangle')

describe('Shapes', () => {

    describe('Triangle', () => {
        it('can render', () => {
            const shape = new Triangle();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    });

});
