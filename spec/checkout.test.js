import Shop from '../src/checkout'

const shop = new Shop()

describe('#Shop', () => {
  test('If string is A return £50', () => {
    expect(shop.checkout("A")).toBe(50)
  }) 

  test('If string is B return £30', () => {
    expect(shop.checkout("B")).toBe(30)
  })

  test('If string is C return £20', () => {
    expect(shop.checkout("C")).toBe(20)
  })
  
  test('If string is D return £15', () => {
    expect(shop.checkout("D")).toBe(15)
  })

  test('If string is a return -1', () => {
    expect(shop.checkout("a")).toBe(-1)
  })

  test('If string is AA is 100', () => {
    expect(shop.checkout("AA")).toBe(100)
  })
  
  test('If string is CC return £40', () => {
    expect(shop.checkout("CC")).toBe(40)
  })

  test('If string is DD return £30', ()=> {
    expect(shop.checkout("DD")).toBe(30)
  })

  test('If string is AB return £80', () => {
    expect(shop.checkout("AB")).toBe(80)
  })
  
  test('If string is ABCD return £115', () => {
    expect(shop.checkout("ABCD")).toBe(115)
  })

  test('If string is BB return £45', () => {
    expect(shop.checkout("BB")).toBe(45)
  })
}) 