import Shop from '../src/checkout'

const shop = new Shop()

describe('#Shop', () => {
  test('If string is A return £50', () => {
    expect(shop.checkout("A")).toBe(50)
  }) 

  test('If string is B return £30', () => {
    expect(shop.checkout("B")).toBe(30)
  })
  
})