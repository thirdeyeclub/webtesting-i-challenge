const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!
const magicTestItem = {
name: "wood",
durability: 100,
enhancement: 12
}

describe('succeed()', () => {
    test('item has required properties', ()=>{
        expect(succeed(magicTestItem)).toEqual({message: 'no required props'})
    });

});