export default class Shop {

  checkout(item) {
    let split = item.split('')
    let price = 0;
    const prices = {"A": 50, "B": 30, "C": 20, "D": 15}

    for(let i=0; i< split.length; i++) {
      if(!prices[split[i]]) {
        return -1
      }
      price += prices[split[i]]
    }
    return price;
  }
}  