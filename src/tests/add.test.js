import add, {total}from '../js/add'

test('should test the add function ', () => {
    expect(total(1,2)).toBe('$3')
})
