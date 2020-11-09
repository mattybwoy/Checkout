import Shop from '../src/checkout'

const shop = new Shop()

describe('#Shop', () => {
  test('If string is A return £50', () => {
    expect(shop.checkout("A")).toBe(50)
  }) 
})