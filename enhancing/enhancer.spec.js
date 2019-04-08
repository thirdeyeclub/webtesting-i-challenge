const { succeed, fail, repair, get} = require('./enhancer.js');
// test away!
const magicTestItem = {
name: 'magic item' ,
durability: 100,
enhancement: 12
}

describe('succeed()', () => {
it('does item have a name', () => {
    expect(succeed(magicTestItem.name)).toBeDefined();
});
it('does item have a name', () => {
    expect(succeed(magicTestItem.enhancement)).toBeDefined();
});
it('does item have a name', () => {
    expect(succeed(magicTestItem.durability)).toBeDefined();
});

});